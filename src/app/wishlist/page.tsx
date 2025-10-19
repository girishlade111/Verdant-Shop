import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WishlistPage() {
  const wishlistItems: any[] = []; // Replace with actual wishlist logic

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold text-center mb-8">Your Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Render wishlist items here */}
        </div>
      ) : (
        <div className="text-center py-12 flex flex-col items-center gap-4">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">Your Wishlist is Empty</h3>
          <p className="mt-2 text-muted-foreground">
            Add items you love to your wishlist to save them for later.
          </p>
          <Button asChild>
            <Link href="/products">Discover Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
