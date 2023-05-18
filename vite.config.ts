import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000,
    },
    build: {
        target: 'chrome87',
        reportCompressedSize: false,
        minify: true,
        chunkSizeWarningLimit: 550,
        cssCodeSplit: true,
        write: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
