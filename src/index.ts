import { RegistryBrokerClient } from '@hashgraphonline/standards-sdk';
import { input, select, confirm } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';

const client = new RegistryBrokerClient({
  baseUrl: 'https://hol.org/registry/api/v1',
});

async function main() {
  console.log(chalk.bold.blue('🌐 Hashgraph Online MCP Discovery Tool'));
  console.log(chalk.gray('Find and connect with AI agents and MCP servers across protocols.\n'));

  while (true) {
    const action = await select({
      message: 'What would you like to do?',
      choices: [
        { name: 'Search for MCP Servers', value: 'search' },
        { name: 'Browse by Protocol', value: 'browse' },
        { name: 'Exit', value: 'exit' },
      ],
    });

    if (action === 'exit') break;

    if (action === 'search') {
      const query = await input({ message: 'Enter search term (e.g., "code", "weather"): ' });
      await performSearch(query);
    } else if (action === 'browse') {
      const protocol = await select({
        message: 'Select Protocol:',
        choices: [
          { name: 'Model Context Protocol (MCP)', value: 'mcp' },
          { name: 'Virtuals Protocol', value: 'virtuals' },
          { name: 'Agent-to-Agent (A2A)', value: 'a2a' },
        ],
      });
      await performSearch('', protocol);
    }
  }
}

async function performSearch(query: string, protocol?: string) {
  const spinner = ora('Searching Universal Registry...').start();
  
  try {
    const results = await client.search({
      q: query,
      registry: protocol, // Filter by registry/protocol if provided
      limit: 10,
    });

    spinner.stop();

    if (results.hits.length === 0) {
      console.log(chalk.yellow('No agents found. Try a different query.'));
      return;
    }

    console.log(chalk.green(`\nFound ${results.total} results:`));
    
    // Display results table-like
    results.hits.forEach((hit, idx) => {
      console.log(chalk.bold(`${idx + 1}. ${hit.name}`));
      console.log(`   ${chalk.gray('UAID:')} ${hit.uaid}`);
      console.log(`   ${chalk.gray('Registry:')} ${hit.registry}`);
      if (hit.trustScore) {
        console.log(`   ${chalk.gray('Trust Score:')} ${hit.trustScore}`);
      }
      console.log('');
    });

    const viewDetails = await confirm({ message: 'View details for an agent?' });
    if (viewDetails) {
      const index = await input({ message: 'Enter number to view:' });
      const idx = parseInt(index) - 1;
      if (results.hits[idx]) {
        await displayAgentDetails(results.hits[idx].uaid);
      }
    }

  } catch (error) {
    spinner.fail('Search failed');
    console.error(error);
  }
}

async function displayAgentDetails(uaid: string) {
  const spinner = ora('Resolving agent details...').start();
  const data = await client.resolveUaid(uaid);
  spinner.stop();

  const agent = data.agent;
  console.log(chalk.bold.magenta('\n=== Agent Details ==='));
  console.log(`${chalk.bold('Name:')} ${agent.name}`);
  console.log(`${chalk.bold('Description:')} ${agent.description || 'N/A'}`);
  console.log(`${chalk.bold('Communication Protocol:')} ${agent.communicationProtocol || 'N/A'}`);
  console.log(`${chalk.bold('Endpoints:')}`);
  
  if (Array.isArray(agent.endpoints)) {
    agent.endpoints.forEach((ep: any) => console.log(`  - ${ep}`));
  } else {
    console.log(`  - ${JSON.stringify(agent.endpoints)}`);
  }
  
  console.log(chalk.bold.magenta('=====================\n'));
}

main();
