import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Message } from '../components/commons';

export const globalToasterError = (error) => {
	toast.custom((t) => (
		<div className={clsx('flex')}>
			<Message label={error} className={clsx('transition duration-300 ease-in-out cursor-pointer', t.visible ? 'opacity-100' : 'opacity-0')} onClick={() => toast.dismiss(t.id)} />
		</div>
	));
};
