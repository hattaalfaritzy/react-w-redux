import Forms from '../components/sections/_playground/forms';
import Commons from '../components/sections/_playground/commons';
import ListIcons from '../components/sections/_playground/list-icons';

export default function Playground() {
    return (
        <div className='flex flex-col justify-center max-w-screen-2xl mx-auto w-full space-y-12 py-6'>
            <Forms />
            <Commons />
            <ListIcons />
        </div>
    );
}
