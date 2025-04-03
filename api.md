# Funtools

Types:

- <code><a href="./src/resources/funtools.ts">FuntoolSetDarkmodeResponse</a></code>

Methods:

- <code title="put /funtools/set_darkmode_value">client.funtools.<a href="./src/resources/funtools.ts">setDarkmode</a>({ ...params }) -> FuntoolSetDarkmodeResponse</code>

# Products

Types:

- <code><a href="./src/resources/products/products.ts">Product</a></code>
- <code><a href="./src/resources/products/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /orgs/{org_id}/products">client.products.<a href="./src/resources/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /orgs/{org_id}/products/{product_id}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(productId, { ...params }) -> Product</code>
- <code title="put /orgs/{org_id}/products/{product_id}">client.products.<a href="./src/resources/products/products.ts">update</a>(productId, { ...params }) -> Product</code>
- <code title="get /orgs/{org_id}/products">client.products.<a href="./src/resources/products/products.ts">list</a>({ ...params }) -> ProductsOffsetPagination</code>
- <code title="delete /orgs/{org_id}/products/{product_id}">client.products.<a href="./src/resources/products/products.ts">delete</a>(productId, { ...params }) -> ProductDeleteResponse</code>

## Variants

Types:

- <code><a href="./src/resources/products/variants.ts">ProductVariant</a></code>
- <code><a href="./src/resources/products/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/products/variants.ts">VariantDeleteResponse</a></code>

Methods:

- <code title="post /orgs/{org_id}/products/{product_id}/variants">client.products.variants.<a href="./src/resources/products/variants.ts">create</a>(productId, { ...params }) -> ProductVariant</code>
- <code title="get /orgs/{org_id}/products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">retrieve</a>(productId, variantId, { ...params }) -> ProductVariant</code>
- <code title="put /orgs/{org_id}/products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">update</a>(productId, variantId, { ...params }) -> ProductVariant</code>
- <code title="get /orgs/{org_id}/products/{product_id}/variants">client.products.variants.<a href="./src/resources/products/variants.ts">list</a>(productId, { ...params }) -> VariantListResponse</code>
- <code title="delete /orgs/{org_id}/products/{product_id}/variants/{variant_id}">client.products.variants.<a href="./src/resources/products/variants.ts">delete</a>(productId, variantId, { ...params }) -> VariantDeleteResponse</code>
