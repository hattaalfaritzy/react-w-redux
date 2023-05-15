import clsx from 'clsx';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '../icon';

export default function Modal({ className, classNameWrapper, classNameContainer, isOpen, onRequestClose, title, children }: Props) {
    return (
        <div className={clsx('', className)}>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as='div'
                    // className={clsx(
                    //     "fixed inset-0 z-modal overflow-y-auto",
                    //     classNameWrapper
                    // )}
                    className={clsx('relative z-modal', classNameWrapper)}
                    onClose={onRequestClose || (() => {})}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black/50' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex justify-center items-center min-h-full p-0 lg:p-16'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel
                                    className={clsx(
                                        'flex flex-col bg-dark-300 p-6 rounded-2xl w-full max-w-3xl transform transition-all overflow-hidden shadow-xl',
                                        title && 'space-y-3',
                                        classNameContainer
                                    )}>
                                    {title && (
                                        <Dialog.Panel className='flex flex-row justify-between items-center w-full border-b border-[#D9DDE2] pb-3'>
                                            <span className="text-2xl text-white text-center font-bold tracking-wide">Detail Product</span>
                                            <Icon name='close' className='fill-white cursor-pointer' onClick={onRequestClose || (() => {})} />
                                        </Dialog.Panel>
                                    )}
                                    <div className={clsx('flex w-full', className)}>{children}</div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

type Props = {
    className?: string;
    classNameWrapper?: string;
    classNameContainer?: string;
    isOpen?: boolean;
    onRequestClose?: any;
    title?: string;
    children: React.ReactNode;
};
