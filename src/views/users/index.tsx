import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Card, HeadingLink, ImageWithFallback, ListForm } from '@/components/commons';
import { shallowEqual, useSelector } from 'react-redux';
import { usersSelector } from '@/stores/selectors';
import { useTypedDispatch } from '@/hooks/use-redux';
import { getAllUsers } from '@/stores/actions/users';
import ModalDetailUser from '@/components/sections/users/modal-detail-user';
import useModal from '@/hooks/use-modal';

export default function Products() {
    const modalDetail = useModal();
    const dispatch = useTypedDispatch();
    const [detail, setDetail] = useState<boolean>(false);
    const [detailId, setDetailId] = useState<string>('');
    const { data } = useSelector(usersSelector, shallowEqual);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink title='Data Users' />
            <div className={clsx(data.length > 0 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 w-full' : 'flex flex-col justify-center items-center w-full')}>
                {data.length > 0 ? (
                    data?.map((item: any, index: string | number) => (
                        <Card key={index} className='p-6 group hover:bg-opacity-40 on-hover' onClick={() => {
                            setDetail(true)
                            setDetailId(item._id)
                            modalDetail.openModal();
                        }}>
                            <ListForm
                                title={item.name}
                                value={item.email}
                                classNameTitle='text-white group-hover:text-black on-hover'
                                classNameValue='text-primary group-hover:text-primary-700 on-hover'
                            />
                        </Card>
                    ))
                ) : (
                    <div className='flex flex-col justify-center items-center w-full space-y-3 py-8'>
                        <ImageWithFallback alt='no-data' src='/no-data.svg' className='w-1/4' />
                        <span className='text-sm text-white text-opacity-30 font-medium'>Error 404 - Data not found</span>
                    </div>
                )}
            </div>
            {detail && <ModalDetailUser modal={modalDetail} idDetail={detailId} onCancel={() => {
                setDetail(false);
                setDetailId('');
                modalDetail.closeModal();
            }} />}
        </div>
    );
}
