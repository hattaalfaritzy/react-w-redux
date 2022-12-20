import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAll, deleteData } from '../../../stores/actions/lists';
import { listsSelector } from '../../../stores/selectors';
import { Card, HeadingLink, ImageWithFallback } from '../../commons';
import { BiTrashAlt, BiDetail, BiMessageSquareEdit } from 'react-icons/bi';

export default function DataLists({}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { data } = useSelector(listsSelector, shallowEqual);

	const [dataLists, setDataLists] = useState(data);

	useEffect(() => {
        dispatch(getAll());
	}, []);

	const deleteItem = async (id) => {
        await dispatch(deleteData(id));
    };

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
			<div className={clsx(dataLists ? 'grid grid-cols-2 gap-6 w-full' : 'flex flex-col justify-center items-center w-full')}>
				{dataLists ? (
					dataLists?.map((item, index) => (
						<Card key={index}>
							<div className='flex flex-row justify-between items-ends w-full space-y-3'>
								<div className='flex flex-col justify-start items-start w-full space-y-1'>
									<span className='text-white text-sm font-semibold'>{item.name}</span>
									<span className='text-white text-xs'>{item.phone}</span>
									<span className='text-white text-xs'>{item.email}</span>
								</div>
								<div className='flex flex-row justify-end items-end space-x-4 w-full'>
									<button
										type='submit'
										onClick={() => navigate(`/app/lists/${item._id}`)}
										className='group btn-rounded-icons bg-transparent hover:bg-success on-hover border border-success'
									>
										<BiDetail className='text-success group-hover:text-white on-hover' />
									</button>
									<button
										type='submit'
										onClick={() => navigate(`/app/lists/edit/${item._id}`)}
										className='group btn-rounded-icons bg-transparent hover:bg-primary on-hover border border-primary'
									>
										<BiMessageSquareEdit className='text-primary group-hover:text-white on-hover' />
									</button>
									<button
										type='submit'
										className='group btn-rounded-icons bg-transparent hover:bg-danger on-hover border border-danger'
										onClick={() => deleteItem(item._id)}
									>
										<BiTrashAlt className='text-danger group-hover:text-white on-hover' />
									</button>
								</div>
							</div>
						</Card>
					))
				) : (
					<div className='flex flex-col justify-center items-center w-full space-y-3 py-8'>
						<ImageWithFallback src='/no-data.svg' className='w-1/4' />
						<span className='text-sm text-white text-opacity-30 font-medium'>
							Error 404 - Data not found
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
