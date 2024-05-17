import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'Resources/images/logo.jpg'],
            refresh: true,
        }),
    ],
    build: { assetsInlineLimit: 0 }
});