'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} is now in your shopping cart.`,
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Button size="lg" onClick={handleAddToCart} disabled={isAdding}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
}
