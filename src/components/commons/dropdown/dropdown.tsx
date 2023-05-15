import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../icon';

export default function Dropdown({
    wrapperClassName,
    className,
    replaceClassName,
    classNameLabel,
    labelChange = false,
    label,
    data,
    children,
    onChange,
    activeIndex = '',
}: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(activeIndex);
    
    if (!data) return null;

    return (
        <div className={clsx('group inline-block relative', wrapperClassName)}>
            <button
                type='button'
                onClick={() => setOpen(!open)}
                className={clsx(
                    replaceClassName ||
                        'flex flex-row justify-between items-center space-x-2 py-3 px-4 bg-white/30 border border-black/70 w-full rounded-full',
                    className
                )}>
                {children ? (
                    children
                ) : (
                    <>
                        {labelChange ? (
                            <span className={clsx('text-base text-white leading-none', classNameLabel)}>{label}</span>
                        ) : (
                            <span className={clsx('text-base text-white leading-none', classNameLabel)}>
                                {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : label}
                            </span>
                        )}
                    </>
                )}
                <Icon name='caret-down' width={8} className={clsx('fill-white', open && 'rotate-180', classNameLabel)} />
            </button>
            <div className={clsx('absolute w-full pt-1 z-fixed', open === true ? 'block' : 'hidden')}>
                <ul className='flex flex-col justify-start items-start p-1 bg-[#F9FAFF] border border-[#D9DDE2] rounded'>
                    {data.map((item: Data, index: string | number) => (
                        <li
                            key={index}
                            className={clsx(
                                'group w-full p-2 rounded cursor-pointer on-hover',
                                selected === item?.label ? 'text-primary bg-primary/10' : 'text-[#3C434E]'
                            )}
                            onClick={() => {
                                setSelected(item?.label !== undefined ? item?.label : '');
                                setOpen(false);
                                onChange(item);
                            }}>
                            <span className={clsx('text-base font-medium w-full')}>{item.label}</span>
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
    labelChange?: boolean;
    label?: string;
    data?: Data[];
    onChange?: any;
    children?: React.ReactNode;
    activeIndex?: string;
};

type Data = {
    label?: string;
    onClick?: () => void;
};
