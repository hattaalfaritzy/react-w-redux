import { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import InputText from '../input-text/input-text';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function InputSelect({ className, data, value = '', ...props }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(`${value}`);
    }, [value])

    const initialValue = (val) => {
        if(val === '') {
            setSelected('');
        } else {
            setSelected(val);
        }
    }

    return (
        <div className='group inline-block relative w-full'>
            <div onClick={() => setOpen(!open)} className={clsx('z-20 flex justify-start items-start w-full', className)}>
                <InputText
                    type='text'
                    value={selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected}
                    iconRight={<HiOutlineChevronDown className={clsx('text-white', open && 'rotate-180')} />}
                    {...props}
                />
            </div>
            <div className={clsx('z-10 absolute w-full pt-1', open === true ? 'block' : 'hidden')}>
                <ul className='flex flex-col justify-start items-start h-auto max-h-40 overflow-y-auto p-1 bg-white rounded'>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(
                                'group w-full p-2 rounded cursor-pointer on-hover',
                                selected === item ? 'text-primary bg-primary/30' : 'text-black'
                            )}
                            onClick={() => setSelected(item)}>
                            <span className={clsx('text-xxs md:text-xs font-medium w-full')}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

InputSelect.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    value: PropTypes.string,
};
