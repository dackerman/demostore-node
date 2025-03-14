// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface OffsetPaginationResponse<Item> {
  data: Array<Item>;

  next: number;
}

export interface OffsetPaginationParams {
  /**
   * The number of elements to skip.
   */
  skip?: number;

  /**
   * The maximum number of elements to fetch.
   */
  limit?: number;
}

export class OffsetPagination<Item> extends AbstractPage<Item> implements OffsetPaginationResponse<Item> {
  data: Array<Item>;

  next: number;

  constructor(
    client: APIClient,
    response: Response,
    body: OffsetPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.next = body.next || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<OffsetPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.next;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { skip: currentCount } };
  }
}
