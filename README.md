# react-w-redux

Simple Auth n Crud With React & Redux

## Deploy

https://react-w-redux.vercel.app/

## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Go to the project directory.
4. Configure environment variables
5. Run `yarn start`.

## Setup .env file

Create `.env` file on code editor similar to `.env.example` or copy the code below : (see [official docs](https://vitejs.dev/guide/env-and-mode.html))
```
VITE_PUBLIC_API_URL = 
VITE_PRIVATE_API_URL = 
VITE_BASE_API_TIMEOUT = 
VITE_BASE_ENVIRONTMENT = 
VITE_BASE_CLOUDINARY_URL = 
PORT = 
```

## Scripts

- `yarn dev` - Run the application
- `yarn build` - Build the application
- `yarn lint` - Run [ESLint](https://eslint.org/)
- `yarn lint:fix` - Fix codes from ESLint errors
- `yarn format` - Format codes using Prettier

## File Structure

```raw
.
├── 📂 public/                  Public files (e.g. favicon).
├── 📂 src/
│   ├── 📂 api/                 API-related functions.
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/          Common components.
│   │   ├── ⚛️ forms/            Common components which is used specifically for user input.
│   │   ├── ⚛️ layouts/          Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer).
│   │   └── ⚛️ sections/         Components which create a block/section of a page.
│   ├── 📂 constant/
│   ├── ⚛️ hooks/                Custom hooks.
│   ├── 📂 router/               The configuration router for the application.
│   ├── 📂 store/                Redux's stores.
│   ├── 📂 styles/
│   │   ├── 📂 components/       SCSS files for components (e.g. button, table, n input form).
│   │   ├── 📂 layouts/          SCSS files for specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer).
│   │   ├── _base.scss           Base styles.
│   │   ├── _utilities.scss      Contains utility classes.
│   │   └── index.scss           Contains @import statements to merge all SCSS files.
│   ├── 📂 utils/                Utility functions.
│   └── ⚛️ views/                 React Vite page components.
├── .env.example                 Specify which environment variables are server-only and which should be exposed to the browser.
├── .eslintignore
├── .eslintrc.cjs                ESLint configuration.
├── .gitignore
├── .prettierrc                  Prettier configuration.
├── index.html                   Entry point and the main HTML file for the application.
├── package.json
├── postcss.config.js
├── README.md                    Information about the application.
├── tailwind.config.js           The configuration TailwindCss for the application.
├── tsconfig.json                The configuration Typescript for the application.
├── tsconfig.node.json           The configuration Typescript compiler for Node.js server code.
├── vercel.json                  Vercel configuration.
└── vite.config.json             The configuration Vite build tool for the application.

Notes:
📂: Folder
⚛️: React-related folder
```

## Tools

- **axios** : **^1.4.0** [https://axios-http.com/docs](https://axios-http.com/docs)
- **@headlessui/react** : **^1.7.14** [https://headlessui.com/](https://headlessui.com/)
- **@hookform/resolvers** : **^3.1.0** [https://github.com/react-hook-form/resolvers](https://github.com/react-hook-form/resolvers)
- **@types/redux-logger** : **^3.0.9** [https://yarnpkg.com/package/@types/redux-logger](https://yarnpkg.com/package/@types/redux-logger)
- **browser-image-compression** : **^2.0.2** [https://github.com/Donaldcwl/browser-image-compression](https://github.com/Donaldcwl/browser-image-compression)
- **clsx** : **^1.2.1** [https://github.com/lukeed/clsx](https://github.com/lukeed/clsx)
- **react** : **^18.2.0** [https://react.dev/](https://react.dev/)
- **react-dom** : **^18.2.0** [https://www.npmjs.com/package/react-dom](https://www.npmjs.com/package/react-dom)
- **react-hook-form** : **^7.43.9** [https://react-hook-form.com/](https://react-hook-form.com/)
- **react-hot-toast** : **^2.4.1** [https://react-hot-toast.com/](https://react-hot-toast.com/)
- **react-icons** : **^4.8.0** [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- **react-loader-spinner** : **^5.3.4** [https://www.npmjs.com/package/react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- **react-paginate** : **^8.2.0** [https://github.com/AdeleD/react-paginate](https://github.com/AdeleD/react-paginate)
- **react-redux** : **^8.0.5** [https://react-redux.js.org/](https://react-redux.js.org/)
- **react-router-dom** : **^6.10.0** [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- **redux** : **^4.2.1** [https://redux.js.org/](https://redux.js.org/)
- **redux-logger** : **^3.0.6** [https://www.npmjs.com/package/redux-logger](https://www.npmjs.com/package/redux-logger)
- **redux-persist** : **^6.0.0** [https://github.com/rt2zz/redux-persist](https://github.com/rt2zz/redux-persist)
- **redux-promise-middleware** : **^6.1.3** [https://github.com/pburtchaell/redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
- **redux-thunk** : **^2.4.2** [https://github.com/reduxjs/redux-thunk](https://github.com/reduxjs/redux-thunk)
- **yup** : **^1.1.1** [https://github.com/jquense/yup](https://github.com/jquense/yup)

- **postcss** : **^8.4.23** [https://postcss.org/](https://postcss.org/)
- **sass** : **^1.62.1** [https://sass-lang.com/](https://sass-lang.com/)
- **tailwindcss** : **^3.3.2** [https://tailwindcss.com/](https://tailwindcss.com/)
- **typescript** : **^5.0.2** [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **vite** : **^4.3.2** [https://vitejs.dev/](https://vitejs.dev/)