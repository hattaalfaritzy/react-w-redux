import { AvatarCircle, Button, Modal } from '@/components/commons';
import { InputText, InputTextarea } from '@/components/forms';
import { useTypedDispatch } from '@/hooks/use-redux';
import { editDataProduct, getAllProducts, getDetailProduct } from '@/stores/actions/products';
import { productsSelector } from '@/stores/selectors';
import { formEditProduct } from '@/utils/form-validation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { shallowEqual, useSelector } from 'react-redux';
import _config from '@/api/_config';

export default function ModalEditProduct({ modal, idDetail = '', onCancel, closeModal }: Props) {
    const dispatch = useTypedDispatch();
    const { detail } = useSelector(productsSelector, shallowEqual);
    const id: string = idDetail;

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm(formEditProduct);

    const [value, setValue] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        dispatch(getDetailProduct(id)).then((res) => {
            if (res) setValue(res);
        });
    }, []);

    const handleChange = (name: string) => (e: any) => {
        setValue({
            ...value,
            [name]: e.target.value,
        });
    };

    const onSubmit = async (value: any) => {
        try {
            await dispatch(editDataProduct(id, value));
            dispatch(getAllProducts());
            closeModal();
        } catch (err) {
            console.log(err, 'err');
        }
    };

    return (
        <Modal {...modal.props} className='flex flex-col justify-center items-center space-y-6'>
            <span className='text-2xl text-white text-center font-bold tracking-wide'>Edit Product</span>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 w-full'>
                <AvatarCircle src={`${_config.VITE_BASE_CLOUDINARY_URL}/${detail.image}.jpeg`} className='flex justify-center items-center w-full' />
                <InputText
                    register={register('name')}
                    onChange={handleChange('name')}
                    errMessage={errors.name?.message}
                    value={value?.name}
                    placeholder='Input text'
                    label='Input Text'
                />
                <InputTextarea
                    register={register('description')}
                    onChange={handleChange('description')}
                    errMessage={errors.description?.message}
                    value={value?.description}
                    placeholder='Description'
                    label='Description'
                />
                <div className='flex flex-row justify-between items-center w-full space-x-4'>
                    <Button onClick={onCancel} label='Cancel' className='w-full rounded' variant='error' />
                    <Button type='submit' label='Submit' className='w-full rounded' />
                </div>
            </form>
        </Modal>
    );
}

type Props = {
    modal?: any;
    idDetail: string;
    onCancel?: () => void;
    closeModal: any;
};
