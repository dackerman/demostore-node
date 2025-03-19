// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as VariantsAPI from './variants';
import {
  ProductVariant,
  VariantCreateParams,
  VariantDeleteResponse,
  VariantListResponse,
  VariantUpdateParams,
  Variants,
} from './variants';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Products extends APIResource {
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);

  /**
   * Create Product
   */
  create(body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<Product> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Read Product
   */
  retrieve(productId: string, options?: Core.RequestOptions): Core.APIPromise<Product> {
    return this._client.get(`/products/${productId}`, options);
  }

  /**
   * Update Product
   */
  update(
    productId: string,
    body: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Product> {
    return this._client.put(`/products/${productId}`, { body, ...options });
  }

  /**
   * Read Products
   */
  list(
    query?: ProductListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsOffsetPagination, Product>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProductsOffsetPagination, Product>;
  list(
    query: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsOffsetPagination, Product> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/products', ProductsOffsetPagination, { query, ...options });
  }

  /**
   * Delete Product
   */
  delete(productId: string, options?: Core.RequestOptions): Core.APIPromise<ProductDeleteResponse> {
    return this._client.delete(`/products/${productId}`, options);
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

  /**
   * Price
   */
  price: number;

  product_id: string;
}

export interface ProductDeleteResponse {
  success: boolean;
}

export interface ProductCreateParams {
  description: string;

  image_url: string;

  name: string;

  price: number;
}

export interface ProductUpdateParams {
  description: string;

  image_url: string;

  name: string;

  price: number;
}

export interface ProductListParams extends OffsetPaginationParams {}

Products.ProductsOffsetPagination = ProductsOffsetPagination;
Products.Variants = Variants;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductDeleteResponse as ProductDeleteResponse,
    ProductsOffsetPagination as ProductsOffsetPagination,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Variants as Variants,
    type ProductVariant as ProductVariant,
    type VariantListResponse as VariantListResponse,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
  };
}
