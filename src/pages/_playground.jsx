import Commons from '../components/sections/_playground/commons';
import Forms from '../components/sections/_playground/forms';

export default function Playground() {
    return (
        <div className='flex flex-col justify-center max-w-screen-2xl mx-auto w-full space-y-12'>
            <Forms />
            <Commons />
        </div>
    );
}
