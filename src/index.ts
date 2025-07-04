// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type OffsetPaginationParams, OffsetPaginationResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { FuntoolSetDarkmodeParams, FuntoolSetDarkmodeResponse, Funtools } from './resources/funtools';
import {
  Product,
  ProductCreateParams,
  ProductDeleteParams,
  ProductDeleteResponse,
  ProductListParams,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
  ProductsOffsetPagination,
} from './resources/products/products';

export interface ClientOptions {
  /**
   * The token to use for authentication
   */
  authToken?: string | undefined;

  /**
   * The organization ID context
   */
  orgId?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STAINLESS_STORE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Stainless Store API.
 */
export class StainlessStore extends Core.APIClient {
  authToken: string;
  orgId: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Stainless Store API.
   *
   * @param {string | undefined} [opts.authToken=process.env['DEMOSTORE_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.orgId=process.env['DEMOSTORE_ORG_ID'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['STAINLESS_STORE_BASE_URL'] ?? http://localhost:8000] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STAINLESS_STORE_BASE_URL'),
    authToken = Core.readEnv('DEMOSTORE_API_KEY'),
    orgId = Core.readEnv('DEMOSTORE_ORG_ID'),
    ...opts
  }: ClientOptions = {}) {
    if (authToken === undefined) {
      throw new Errors.StainlessStoreError(
        "The DEMOSTORE_API_KEY environment variable is missing or empty; either provide it, or instantiate the StainlessStore client with an authToken option, like new StainlessStore({ authToken: '123e4567-e89b-12d3-a456-426614174000' }).",
      );
    }
    if (orgId === undefined) {
      throw new Errors.StainlessStoreError(
        "The DEMOSTORE_ORG_ID environment variable is missing or empty; either provide it, or instantiate the StainlessStore client with an orgId option, like new StainlessStore({ orgId: 'my_org' }).",
      );
    }

    const options: ClientOptions = {
      authToken,
      orgId,
      ...opts,
      baseURL: baseURL || `http://localhost:8000`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'http://localhost:8000' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authToken = authToken;
    this.orgId = orgId;
  }

  funtools: API.Funtools = new API.Funtools(this);
  products: API.Products = new API.Products(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'http://localhost:8000';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static StainlessStore = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StainlessStoreError = Errors.StainlessStoreError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

StainlessStore.Funtools = Funtools;
StainlessStore.Products = Products;
StainlessStore.ProductsOffsetPagination = ProductsOffsetPagination;
export declare namespace StainlessStore {
  export type RequestOptions = Core.RequestOptions;

  export import OffsetPagination = Pagination.OffsetPagination;
  export {
    type OffsetPaginationParams as OffsetPaginationParams,
    type OffsetPaginationResponse as OffsetPaginationResponse,
  };

  export {
    Funtools as Funtools,
    type FuntoolSetDarkmodeResponse as FuntoolSetDarkmodeResponse,
    type FuntoolSetDarkmodeParams as FuntoolSetDarkmodeParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductDeleteResponse as ProductDeleteResponse,
    ProductsOffsetPagination as ProductsOffsetPagination,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  StainlessStoreError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default StainlessStore;
