import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/commons';

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full space-y-4'>
            <span className='text-9xl text-black font-medium'>404</span>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <span className='text-sm text-black/70 font-medium'>Error 404 - Page not found</span>
                <span className='text-xs text-black/70 font-medium'>
                    You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.
                </span>
            </div>
            <Button label='Go to home' onClick={() => navigate('/')} />
        </div>
    );
}
