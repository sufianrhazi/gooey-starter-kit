import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'es2019',
    },
    esbuild: {
        target: 'es2019',
    },
});
