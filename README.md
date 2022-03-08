## mb-proudct-card-1

this is an NPM deployment test suite

### Betsabe Moreno

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'bm-product-card-1'
```

```
  <ProductCard
    product={product}
      onChange={onProductCountChange}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    >
    {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>
```
