import config from './_config';

export const apiPublic = () => `${config.VITE_PUBLIC_API_URL}`;
export const apiPrivate = () => `${config.VITE_PRIVATE_API_URL}`;
