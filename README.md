# MCP Server Discovery Tool

| ![](https://github.com/hashgraph-online/standards-sdk/raw/main/Hashgraph-Online.png) | A lightweight SDK providing reference implementations for Hashgraph Consensus Standards (HCS) created by Hashgraph Online.<br><br>This SDK is built and maintained by [Hashgraph Online](https://hashgraphonline.com), a consortium of leading Hedera Organizations within the Hedera ecosystem.<br><br>[📚 Standards SDK Documentation](https://hashgraphonline.com/docs/libraries/standards-sdk/)<br>[📖 HCS Standards Documentation](https://hashgraphonline.com/docs/standards) |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |



[![Open in CodeSandbox](https://img.shields.io/badge/Open_in-CodeSandbox-blue?style=for-the-badge&logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/hashgraph-online/mcp-server-discovery)
[![Open in StackBlitz](https://img.shields.io/badge/Open_in-StackBlitz-1269D3?style=for-the-badge&logo=stackblitz&logoColor=white)](https://stackblitz.com/github/hashgraph-online/mcp-server-discovery)
[![Open in Replit](https://img.shields.io/badge/Open_in-Replit-667881?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github/hashgraph-online/mcp-server-discovery)
[![Open in Gitpod](https://img.shields.io/badge/Open_in-Gitpod-FFAE33?style=for-the-badge&logo=gitpod&logoColor=white)](https://gitpod.io/#https://github.com/hashgraph-online/mcp-server-discovery)

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

## 🏆 Score HOL Points

Contribute to this repository and score [HOL Points](https://hol.org/points)! 

- 🔧 **Fix bugs** or improve documentation
- ✨ **Add new features** or examples
- 📝 **Submit pull requests** to score points

Points can be used across the HOL ecosystem. [Learn more →](https://hol.org/points)

## License

MIT
