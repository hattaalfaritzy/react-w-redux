import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { formLists } from '../../../utils/form-validation';
import { useDispatch } from 'react-redux';
import { Card, Button, HeadingLink } from '../../commons';
import { addData, getAll } from '../../../stores/actions/lists';
import { InputText, InputNumber } from '../../forms';

export default function AddList() {
    const { register, formState, handleSubmit, setError } = useForm(formLists);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (value) => {
        console.log(value, 'value login');
        try {
            await dispatch(addData(value)).then(res => {
                if (res) {
                    dispatch(getAll());
                    navigate('/app/lists');
                };
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink title='Add List' withBack={true} />
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-end items-end space-y-4'>
                <Card className='flex flex-col w-full space-y-4'>
                    <InputText register={register('name')} placeholder='Input your name' errors={formState.errors} label='Name' />
                    <InputNumber register={register('phone')} placeholder='Input your phone' errors={formState.errors} label='Phone' />
                    <InputText register={register('email')} placeholder='Input your email' errors={formState.errors} label='Email' />
                </Card>
                <Button label='Add List' type='submit' />
            </form>
        </div>
    );
}
