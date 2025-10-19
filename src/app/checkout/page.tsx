'use client';

import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';

const shippingSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z.string().min(5, 'Valid ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
});

export default function CheckoutPage() {
  const { cartItems, subtotal, cartCount, clearCart } = useCart();
  const router = useRouter();

  const form = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      country: 'USA',
    },
  });

  if (cartCount === 0) {
    return (
      <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-headline text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-muted-foreground">Add some products to your cart to proceed to checkout.</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const onSubmit = (values: z.infer<typeof shippingSchema>) => {
    console.log('Form submitted:', values);
    clearCart();
    router.push('/checkout/success');
  };

  const shippingFee = 5.00;
  const total = subtotal + shippingFee;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid sm:grid-cols-3 gap-4">
                    <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                            <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input placeholder="USA" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                 </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="sticky top-24">
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {cartItems.map(item => {
                        const image = placeholderImages.find(p => p.id === item.imageId);
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                <div className="relative h-12 w-12 rounded-md overflow-hidden">
                                     {image && <Image src={image.imageUrl} alt={item.name} data-ai-hint={image.imageHint} fill className="object-cover" />}
                                </div>
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                </div>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        )
                    })}
                    <Separator />
                     <div className="flex justify-between">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                     <div className="flex justify-between">
                        <p className="text-muted-foreground">Shipping</p>
                        <p>${shippingFee.toFixed(2)}</p>
                    </div>
                     <Separator />
                     <div className="flex justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" form="checkout-form" size="lg" className="w-full">
                        Place Order
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
