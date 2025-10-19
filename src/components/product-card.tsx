import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = placeholderImages.find(p => p.id === product.imageId);

  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={product.name}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-medium">{product.name}</CardTitle>
          <CardDescription className="mt-1 text-sm text-muted-foreground">
            {product.description}
          </CardDescription>
          <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
