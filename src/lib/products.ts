import type { Product } from '@/lib/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    price: 45.0,
    description: 'Minimalist and elegant.',
    longDescription: 'A beautifully crafted ceramic vase, perfect for adding a touch of minimalist elegance to any room. Its neutral color and smooth finish complement any decor style.',
    imageId: 'product-1',
  },
  {
    id: '2',
    name: 'Wooden Coasters',
    price: 25.0,
    description: 'Set of four, natural acacia wood.',
    longDescription: 'Protect your surfaces in style with this set of four natural acacia wood coasters. Each coaster has a unique grain pattern, bringing a piece of nature into your home.',
    imageId: 'product-2',
  },
  {
    id: '3',
    name: 'Scented Candle',
    price: 35.0,
    description: 'Lavender and sage, soy wax.',
    longDescription: 'Unwind with the calming aroma of lavender and sage. This hand-poured soy wax candle provides hours of soothing fragrance, housed in a reusable glass jar.',
    imageId: 'product-3',
  },
  {
    id: '4',
    name: 'Woven Throw Blanket',
    price: 89.0,
    description: 'Soft cotton, modern design.',
    longDescription: 'Cozy up with this soft, 100% cotton throw blanket. Featuring a modern woven design, it adds texture and warmth to your living room or bedroom.',
    imageId: 'product-4',
  },
  {
    id: '5',
    name: 'Leather Journal',
    price: 55.0,
    description: 'Genuine leather, A5 size.',
    longDescription: 'Capture your thoughts and ideas in this timeless genuine leather journal. With an A5 size, it is perfect for carrying with you on your travels or daily commute.',
    imageId: 'product-5',
  },
  {
    id: '6',
    name: 'Steel Water Bottle',
    price: 32.0,
    description: 'Insulated, 20oz, matte black.',
    longDescription: 'Stay hydrated on the go with this sleek, insulated stainless steel water bottle. It keeps your drinks cold for 24 hours or hot for 12, all in a stylish matte black finish.',
    imageId: 'product-6',
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return products.find((p) => p.id === id);
}
