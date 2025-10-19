import { getProductById, getProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCartButton } from './_components/add-to-cart-button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/product-card';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  const image = placeholderImages.find((p) => p.id === product.imageId);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.longDescription}</p>
          
          <div className="mt-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
       <div className="mt-24">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
