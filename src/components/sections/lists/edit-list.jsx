import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { formLists } from '../../../utils/form-validation';
import { useDispatch } from 'react-redux';
import { editData, getDetail } from '../../../stores/actions/lists';
import { Card, Button, HeadingLink } from '../../commons';
import { InputText, InputNumber } from '../../forms';

export default function EditList() {
	const { register, formState, handleSubmit, setError } = useForm(formLists);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { id } = useParams();

	const [value, setValue] = useState({
		name: '',
		phone: '',
		email: '',
	});

	useEffect(() => {
		dispatch(getDetail(id)).then((res) => {
            if (res) setValue(res);
		});
	}, []);

	const handleChange = (name) => (e) => {
		setValue({
			...value,
			[name]: e.target.value,
		});
	};

	const onSubmit = async (value) => {
		try {
			await dispatch(editData(id, value));
			navigate('/app/lists');
		} catch (err) {
			console.log(err, 'err');
		}
	};

	return (
		<div className='flex flex-col w-full space-y-6'>
			<HeadingLink title='Edit List' withBack={true} />
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-end items-end space-y-4'>
				<Card className='flex flex-col w-full space-y-4'>
					<InputText
						register={register('name')}
						placeholder='Input your name'
						value={value?.name}
						onChange={handleChange('name')}
						errors={formState.errors}
						label='Name'
					/>
					<InputNumber
						register={register('phone')}
						placeholder='Input your phone'
						value={value?.phone}
						onChange={handleChange('phone')}
						errors={formState.errors}
						label='Phone'
					/>
					<InputText
						register={register('email')}
						placeholder='Input your email'
						value={value?.email}
						onChange={handleChange('email')}
						errors={formState.errors}
						label='Email'
					/>
				</Card>
				<Button label='Edit List' type='submit' />
			</form>
		</div>
	);
}
