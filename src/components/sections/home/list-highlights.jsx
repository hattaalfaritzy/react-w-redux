import { Card, HeadingLink } from '../../commons';

export default function ListHighlights({}) {

	const data = [
		{
			title: 'List Data',
			qty: 10,
		},
		{
			title: 'List Data w/ Upload',
			qty: 10,
		}
	]

	return (
        <div className='flex flex-col w-full space-y-6'>
			<HeadingLink title='Dashboard'/>
			<div className='grid grid-cols-3 gap-6'>
				{data.map((item, index) => (
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