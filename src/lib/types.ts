export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  imageId: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  items: CartItem[];
};
