import { AddProduct, Products } from '@/views';

const products = [
    { path: 'products', element: <Products /> },
    { path: 'products/:id', element: <AddProduct /> },
];

export default products;
