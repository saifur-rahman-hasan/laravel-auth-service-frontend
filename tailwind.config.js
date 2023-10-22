const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/**/*.js',
        './src/**/*.ts',
        './src/**/*.tsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
}
