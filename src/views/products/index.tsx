import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Avatar, Card, HeadingLink, ImageWithFallback } from '@/components/commons';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsSelector } from '@/stores/selectors';
import { deleteDataProduct, getAllProducts, removeDetailProduct } from '@/stores/actions/products';
import { useTypedDispatch } from '@/hooks/use-redux';
import ModalDetailProduct from '@/components/sections/products/modal-detail-products';
import ModalEditProduct from '@/components/sections/products/modal-edit-products';
import useModal from '@/hooks/use-modal';
import _config from '@/api/_config';

export default function Products() {
    const modalDetail = useModal();
    const modalEdit = useModal();
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();
    const [detail, setDetail] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [detailId, setDetailId] = useState<string>('');

    const { data } = useSelector(productsSelector, shallowEqual);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const deleteItem = async (id: string) => {
        await dispatch(deleteDataProduct(id));
        dispatch(removeDetailProduct());
        dispatch(getAllProducts());
        setDetail(false);
        setDetailId('');
        modalDetail.closeModal();
    };

    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink
                title='Data Products'
                renderActions={
                    <span className='text-sm text-white hover:text-primary on-hover cursor-pointer' onClick={() => navigate('/app/products/add')}>
                        Add Product
                    </span>
                }
            />
            <div className={clsx(data.length > 0 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 w-full' : 'flex flex-col justify-center items-center w-full')}>
                {data.length > 0 ? (
                    data?.map((item: any, index: string | number) => (
                        <Card
                            key={index}
                            className='p-6 group hover:bg-opacity-40 on-hover'
                            onClick={() => {
                                setDetail(true);
                                setDetailId(item._id);
                                modalDetail.openModal();
                            }}>
                            <Avatar src={`${_config.VITE_BASE_CLOUDINARY_URL}/${item.image}.png`} title={item.name} label={item.description} />
                        </Card>
                    ))
                ) : (
                    <div className='flex flex-col justify-center items-center w-full space-y-3 py-8'>
                        <ImageWithFallback alt='no-data' src='/no-data.svg' className='w-1/4' />
                        <span className='text-sm text-white text-opacity-30 font-medium'>Error 404 - Data not found</span>
                    </div>
                )}
            </div>
            {detail && (
                <ModalDetailProduct
                    modal={modalDetail}
                    idDetail={detailId}
                    onDelete={() => deleteItem(detailId)}
                    onCancel={() => {
                        dispatch(removeDetailProduct());
                        setDetail(false);
                        setDetailId('');
                        modalDetail.closeModal();
                    }}
                    onEdit={() => {
                        setEdit(true);
                        setDetail(false);
                        modalEdit.openModal();
                        modalDetail.closeModal();
                    }}
                />
            )}
            {edit && (
                <ModalEditProduct
                    modal={modalEdit}
                    closeModal={() => {
                        modalEdit.closeModal();
                        modalDetail.openModal();
                        setEdit(false);
                        setDetail(true);
                    }}
                    idDetail={detailId}
                    onCancel={() => {
                        setEdit(false);
                        setDetail(true);
                        modalEdit.closeModal();
                        modalDetail.openModal();
                    }}
                />
            )}
        </div>
    );
}
