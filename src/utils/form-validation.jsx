import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const listsSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.number().required('Phone is required'),
    email: Yup.string().email('Format email harus valid!').required('Email is required'),
});

export const formLogin = { resolver: yupResolver(loginSchema) };
export const formLists = { resolver: yupResolver(listsSchema) };
