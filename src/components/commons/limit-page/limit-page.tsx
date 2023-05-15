import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../icon';

export default function LimitPage({ wrapperClassName, className, replaceClassName, classNameLabel, label, data, onChange, activeIndex = '' }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(activeIndex);
    
    if (!data) return null;

    return (
        <div className={clsx('group inline-block relative max-w-fit', wrapperClassName)}>
            <div className='flex flex-row justify-start items-center space-x-6'>
                <span className='text-white text-sm'>Show per page</span>
                <button onClick={() => setOpen(!open)} className={clsx(replaceClassName || 'flex flex-row justify-between items-center space-x-2', className)}>
                    <span className={clsx('text-base text-white leading-none', classNameLabel)}>
                        {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : label}
                    </span>
                    <Icon name='caret-down' width={8} className={clsx('fill-white', open && 'rotate-180', classNameLabel)} />
                </button>
            </div>
            <div className={clsx('absolute right-0 w-full pt-1 z-fixed max-w-fit', open === true ? 'block' : 'hidden')}>
                <ul className='flex flex-col justify-start items-start p-0.5 bg-[#F9FAFF] border border-[#D9DDE2] rounded'>
                    {data.map((item: Data, index: string | number) => (
                        <li
                            key={index}
                            className={clsx(
                                'group w-full px-2 py-1 rounded cursor-pointer on-hover',
                                selected === item?.label ? 'text-primary bg-primary/10' : 'text-[#3C434E]'
                            )}
                            onClick={() => {
                                setSelected(item?.label !== undefined ? item?.label : '');
                                setOpen(false);
                                onChange(item);
                            }}>
                            <span className={clsx('text-sm font-medium w-full')}>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

type Props = {
    wrapperClassName?: string;
    className?: string;
    replaceClassName?: string;
    classNameLabel?: string;
    label?: string;
    data?: Data[];
    onChange?: any;
    activeIndex?: string;
};

type Data = {
    label?: string;
    onClick?: () => void;
};
