import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Icon from '../icon';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function ViewAttachment({ className, src, fileName }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div className={clsx('', className)}>
            <div className='flex flex-row justify-start items-center space-x-4'>
                <button type='button' onClick={openModal} className='flex flex-row justify-center items-center bg-[#F4F4F4] rounded-full py-2 px-6 space-x-2'>
                    <Icon name='clip' width={14} />
                    <span className='text-sm text-[#687488] truncate'>{fileName}</span>
                </button>
                <a href={src} download>
                    <Icon name='download' width={16} className='fill-[#687488]' />
                </a>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className={clsx('relative z-modal')} onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black/70' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex flex-col justify-start items-center min-h-full px-16 py-8 space-y-8'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className='flex flex-row justify-between items-center w-full'>
                                    <button type='button' onClick={closeModal} className='flex flex-row justify-center items-center bg-[#3C434E] w-12 h-12'>
                                        <Icon name='close' width={17} className='fill-white' />
                                    </button>
                                    <div className='flex flex-row justify-center items-center bg-[#3C434E] space-x-2 p-2'>
                                        <Icon name='file' width={17} className='fill-white' />
                                        <span className='text-base text-white'>{fileName}</span>
                                    </div>
                                    <a href={src} download className='flex flex-row justify-center items-center bg-[#3C434E] w-12 h-12'>
                                        <Icon name='download' width={17} className='fill-white' />
                                    </a>
                                </Dialog.Panel>
                            </Transition.Child>
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
                                        'flex justify-center items-center bg-white p-6 rounded-xl w-full h-full min-w-[495px] max-w-6xl transform transition-all overflow-hidden shadow-xl'
                                    )}>
                                    <ImageWithFallback alt={fileName || ''} src={src || ''} />
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
    src?: string;
    fileName?: string;
};
