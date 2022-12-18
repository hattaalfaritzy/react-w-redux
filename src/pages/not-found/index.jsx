import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/commons';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full space-y-2'>
            <span className='text-9xl text-white font-medium'>404</span>
            <span className='text-sm text-white text-opacity-30 font-medium'>Error 404 - Page not found</span>
            <span className='text-xs text-white text-opacity-30 font-medium'>
                You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.
            </span>
            <Button label='Go to home' onClick={() => navigate('/')} />
        </div>
    );
}
