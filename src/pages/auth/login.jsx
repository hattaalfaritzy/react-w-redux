import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Logo, Button } from '../../components/commons';
import { InputText, InputPassword } from '../../components/forms';
import { formLogin } from '../../utils/form-validation';
import { login } from '../../stores/actions/auth';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { register, formState, handleSubmit, setError } = useForm(formLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (value) => {
        setLoading(true);
        await dispatch(login(value)).then(res => {
            if (res) navigate(0);
        });
        setLoading(false);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-4 px-4 lg:px-0 bg-dark'>
            <div className='flex flex-col justify-start items-start'>
                <span className='text-sm text-white'>Login</span>
                <Logo withHref={false} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-1/4 space-y-4'>
                <InputText register={register('email')} placeholder='Input your email' errors={formState.errors} label='Email' variant='animation' />
                <InputPassword
                    register={register('password')}
                    placeholder='Input your password'
                    errors={formState.errors}
                    label='Password'
                    variant='animation'
                />
                <Button label='Login' type='submit' className='w-full' loading={loading} />
            </form>
        </div>
    );
}
