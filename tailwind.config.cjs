/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,html,js}"],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: {
                'fondo': "url('/src/assets/fondo.jpg')",
            },
        },
    },
    plugins: [],
}
