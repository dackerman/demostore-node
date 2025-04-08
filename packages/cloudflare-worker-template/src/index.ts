import app from './app';
import { McpAgent } from 'agents/mcp';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { init, server } from '@dackerman-stainless/demostore-mcp/server';
import StainlessStore from '@dackerman-stainless/demostore';

export class MyMCP extends McpAgent {
  server = server; // set the server on the class instance

  async init() {
    // Instantiate your client with the values from the worker environment
    const client = new StainlessStore({
      authToken: this.env.DEMOSTORE_API_KEY,
      orgId: this.env.DEMOSTORE_ORG_ID,
      authToken: '123e4567-e89b-12d3-a456-426614174000',
      orgId: 'my_org',
    });

    // Initialize all the generated endpoints with the server
    init({ server: this.server, client });
  }
}

// Export the OAuth handler as the default
export default new OAuthProvider({
  apiRoute: '/sse',
  // TODO: fix these types
  // @ts-ignore
  apiHandler: MyMCP.mount('/sse'),
  // @ts-ignore
  defaultHandler: app,
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
});
