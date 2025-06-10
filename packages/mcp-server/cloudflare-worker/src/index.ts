import { makeOAuthConsent } from './app';
import { McpAgent } from 'agents/mcp';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpOptions, initMcpServer, server, ClientOptions } from '@dackerman-stainless/demostore-mcp/server';

type MCPProps = {
  clientProps: ClientOptions;
  clientConfig: McpOptions;
};

/**
 * The information displayed on the OAuth consent screen
 */
const serverConfig: ServerConfig = {
  orgName: 'StainlessStore',
  clientProperties: [
    {
      key: 'authToken',
      label: 'Auth Token',
      description: 'The token to use for authentication',
      required: true,
      default: undefined,
      placeholder: '123e4567-e89b-12d3-a456-426614174000',
      type: 'string',
    },
    {
      key: 'orgId',
      label: 'Org ID',
      description: 'The organization ID context',
      required: true,
      default: undefined,
      placeholder: 'my_org',
      type: 'string',
    },
  ],
};

export class MyMCP extends McpAgent<Env, unknown, MCPProps> {
  server = server;

  async init() {
    initMcpServer({
      server: this.server,
      clientOptions: this.props.clientProps,
      mcpOptions: this.props.clientConfig,
    });
  }
}

export type ServerConfig = {
  /**
   * The name of the company/project
   */
  orgName: string;

  /**
   * An optional company logo image
   */
  logoUrl?: string;

  /**
   * An optional URL with instructions for users to get an API key
   */
  instructionsUrl?: string;

  /**
   * Properties collected to initialize the client
   */
  clientProperties: ClientProperty[];
};

export type ClientProperty = {
  key: string;
  label: string;
  description?: string;
  required: boolean;
  default?: unknown;
  placeholder?: string;
  type: 'string' | 'number' | 'password' | 'select';
  options?: { label: string; value: string }[];
};

// Export the OAuth handler as the default
export default new OAuthProvider({
  apiHandlers: {
    // @ts-expect-error
    '/sse': MyMCP.serveSSE('/sse'), // legacy SSE
    // @ts-expect-error
    '/mcp': MyMCP.serve('/mcp'), // Streaming HTTP
  },
  // @ts-expect-error
  defaultHandler: makeOAuthConsent(serverConfig),
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
});
