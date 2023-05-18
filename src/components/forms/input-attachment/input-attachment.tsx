import clsx from 'clsx';
import { useState } from 'react';
import { Icon, ImageWithFallback, Message } from '@/components/commons';
import useUpload from '@/hooks/use-upload';

export default function InputAttachment({ className, replaceClassNameLabel, label, register, errMessage, important, onDrop, onUpload, ...props }: Props) {
    const { imagePreview } = useUpload();
    const [dragOver, setDragOver] = useState<boolean>(false);

    const clickInputFiles = (): void => {
		(document.querySelector('#input-attachment') as HTMLInputElement).click();
	}

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        setDragOver(false);
    };

    async function handleDrop(e: React.DragEvent<HTMLDivElement>): Promise<void> {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;

        if (files) {
            for (let i = 0; i < files.length; i++) {
                // const dataToPush: Awaited<Promise<AttachmentType>> = await handleFileRead(files[i]);
            }
        }
    }

    async function handleFilesUpload(e: MouseEvent): Promise<void> {
		const input = e.target as HTMLInputElement;
		const files = input.files;

        if (files) {
            for (let i = 0; i < files.length; i++) {
                // const dataToPush: Awaited<Promise<AttachmentType>> = await handleFileRead(files[i]);
            }
        }
	}


    return (
        <div className={clsx('flex flex-col w-full', className)}>
            {label && (
                <div className={clsx(replaceClassNameLabel || 'form-label pb-1.5')}>
                    {label} {important && <span className='text-error'>*</span>}
                </div>
            )}
            {imagePreview !== null ? (
                <ImageWithFallback alt={imagePreview} src={imagePreview} />
            ) : (
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={onDrop || handleDrop}
                    onClick={clickInputFiles}
                    className={clsx(
                        'container-attachment',
                        dragOver && 'bg-white/30'
                    )}>
                    <input
                        id='input-attachment'
                        {...register}
                        {...props}
                        accept='image/*'
                        type='file'
                        onChange={onUpload || handleFilesUpload}
                        className='hidden'
                    />
                    <Icon name='file' width={20} className='fill-white' />
                    <p className='text-sm leading-none text-white font-semibold pt-4'>
                        Drag & drop <span className='text-primary'>images</span>
                    </p>
                </div>
            )}
            {errMessage && <Message className='mt-2' label={errMessage} />}
        </div>
    );
}

type Props = JSX.IntrinsicElements['input'] & {
    className?: string;
    replaceClassNameLabel?: string;
    label?: string;
    register?: any;
    multiple?: boolean;
    errMessage?: any;
    important?: boolean;
    onDrop?: any;
    onUpload?: any;
};
