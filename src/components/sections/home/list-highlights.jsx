import { Card, HeadingLink } from '../../commons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAll, deleteData } from '../../../stores/actions/lists';
import { listsSelector } from '../../../stores/selectors';

export default function ListHighlights({}) {

	const { data } = useSelector(listsSelector, shallowEqual);

	const list = [
		{
			title: 'List Data',
			qty: data.length,
		},
	]

	return (
        <div className='flex flex-col w-full space-y-6'>
			<HeadingLink title='Dashboard'/>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{list.map((item, index) => (
					<Card key={index}>
						<div className='flex flex-col justify-center items-center w-full space-y-3'>
							<span className='text-xl text-white'>{item.title}</span>
							<span className='text-4xl text-white'>{item.qty}</span>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}