import React from 'react';
import { useForm } from 'react-hook-form';
import { Logo, Button } from '../../components/commons';
import { InputText, InputPassword } from '../../components/forms';
import { formRegister } from '../../utils/form-validation';

export default function RegisterPage() {
    const { register, formState, handleSubmit, setError } = useForm(formRegister);

    const onSubmit = async (value) => {
        console.log(value, 'value register');
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-6 px-4 lg:px-0 bg-dark'>
            <div className='flex flex-col justify-start items-start'>
                <span className='text-sm text-white'>Register</span>
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
                <InputPassword
                    register={register('retype-password')}
                    placeholder='Re-tyoe your password'
                    errors={formState.errors}
                    label='Re-type Password'
                    variant='animation'
                />
                <Button label='Register' type='submit' className='w-full' />
            </form>
        </div>
    );
}
