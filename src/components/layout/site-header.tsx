'use client';

import Link from 'next/link';
import { Menu, Leaf, User, ShoppingCart, LogOut, Search, Heart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from '@/components/ui/dropdown-menu';
import { CartSheet } from '@/components/cart/cart-sheet';
import { useCart } from '@/hooks/use-cart';
import { Input } from '../ui/input';

const navLinks = [
  { href: '/products', label: 'All Products' },
  { href: '/products?category=vases', label: 'Vases' },
  { href: '/products?category=coasters', label: 'Coasters' },
  { href: '/products?category=candles', label: 'Candles' },
  { href: '/products?category=blankets', label: 'Blankets' },
  { href: '/products?category=journals', label: 'Journals' },
  { href: '/products?category=bottles', label: 'Bottles' },
];

export function SiteHeader() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Verdant Shop</span>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Verdant Shop</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <nav className="hidden md:flex gap-4">
             <Link
                href="/products"
                className="font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                All Products
              </Link>
            <DropdownMenu>
                <DropdownMenuTrigger className="font-medium text-foreground/60 transition-colors hover:text-foreground flex items-center gap-1 outline-none">
                    Categories
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {navLinks.slice(1).map(link => (
                        <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href}>{link.label}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          <div className="flex items-center gap-4 md:ml-4">
            <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="w-full rounded-lg bg-background pl-9" />
            </div>
          </div>


          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                </Link>
            </Button>
            <CartSheet>
                <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartCount}
                    </span>
                )}
                <span className="sr-only">Open Cart</span>
                </Button>
            </CartSheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
