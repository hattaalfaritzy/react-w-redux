import { useNavigate } from 'react-router-dom';
import { Card, HeadingLink } from '../../commons';
import { BiTrashAlt, BiDetail, BiMessageSquareEdit } from 'react-icons/bi';

export default function ListData({}) {
	const navigate = useNavigate();

	const data = [
		{
			name: 'hatta',
			phone: 82123123123,
			email: 'hatta@gmail.com'
		},
		{
			name: 'hatta',
			phone: 82123123123,
			email: 'hatta@gmail.com'
		},
		{
			name: 'hatta',
			phone: 82123123123,
			email: 'hatta@gmail.com'
		},
		{
			name: 'hatta',
			phone: 82123123123,
			email: 'hatta@gmail.com'
		},
	];

	return (
		<div className='flex flex-col w-full space-y-6'>
			<HeadingLink
				title='Data Lists'
				renderActions={
					<span
						className='text-sm text-white hover:text-primary on-hover cursor-pointer'
						onClick={() => navigate('/app/lists/add')}
					>
						Add List
					</span>
				}
			/>
			<div className='grid grid-cols-2 gap-6'>
				{data.map((item, index) => (
					<Card>
						<div className='flex flex-row justify-between items-ends w-full space-y-3'>
							<div className='flex flex-col justify-start items-start w-full space-y-1'>
								<span className='text-white text-sm font-semibold'>{item.name}</span>
								<span className='text-white text-xs'>{item.phone}</span>
								<span className='text-white text-xs'>{item.email}</span>
							</div>
							<div className='flex flex-row justify-end items-end space-x-4 w-full'>
								<button
									type='submit'
									onClick={() => navigate(`/backoffice/lists/${item._id}`)}
									className='group btn-rounded-icons bg-transparent hover:bg-success on-hover border border-success'
								>
									<BiDetail className='text-success group-hover:text-white on-hover' />
								</button>
								<button
									type='submit'
									onClick={() => navigate(`/backoffice/lists/edit/${item._id}`)}
									className='group btn-rounded-icons bg-transparent hover:bg-primary on-hover border border-primary'
								>
									<BiMessageSquareEdit className='text-primary group-hover:text-white on-hover' />
								</button>
								<button
									type='submit'
									className='group btn-rounded-icons bg-transparent hover:bg-danger on-hover border border-danger'
								>
									<BiTrashAlt className='text-danger group-hover:text-white on-hover' />
								</button>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
