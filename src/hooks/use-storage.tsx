export default function useStorage() {
    type StorageItem = {
        value: string;
        expiry?: number | undefined;
    }

    const setLocalStorageItem = (key: string, value: string, expiryInSeconds: number) => {
        const expiry = Date.now() + expiryInSeconds * 1000;
        const item: StorageItem = { value, expiry };
        localStorage.setItem(key, JSON.stringify(item));
    };

    const getLocalStorageItem = (key: string) => {
        const item = localStorage.getItem(key);
        if (item) {
            const storageItem: StorageItem = JSON.parse(item);
            if (storageItem.expiry && storageItem.expiry > Date.now()) {
                return storageItem.value;
            } else {
                localStorage.removeItem(key);
            }
        }
        return null;
    };

    const removeLocalStorageItem = (key: string) => {
        localStorage.removeItem(key);
    };

    return {
        setLocalStorageItem,
        getLocalStorageItem,
        removeLocalStorageItem,
    };
}
