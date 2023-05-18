import { Button, Card, HeadingLink } from '@/components/commons';
import { InputAttachment, InputText, InputTextarea } from '@/components/forms';
import { useTypedDispatch } from '@/hooks/use-redux';
import { addDataProduct, getAllProducts } from '@/stores/actions/products';
import { formAddProduct } from '@/utils/form-validation';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm(formAddProduct);

    const navigate = useNavigate();
    const dispatch = useTypedDispatch();

    const onSubmit = async (value: any) => {
        console.log(value, 'cek value');
        try {
            await dispatch(addDataProduct(value)).then((res) => {
                if (res) {
                    dispatch(getAllProducts());
                    navigate('/app/products');
                }
            });
        } catch (err) {
            console.log(err, 'err');
        }
    };
    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink title='Add Product' withBack />
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-end items-end space-y-4'>
                <Card className='flex flex-col w-full space-y-6 p-6'>
                    <InputAttachment register={register('image')} errMessage={errors.image?.message} label='Image' />
                    <InputText register={register('name')} placeholder='Input your name' errMessage={errors.name?.message} label='Name' />
                    <InputTextarea
                        register={register('description')}
                        placeholder='Input your description'
                        errMessage={errors.description?.message}
                        label='Description'
                    />
                </Card>
                <Button
                    label='Add Product'
                    type='submit'
                />
            </form>
        </div>
    );
}

type AttachmentType = {
	title: string;
	description: string;
	base64: string | ArrayBuffer;
	type?: string;
};