import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email format must be valid!').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const registerSchema = Yup.object().shape({
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    'retype-password': Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Re-type Password is required'),
});

const playgroundSchema = Yup.object().shape({
    image: Yup.mixed().required('Image is required'),
    text: Yup.string().required('Text is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    textarea: Yup.string().required('Textarea is required'),
    acceptTerms: Yup.bool().oneOf([true, false], 'Accept Ts & Cs is required'),
});

const addProductSchema = Yup.object().shape({
    image: Yup.mixed().required('Image is required'),
    name: Yup.string().required('Name is required!'),
    description: Yup.string().required('Description is required!'),
});

const editProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    description: Yup.string().required('Description is required!'),
});

export const formLogin = { resolver: yupResolver(loginSchema) };
export const formRegister = { resolver: yupResolver(registerSchema) };
export const formPlayground = { resolver: yupResolver(playgroundSchema) };
export const formAddProduct = { resolver: yupResolver(addProductSchema) };
export const formEditProduct = { resolver: yupResolver(editProductSchema) };
