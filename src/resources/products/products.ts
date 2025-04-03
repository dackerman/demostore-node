// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as VariantsAPI from './variants';
import {
  ProductVariant,
  VariantCreateParams,
  VariantDeleteParams,
  VariantDeleteResponse,
  VariantListParams,
  VariantListResponse,
  VariantRetrieveParams,
  VariantUpdateParams,
  Variants,
} from './variants';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Products extends APIResource {
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);

  /**
   * Create Product
   */
  create(params: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<Product> {
    const { org_id = this._client.orgId, ...body } = params;
    return this._client.post(`/orgs/${org_id}/products`, { body, ...options });
  }

  /**
   * Read Product
   */
  retrieve(
    productId: string,
    params?: ProductRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Product>;
  retrieve(productId: string, options?: Core.RequestOptions): Core.APIPromise<Product>;
  retrieve(
    productId: string,
    params: ProductRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Product> {
    if (isRequestOptions(params)) {
      return this.retrieve(productId, {}, params);
    }
    const { org_id = this._client.orgId } = params;
    return this._client.get(`/orgs/${org_id}/products/${productId}`, options);
  }

  /**
   * Update Product
   */
  update(
    productId: string,
    params: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Product> {
    const { org_id = this._client.orgId, ...body } = params;
    return this._client.put(`/orgs/${org_id}/products/${productId}`, { body, ...options });
  }

  /**
   * Read Products
   */
  list(
    params?: ProductListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsOffsetPagination, Product>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProductsOffsetPagination, Product>;
  list(
    params: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsOffsetPagination, Product> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { org_id = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/orgs/${org_id}/products`, ProductsOffsetPagination, {
      query,
      ...options,
    });
  }

  /**
   * Delete Product
   */
  delete(
    productId: string,
    params?: ProductDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductDeleteResponse>;
  delete(productId: string, options?: Core.RequestOptions): Core.APIPromise<ProductDeleteResponse>;
  delete(
    productId: string,
    params: ProductDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(productId, {}, params);
    }
    const { org_id = this._client.orgId } = params;
    return this._client.delete(`/orgs/${org_id}/products/${productId}`, options);
  }
}

export class ProductsOffsetPagination extends OffsetPagination<Product> {}

/**
 * Represents a Product record
 */
export interface Product {
  description: string;

  image_url: string;

  name: string;

  price: number;

  product_id: string;
}

export interface ProductDeleteResponse {
  success: boolean;
}

export interface ProductCreateParams {
  /**
   * Path param:
   */
  org_id?: string;

  /**
   * Body param:
   */
  description: string;

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

export interface ProductRetrieveParams {
  org_id?: string;
}

export interface ProductUpdateParams {
  /**
   * Path param:
   */
  org_id?: string;

  /**
   * Body param:
   */
  description: string;

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

export interface ProductListParams extends OffsetPaginationParams {
  /**
   * Path param:
   */
  org_id?: string;
}

export interface ProductDeleteParams {
  org_id?: string;
}

Products.ProductsOffsetPagination = ProductsOffsetPagination;
Products.Variants = Variants;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductDeleteResponse as ProductDeleteResponse,
    ProductsOffsetPagination as ProductsOffsetPagination,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };

  export {
    Variants as Variants,
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
