// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Variants extends APIResource {
  /**
   * Create Product Variant
   */
  create(
    productId: string,
    body: VariantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    return this._client.post(`/products/${productId}/variants`, { body, ...options });
  }

  /**
   * Read Product Variant
   */
  retrieve(
    productId: string,
    variantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    return this._client.get(`/products/${productId}/variants/${variantId}`, options);
  }

  /**
   * Update Product Variant
   */
  update(
    productId: string,
    variantId: string,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductVariant> {
    return this._client.put(`/products/${productId}/variants/${variantId}`, { body, ...options });
  }

  /**
   * Read Product Variants
   */
  list(productId: string, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse> {
    return this._client.get(`/products/${productId}/variants`, options);
  }

  /**
   * Delete Product Variant
   */
  delete(
    productId: string,
    variantId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse> {
    return this._client.delete(`/products/${productId}/variants/${variantId}`, options);
  }
}

/**
 * Represents a ProductVariant
 */
export interface ProductVariant {
  image_url: string;

  name: string;

  price: number;

  product_id: string;

  variant_id: string;

  type?: 'big' | 'small';
}

export type VariantListResponse = Array<ProductVariant>;

export interface VariantDeleteResponse {
  success: boolean;
}

export interface VariantCreateParams {
  /**
   * URL of the image to display for the variant
   */
  image_url: string;

  /**
   * The name of the product
   */
  name: string;

  price: number;

  type?: 'big' | 'small';
}

export interface VariantUpdateParams {
  /**
   * URL of the image to display for the variant
   */
  image_url: string;

  /**
   * The name of the product
   */
  name: string;

  price: number;

  type?: 'big' | 'small';
}

export declare namespace Variants {
  export {
    type ProductVariant as ProductVariant,
    type VariantListResponse as VariantListResponse,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
  };
}
