import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
    plugins: [react()],
    resolve: {
        dedupe: ["react", "react-dom"],
        alias: {
            '@modules': path.resolve(__dirname, 'node_modules'),
        },
    },
    optimizeDeps: {
        include: ['circuit-sketcher-core'],
    },
    build: {
        commonjsOptions: {
            include: [/circuit-sketcher-core/, /node_modules/],
        },
    },
    base: '/circuit-sketcher-app/',
});
