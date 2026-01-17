# MCP Server Discovery Tool

An interactive CLI tool to discover Model Context Protocol (MCP) servers and other AI agents using the Hashgraph Online Universal Registry.

## Features

- **Multi-Protocol Search**: Find agents across MCP, Virtuals Protocol, and generic A2A standards.
- **Interactive UI**: Browse results and view details using a friendly CLI interface.
- **Agent Resolution**: Resolve UAIDs to get full connection details.

## Installation

```bash
npm install
```

## Usage

Start the discovery tool:

```bash
npm start
```

Follow the on-screen prompts to search for capabilities or browse by protocol.

## Integrations

- Uses `RegistryBrokerClient` from [`@hashgraphonline/standards-sdk`](https://www.npmjs.com/package/@hashgraphonline/standards-sdk)
- Designed to work with `@hol-org/hashnet-mcp` for connecting to the discovered servers (future extension).

## Resources

- [Model Context Protocol](https://modelcontextprotocol.io)
- [Hashgraph Online Registry](https://hol.org/registry)
