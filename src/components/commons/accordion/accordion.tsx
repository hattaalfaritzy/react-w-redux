import clsx from 'clsx';
import { Disclosure } from '@headlessui/react';
import Icon from '../icon';


export default function Accordion({ defaultOpen, classNameWrapper, className, classNameTitle, classNameContent, title, withIcon, children }: Props) {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
                <div className={clsx('flex flex-col w-full', classNameWrapper)}>
                    <Disclosure.Button className={clsx('flex flex-row justify-start items-center w-full', className)}>
                        <div className={clsx('flex flex-row justify-start items-center w-full', withIcon && 'space-x-4')}>
                            {withIcon && withIcon}
                            <span className={clsx(classNameTitle || 'text-xs lg:text-base')}>{title}</span>
                        </div>
                        <Icon name='chevron-down' width={16} className={`fill-white cursor-pointer ${open ? 'transform rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className={clsx(classNameContent || 'pt-4')}>{children}</Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}

type Props = {
    classNameWrapper?: string;
    className?: string;
    classNameTitle?: string;
    classNameContent?: string;
    title: string;
    withIcon?: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
};
