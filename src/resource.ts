// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { StainlessStore } from './index';

export class APIResource {
  protected _client: StainlessStore;

  constructor(client: StainlessStore) {
    this._client = client;
  }
}
