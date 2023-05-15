import { icons } from '@/components/commons/icon';

export default function ListIcons() {
    const iconsNames = Object.keys(icons);
    return (
        <div className='flex flex-col space-y-6'>
            <span className='text-lg lg:text-3xl text-white'>List Components Icons</span>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 h-fit-content'>
                {Object.values(icons).map((Icon: any, index) => (
                    <div key={index} className='flex flex-col justify-center items-center py-8 bg-white/70 rounded-lg space-y-2'>
                        <Icon className='fill-neutral-700' width={20} />
                        <div className='text-sm truncate'>{iconsNames[index]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
