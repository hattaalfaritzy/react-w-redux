import React from 'react';
import { useForm } from 'react-hook-form';
import { Logo, Button } from '../../components/commons';
import { InputText, InputPassword } from '../../components/forms';
import { formLogin } from '../../utils/form-validation';

export default function LoginPage() {
    const { register, formState, handleSubmit, setError } = useForm(formLogin);

    const onSubmit = async (value) => {
        console.log(value, 'value login');
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
                <Button label='Login' type='submit' className='w-full' />
            </form>
        </div>
    );
}
