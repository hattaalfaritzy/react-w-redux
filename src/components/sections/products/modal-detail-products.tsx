import _config from '@/api/_config';
import { AvatarCircle, Button, ListForm, Modal } from '@/components/commons';
import { useTypedDispatch } from '@/hooks/use-redux';
import { getDetailProduct } from '@/stores/actions/products';
import { productsSelector } from '@/stores/selectors';
import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function ModalDetailProduct({ modal, idDetail = '', onCancel, onEdit, onDelete }: Props) {
    const dispatch = useTypedDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const { detail } = useSelector(productsSelector, shallowEqual);

    const id: string = idDetail;

    useEffect(() => {
        getDataDetail(id);
    }, []);

    const getDataDetail = async (id: string) => {
        setLoading(true);
        await dispatch(getDetailProduct(id));
        setLoading(false)
    }

    return (
        <Modal title='detail product' {...modal.props} onRequestClose={onCancel} className="flex flex-col justify-center items-center space-y-6">
            <div className='flex flex-col w-full space-y-3'>
                <AvatarCircle src={`${_config.VITE_BASE_CLOUDINARY_URL}/${detail.image}.jpeg`} className='flex justify-center items-center w-full' loading={loading} />
                <ListForm title='Name' value={detail?.name} loading={loading} />
                <ListForm title='Description' value={detail?.description} loading={loading} />
            </div>
            <div className="flex flex-row justify-between items-center w-full space-x-4">
                <Button
                    onClick={onDelete}
                    label="Delete"
                    className="w-full rounded"
                    variant="error"
                />
                <Button
                    onClick={onEdit}
                    label="Edit"
                    className="w-full rounded"
                />
            </div>
        </Modal>
    )
}

type Props = {
    modal?: any;
    idDetail: string;
    onCancel?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};