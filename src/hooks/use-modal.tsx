import { useState } from 'react';

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const props = {
        isOpen,
        onRequestClose: closeModal,
    };

    return {
        openModal,
        closeModal,
        props,
    };
}
