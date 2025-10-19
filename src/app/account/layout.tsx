'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, MapPin, CreditCard } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { href: '/account/profile', label: 'Profile', icon: User },
    { href: '/account/orders', label: 'Orders', icon: ShoppingBag },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className="font-headline text-4xl font-bold text-center mb-8">My Account</h1>
        <div className="grid md:grid-cols-[240px_1fr] gap-12 items-start">
            <aside>
                <nav className="flex flex-col gap-2">
                    {navItems.map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <Button
                                key={item.href}
                                asChild
                                variant={isActive ? 'default' : 'ghost'}
                                className="justify-start"
                            >
                                <Link href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.label}
                                </Link>
                            </Button>
                        )
                    })}
                </nav>
            </aside>
            <main>
                {children}
            </main>
        </div>
    </div>
  );
}
