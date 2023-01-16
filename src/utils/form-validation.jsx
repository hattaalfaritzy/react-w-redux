import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const registerSchema = Yup.object().shape({
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    'retype-password': Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Re-type Password is required'),
});

const listsSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
});

const playgroundSchema = Yup.object().shape({
    text: Yup.string().required('Text is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    number: Yup.string().required('Number is required'),
    select: Yup.string().required('Select is required'),
});

export const formLogin = { resolver: yupResolver(loginSchema) };
export const formRegister = { resolver: yupResolver(registerSchema) };
export const formLists = { resolver: yupResolver(listsSchema) };
export const formPlayground = { resolver: yupResolver(playgroundSchema) };
