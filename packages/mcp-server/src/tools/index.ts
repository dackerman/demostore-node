// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import StainlessStore from '@dackerman-stainless/demostore';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import set_darkmode_funtools from './funtools/set-darkmode-funtools';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import delete_products from './products/delete-products';
import create_products_variants from './products/variants/create-products-variants';
import retrieve_products_variants from './products/variants/retrieve-products-variants';
import update_products_variants from './products/variants/update-products-variants';
import list_products_variants from './products/variants/list-products-variants';
import delete_products_variants from './products/variants/delete-products-variants';

export type HandlerFunction = (
  client: StainlessStore,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(set_darkmode_funtools);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(delete_products);
addEndpoint(create_products_variants);
addEndpoint(retrieve_products_variants);
addEndpoint(update_products_variants);
addEndpoint(list_products_variants);
addEndpoint(delete_products_variants);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
