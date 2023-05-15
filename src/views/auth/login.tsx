import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Logo } from '../../components/commons';
import { InputPassword, InputText } from '../../components/forms';
import { formLogin } from '../../utils/form-validation';
import { useTypedDispatch } from '@/hooks/use-redux';
import { useState } from 'react';
import { login } from '@/stores/actions/auth';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();

    const [loading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm(formLogin);

    const onSubmit = async (value: any) => {
        setLoading(true);
        try {
            await dispatch(login(value)).then((res) => {
                if (res) navigate(0);
            });
        } catch (err: any) {
            if (err.message.toLowerCase().includes('email')) {
                setError('email', { message: err.message });
            } else if (err.message.toLowerCase().includes('password')) {
                setError('password', { message: err.message });
            }
        }
        setLoading(false);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-4 px-4 lg:px-0 bg-dark'>
            <div className='flex flex-col justify-start items-start'>
                <span className='text-sm text-white'>Login</span>
                <Logo withHref={false} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-2/6 space-y-4'>
                <InputText type='email' register={register('email')} errMessage={errors.email?.message} placeholder='Email' label='Email' />
                <InputPassword register={register('password')} errMessage={errors.password?.message} placeholder='Password' label='Password' />
                <Button label='Login' type='submit' className='w-full' loading={loading} classNameLabel='font-bold tracking-wide' />
            </form>
        </div>
    );
}
