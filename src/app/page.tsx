import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { AIProductRecommender } from '@/components/ai/product-recommender';
import { placeholderImages } from '@/lib/placeholder-images';

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);
  const heroImage = placeholderImages.find(p => p.id === 'hero-main');

  return (
    <div className="flex flex-col gap-12 md:gap-24">
      <section className="relative h-[60vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl text-white">
            Discover Your Perfect Green
          </h1>
          <p className="max-w-xl text-lg text-white/90">
            Curated collections of the finest products, delivered to your door.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Featured Products
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Explore our hand-picked selection of high-quality items that our
            customers love.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <AIProductRecommender />
      </section>
    </div>
  );
}
