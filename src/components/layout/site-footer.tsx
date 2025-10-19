import { Leaf, Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">
                Verdant Shop
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Curated goods for a modern lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <div className="flex flex-col gap-1">
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">All Products</Link>
                <Link href="/products?category=vases" className="text-sm text-muted-foreground hover:text-foreground">Vases</Link>
                <Link href="/products?category=candles" className="text-sm text-muted-foreground hover:text-foreground">Candles</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <div className="flex flex-col gap-1">
                <Link href="/legal/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                <Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                <Link href="/legal/refund-policy" className="text-sm text-muted-foreground hover:text-foreground">Refund Policy</Link>
            </div>
          </div>
          <div>
             <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
                </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Verdant Shop. All rights reserved. Powered by <Link href="https://ladestack.in" className="underline" target="_blank" rel="noopener noreferrer">Ladestack</Link>.
        </div>
      </div>
    </footer>
  );
}
