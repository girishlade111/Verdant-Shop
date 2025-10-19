import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Order } from '@/lib/types';
import { ShoppingBag } from 'lucide-react';

const mockOrders: Order[] = [
    { id: 'ORD001', date: '2024-05-20', total: 70.00, status: 'Delivered', items: [] },
    { id: 'ORD002', date: '2024-06-15', total: 89.00, status: 'Shipped', items: [] },
    { id: 'ORD003', date: '2024-07-01', total: 32.00, status: 'Pending', items: [] },
];

export default function OrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Orders</CardTitle>
                <CardDescription>View your past and current orders.</CardDescription>
            </CardHeader>
            <CardContent>
                {mockOrders.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockOrders.map(order => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>{order.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <div className="text-center py-12">
                         <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-xl font-semibold">No Orders Yet</h3>
                        <p className="mt-2 text-muted-foreground">You haven't placed any orders with us yet. Let's change that!</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
