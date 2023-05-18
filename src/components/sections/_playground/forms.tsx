import { useForm } from 'react-hook-form';
import { Button, Card } from '../../commons';
import { InputText, InputPassword, InputTextarea, InputCheckbox, InputAttachment } from '../../forms';
import { formPlayground } from '../../../utils/form-validation';
import { useState } from 'react';

export default function Forms() {
    const [maxLength] = useState(200);
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value: inputValue } = event.target;
        if (inputValue.length <= maxLength) {
            setValue(inputValue);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formPlayground);

    const onSubmit = async (value: any) => {
        console.log(value, 'value login');
    };

    return (
        <Card className='flex flex-col space-y-6'>
            <span className='text-lg lg:text-3xl text-white'>List Components Forms</span>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 w-full'>
                <div className='container-components-playground'>
                    <span className='title-playground'>Components Input Text</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputText register={register('text')} errMessage={errors.text?.message} placeholder='Input text' label='Input Text' rounded />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='title-playground'>Components Input Password</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputPassword
                            register={register('password')}
                            errMessage={errors.password?.message}
                            placeholder='Input password'
                            label='Input Password'
                        />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='title-playground'>Components Inputarea</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputTextarea
                            register={register('textarea')}
                            value={value}
                            onChange={handleChange}
                            errMessage={errors.textarea?.message}
                            label='Input Textarea'
                        />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='title-playground'>Components Checkbox</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputCheckbox
                            label='Keep me signed in'
                            defaultChecked={false}
                            register={register('acceptTerms')}
                            // variant='reverse'
                        />
                    </div>
                </div>
                <div className='container-components-playground'>
                    <span className='title-playground'>Components Input Attachment</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputAttachment register={register('image')} errMessage={errors.image?.message} label='Input Attachment' />
                    </div>
                </div>
                {/* <div className='container-components-playground'>
                    <span className='title-playground'>Components Input Number</span>
                    <div className='flex flex-col w-full space-y-4'>
                        <InputNumber register={register('number')} placeholder='Input your number' errors={formState.errors} label='Input Number' />
                    </div>
                </div> */}
                <Button label='Login' type='submit' className='w-full' />
            </form>
        </Card>
    );
}
