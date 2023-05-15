import { Card } from '@/components/commons';
import { useTypedDispatch } from '@/hooks/use-redux';
import { getAllProducts } from '@/stores/actions/products';
import { getAllUsers } from '@/stores/actions/users';
import { productsSelector, usersSelector } from '@/stores/selectors';
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export const Dashboard = (): JSX.Element => {
    const dispatch = useTypedDispatch();
    const { data: products } = useSelector(productsSelector, shallowEqual);
    const { data: users } = useSelector(usersSelector, shallowEqual);

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllUsers());
	}, []);

    const list = [
        {
            title: 'Total Products',
            qty: products?.length,
        },
        {
            title: 'Total Users',
            qty: users?.length,
        },
    ];
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
            {list.map((item, index) => (
                <Card key={index} className='flex w-full p-6'>
                    <div className='flex flex-col justify-center items-center w-full space-y-1.5 lg:space-y-3'>
                        <span className='text-lg lg:text-xl text-white'>{item.title}</span>
                        <span className='text-2xl lg:text-4xl text-white'>{item.qty ? item.qty : '0'}</span>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Dashboard;
