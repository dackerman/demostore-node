# Products

Types:

- <code><a href="./src/resources/products/products.ts">Product</a></code>
- <code><a href="./src/resources/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /products/{product_id}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(productId) -> Product</code>
- <code title="put /products/{product_id}">client.products.<a href="./src/resources/products/products.ts">update</a>(productId, { ...params }) -> Product</code>
- <code title="get /products">client.products.<a href="./src/resources/products/products.ts">list</a>() -> ProductListResponse</code>
- <code title="delete /products/{product_id}">client.products.<a href="./src/resources/products/products.ts">delete</a>(productId) -> ProductDeleteResponse</code>

## Variants

Types:

- <code><a href="./src/resources/products/variants.ts">ProductVariant</a></code>
- <code><a href="./src/resources/products/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/products/variants.ts">VariantDeleteResponse</a></code>

Methods:

- <code title="post /products/{product_id}/variants">client.products.variants.<a href="./src/resources/products/variants.ts">create</a>(productId, { ...params }) -> ProductVariant</code>
- <code title="get /products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">retrieve</a>(productId, variantId) -> ProductVariant</code>
- <code title="put /products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">update</a>(productId, variantId, { ...params }) -> ProductVariant</code>
- <code title="get /products/{product_id}/variants">client.products.variants.<a href="./src/resources/products/variants.ts">list</a>(productId) -> VariantListResponse</code>
- <code title="delete /products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">delete</a>(productId, variantId) -> VariantDeleteResponse</code>
