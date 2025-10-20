module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                title: '#212121',
                text: '#464646',
                border: '#dadada',
                red: '#e62727',
                blue: '#0046ff',
                bg: '#f5f5f0',
            },
        },
    },
    plugins: [require('daisyui')],
};
