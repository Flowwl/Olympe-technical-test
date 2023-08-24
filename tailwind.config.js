/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                library: "8px 0px 22px 0px rgba(0,0,0,0.35)"
            },
            screens: {
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
            },
        },
    },
    plugins: [],
}

