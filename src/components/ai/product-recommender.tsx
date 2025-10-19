'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { getProductRecommendations, type ProductRecommendationsInput } from '@/ai/flows/product-recommendations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '../ui/skeleton';

export function AIProductRecommender() {
  const [formData, setFormData] = useState<ProductRecommendationsInput>({
    browsingHistory: 'Ceramic vases, scented candles, home decor',
    pastPurchases: 'Wooden coasters, throw blanket',
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await getProductRecommendations(formData);
      setRecommendations(result.recommendations);
    } catch (err) {
      setError('Sorry, we couldn\'t fetch recommendations at this time.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-full">
                <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">AI Product Recommender</CardTitle>
        </div>
        <CardDescription>
          Tell us what you've been looking at and what you've bought, and our AI will suggest your next favorite item.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="browsingHistory">Your Browsing History</Label>
            <Textarea
              id="browsingHistory"
              name="browsingHistory"
              placeholder="e.g., modern lamps, minimalist art prints, indoor plants"
              value={formData.browsingHistory}
              onChange={handleChange}
              rows={2}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pastPurchases">Your Past Purchases</Label>
            <Textarea
              id="pastPurchases"
              name="pastPurchases"
              placeholder="e.g., scented candle, wool rug"
              value={formData.pastPurchases}
              onChange={handleChange}
              rows={2}
            />
          </div>
          {recommendations.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Here are your recommendations:</h4>
              <ul className="list-disc list-inside bg-accent/50 p-4 rounded-md text-accent-foreground">
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
          {loading && (
            <div className="space-y-2">
              <Skeleton className="h-5 w-1/3" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? 'Thinking...' : 'Get Recommendations'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
