import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    base : "/er-telecom/",

    plugins: [vue(), eslintPlugin()],

    server: {
        watch: {
            usePolling: true,
        }
    },

    // Aliases
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src'
            }
        ]
    }
})
