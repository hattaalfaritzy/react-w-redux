import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineCaretDown } from 'react-icons/ai';

export default function Dropdown({ replaceClassName, className, label, data, children, onChange }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div className='group inline-block relative'>
            <button
                onClick={() => setOpen(!open)}
                className={clsx(replaceClassName || 'flex flex-row justify-between items-center space-x-2 p-3 bg-white/30 w-full rounded', className)}>
                {children ? (
                    children
                ) : (
                    <span className='text-xxs md:text-xs text-white leading-none font-semibold'>
                        {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : label}
                    </span>
                )}
                <AiOutlineCaretDown className='text-white' />
            </button>
            <div className={clsx('absolute w-full pt-1', open === true ? 'block' : 'hidden')}>
                <ul className='flex flex-col justify-start items-start p-1 bg-white rounded'>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(
                                'group w-full p-2 rounded cursor-pointer on-hover',
                                selected === item?.label ? 'text-primary bg-primary/30' : 'text-black'
                            )}
                            onClick={() => {
                                setSelected(item?.label);
                                setOpen(false);
                                onChange(item);
                            }}>
                            <span className={clsx('text-xxs md:text-xs font-medium w-full')}>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    replaceClassName: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    data: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.node,
};
