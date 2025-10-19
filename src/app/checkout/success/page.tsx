import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
    const image = placeholderImages.find(p => p.id === 'checkout-success');
    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
            <Card className="max-w-md w-full text-center">
                <CardHeader className="items-center">
                    <div className="p-3 bg-green-100 rounded-full">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Order Successful!</CardTitle>
                    <CardDescription>Thank you for your purchase.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        Your order has been placed and is being processed. You will receive an email confirmation shortly.
                    </p>
                    <div className="relative w-full h-48 rounded-md overflow-hidden">
                        {image && <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} fill className="object-cover" />}
                    </div>
                     <Button asChild size="lg" className="w-full">
                        <Link href="/products">Continue Shopping</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
