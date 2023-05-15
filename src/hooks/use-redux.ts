import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { TypedDispatch, ReduxState } from '@/stores'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;