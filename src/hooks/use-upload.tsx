import imageCompression, { Options } from 'browser-image-compression';
import { useState } from 'react';

export default function useUpload() {
    const [image, setImage] = useState<any>(null);
    const [imagePreview, setImagePreview] = useState<any>(null);

    const handleImage = async (e: any) => {
        
        const reader = new FileReader();
        const file = e.target.files[0],
            pattern = /image-*/;

        if (!file.type.match(pattern)) {
            return;
        }

        const options: Options = {
            maxSizeMB: 0.3,
            maxWidthOrHeight: 3000,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(file, options);
        
            reader.onloadend = () => {
                setImage(compressedFile);
                setImagePreview(reader.result);
                console.log(image, 'cek image');
            };

            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.log(error);
        }
    };

    const readFileAsync = (file: File): Promise<AttachmentType> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.readAsDataURL(file);
            console.log(file, 'cek file');            
            reader.onload = (e: ProgressEvent<FileReader>) => {
                setImagePreview(reader.result);
                resolve({
                    title: file.name,
                    description: file.name,
                    base64: e.target?.result as string,
                    type: file.type.includes('officedocument.wordprocessingml')
                        ? 'docx'
                        : file.type.includes('jpg') || file.type.includes('jpeg')
                        ? 'jpg'
                        : file.type.split('/')[1],
                });
            };
    
            reader.onerror = reject;
        });
    }

    const handleFileRead = async (file: File): Promise<AttachmentType> => {
        try {
            const readedData: Awaited<Promise<AttachmentType>> = await readFileAsync(file);
            return readedData;
        } catch (err: any) {
            throw new Error(err);
        }
    }

    return {
        image,
        imagePreview,
        handleImage,
        handleFileRead,
    };
}

type AttachmentType = {
	title: string;
	description: string;
	base64: string | ArrayBuffer;
	type?: string;
};
