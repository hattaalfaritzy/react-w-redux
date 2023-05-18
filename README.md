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

- **bcryptjs** : **^2.4.3** [https://github.com/dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- **body-parser** : **^1.20.1** [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)
- **cloudinary** : **^1.32.0** [https://yarnpkg.com/package/cloudinary](https://yarnpkg.com/package/cloudinary)
- **cors** : **^2.8.5** [https://yarnpkg.com/package/cors](https://yarnpkg.com/package/cors)
- **dotenv** : **^16.0.3** [https://yarnpkg.com/package/dotenv](https://yarnpkg.com/package/dotenv)
- **express** : **^4.18.2** [https://expressjs.com/](https://expressjs.com/)
- **firebase-admin** : **^11.3.0** [https://yarnpkg.com/package/firebase-admin](https://yarnpkg.com/package/firebase-admin)
- **jsonwebtoken** : **^8.5.1** [https://yarnpkg.com/package/jsonwebtoken](https://yarnpkg.com/package/jsonwebtoken)
- **mongoose** : **^6.8.0** [https://mongoosejs.com/](https://mongoosejs.com/)
- **multer** : **^1.4.5-lts.1** [https://yarnpkg.com/package/multer](https://yarnpkg.com/package/multer)
- **multer-storage-cloudinary** : **^4.0.0** [https://www.npmjs.com/package/multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
- **nodemon** : **^2.0.20** [https://yarnpkg.com/package/nodemon](https://yarnpkg.com/package/nodemon)
