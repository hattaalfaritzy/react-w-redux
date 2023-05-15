import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import config from '@/api/_config';
import { createLogger } from 'redux-logger';

const middleware: any = [];

if (config.VITE_BASE_ENVIRONTMENT === 'development') {
    middleware.push(createLogger());
}

middleware.push(thunk);
middleware.push(promise);

export default middleware;
