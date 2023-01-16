import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function Accordion({ defaultOpen, className, classNameTitle, classNameContent, title, withIcon, children }) {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
                <div className='mb-4'>
                    <Disclosure.Button className={clsx('flex flex-row justify-start items-center w-full', className)}>
                        <div className={clsx('flex flex-row justify-start items-center w-full', withIcon && 'space-x-4')}>
                            {withIcon && withIcon}
                            <span className={clsx(classNameTitle || 'text-base')}>{title}</span>
                        </div>
                        <HiOutlineChevronDown className={`text-primary-terteriary cursor-pointer ${open ? 'transform rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className={clsx(classNameContent || 'pt-4')}>{children}</Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

Accordion.propTypes = {
    defaultOpen: PropTypes.bool,
    className: PropTypes.string,
    classNameTitle: PropTypes.string,
    classNameContent: PropTypes.string,
    title: PropTypes.string,
    withIcon: PropTypes.node,
    children: PropTypes.node,
};
