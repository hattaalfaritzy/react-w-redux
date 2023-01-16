import { useForm, Controller } from 'react-hook-form';
import { Logo, Button, Card } from '../../commons';
import { InputText, InputPassword, InputNumber, InputSelect } from '../../forms';
import { formPlayground } from '../../../utils/form-validation';

export default function Forms() {
    const { register, formState, handleSubmit, setError, control } = useForm(formPlayground);

    const onSubmit = async (value) => {
        console.log(value, 'value login');
    };

    const dropdown = ['Relevansi', 'Populer', 'Pilihan'];

    return (
        <Card className='flex flex-col space-y-6'>
            <span className='text-3xl text-white'>List Components Forms</span>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 w-full'>
                <div className='container-components-playground'>
                    <span className='text-xl text-white'>Components Input Text</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputText register={register('text')} placeholder='Input your text' errors={formState.errors} label='Input Text' />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='text-xl text-white'>Components Input Password</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputPassword register={register('password')} placeholder='Input your password' errors={formState.errors} label='Input Password' />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='text-xl text-white'>Components Input Number</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputNumber register={register('number')} placeholder='Input your number' errors={formState.errors} label='Input Number' />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='text-xl text-white'>Components Input Select</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputSelect
                            register={register('select')}
                            placeholder='Input your select'
                            errors={formState.errors}
                            label='Input Select'
                            data={dropdown}
                        />
                    </div>
                </div>
                <Button label='Login' type='submit' className='w-full' />
            </form>
        </Card>
    );
}
