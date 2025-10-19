import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-4 text-center mb-8">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Our Collection
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Browse our curated selection of high-quality products designed for a
          modern and minimalist lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
