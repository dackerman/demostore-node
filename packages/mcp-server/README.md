# Stainless Store Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export DEMOSTORE_API_KEY = "123e4567-e89b-12d3-a456-426614174000"
export DEMOSTORE_ORG_ID = "my_org"
npx -y @dackerman-stainless/demostore-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

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

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@dackerman-stainless/demostore-mcp/server";

// import a specific tool
import setDarkmodeFuntools from "@dackerman-stainless/demostore-mcp/tools/funtools/set-darkmode-funtools";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [setDarkmodeFuntools, myCustomEndpoint] });
```

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
