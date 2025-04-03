// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Variants extends APIResource {
  /**
   * Create Product Variant
   */
  create(
    productId: string,
    params: VariantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    const { org_id = this._client.orgId, ...body } = params;
    return this._client.post(`/orgs/${org_id}/products/${productId}/variants`, { body, ...options });
  }

  /**
   * Read Product Variant
   */
  retrieve(
    productId: string,
    variantId: string,
    params?: VariantRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant>;
  retrieve(
    productId: string,
    variantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant>;
  retrieve(
    productId: string,
    variantId: string,
    params: VariantRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    if (isRequestOptions(params)) {
      return this.retrieve(productId, variantId, {}, params);
    }
    const { org_id = this._client.orgId } = params;
    return this._client.get(`/orgs/${org_id}/products/${productId}/variants/${variantId}`, options);
  }

  /**
   * Update Product Variant
   */
  update(
    productId: string,
    variantId: string,
    params: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    const { org_id = this._client.orgId, ...body } = params;
    return this._client.put(`/orgs/${org_id}/products/${productId}/variants/${variantId}`, {
      body,
      ...options,
    });
  }

  /**
   * Read Product Variants
   */
  list(
    productId: string,
    params?: VariantListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantListResponse>;
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse>;
  list(
    productId: string,
    params: VariantListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantListResponse> {
    if (isRequestOptions(params)) {
      return this.list(productId, {}, params);
    }
    const { org_id = this._client.orgId } = params;
    return this._client.get(`/orgs/${org_id}/products/${productId}/variants`, options);
  }

  /**
   * Delete Product Variant
   */
  delete(
    productId: string,
    variantId: string,
    params?: VariantDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse>;
  delete(
    productId: string,
    variantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse>;
  delete(
    productId: string,
    variantId: string,
    params: VariantDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(productId, variantId, {}, params);
    }
    const { org_id = this._client.orgId } = params;
    return this._client.delete(`/orgs/${org_id}/products/${productId}/variants/${variantId}`, options);
  }
}

/**
 * Represents a ProductVariant record
 */
export interface ProductVariant {
  image_url: string;

  name: string;

  price: number;

  product_id: string;

  variant_id: string;
}

export type VariantListResponse = Array<ProductVariant>;

export interface VariantDeleteResponse {
  success: boolean;
}

export interface VariantCreateParams {
  /**
   * Path param:
   */
  org_id?: string;

  /**
   * Body param:
   */
  image_url: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  price: number;
}

export interface VariantRetrieveParams {
  org_id?: string;
}

export interface VariantUpdateParams {
  /**
   * Path param:
   */
  org_id?: string;

  /**
   * Body param:
   */
  image_url: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  price: number;
}

export interface VariantListParams {
  org_id?: string;
}

export interface VariantDeleteParams {
  org_id?: string;
}

export declare namespace Variants {
  export {
    type ProductVariant as ProductVariant,
    type VariantListResponse as VariantListResponse,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantRetrieveParams as VariantRetrieveParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
    type VariantDeleteParams as VariantDeleteParams,
  };
}
