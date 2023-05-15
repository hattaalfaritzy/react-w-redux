import { Button, ListForm, Modal } from '@/components/commons';
import { useTypedDispatch } from '@/hooks/use-redux';
import { getDetailUser } from '@/stores/actions/users';
import { usersSelector } from '@/stores/selectors';
import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function ModalDetailUser({ modal, idDetail, onCancel }: Props) {
    const dispatch = useTypedDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const { detail } = useSelector(usersSelector, shallowEqual);

    const id: string = idDetail;   

    useEffect(() => {
        getDataDetail(id);
    }, []);

    const getDataDetail = async (id: string) => {
        setLoading(true);
        await dispatch(getDetailUser(id));
        setLoading(false)
    }

    return (
        <Modal {...modal.props} className="flex flex-col justify-center items-center space-y-6" classNameContainer="max-w-md">
            <span className="text-2xl text-white text-center font-bold tracking-wide">Detail User</span>
            <div className='flex flex-col w-full space-y-3'>
                <ListForm title='Name' value={detail?.name} loading={loading} />
                <ListForm title='Email' value={detail?.email} loading={loading} />
                <ListForm title='Phone' value={detail?.phone} loading={loading} />
            </div>
            <div className="flex flex-row justify-between items-center w-full space-x-4">
                <Button
                    onClick={onCancel}
                    label="Back"
                    className="w-full rounded"
                    variant="error"
                />
            </div>
        </Modal>
    )
}

type Props = {
    modal?: any;
    idDetail: string;
    onCancel?: () => void;
};