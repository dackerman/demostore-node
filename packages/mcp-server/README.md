# Stainless Store Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

```json
{
  "mcpServers": {
    "dackerman_stainless_demostore_api": {
      "command": "npx",
      "args": ["-y", "@dackerman-stainless/demostore-mcp"],
      "env": {
        "DEMOSTORE_API_KEY": "123e4567-e89b-12d3-a456-426614174000",
        "DEMOSTORE_ORG_ID": "my_org"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`:

```sh
$ npx -y @dackerman-stainless/demostore-mcp --help
```

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Available Tools

The following tools are available in this MCP server.

### Resource `funtools`:

- `set_darkmode_funtools` (`write`): Set Darkmode Value

### Resource `products`:

- `create_products` (`write`): Create Product
- `retrieve_products` (`read`): Read Product
- `update_products` (`write`): Update Product
- `list_products` (`read`): Read Products
- `delete_products` (`write`): Delete Product

### Resource `products.variants`:

- `create_products_variants` (`write`): Create Product Variant
- `retrieve_products_variants` (`read`): Read Product Variant
- `update_products_variants` (`write`): Update Product Variant
- `list_products_variants` (`read`): Read Product Variants
- `delete_products_variants` (`write`): Delete Product Variant
