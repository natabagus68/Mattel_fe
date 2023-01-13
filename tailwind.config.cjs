/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    '50': '#EBECEC',
                    '100': '#C0C3C5',
                    '200': '#A2A5A9',
                    '300': '#989FAD',
                    '500': '#B1B5BA',
                    'foundation-500': '#343C44',
                    'foundation-300': '#777C82',
                    '700': '#5C5E61',
                    'dropdown': '#989FAD'
                },
                green: {
                    '50': '#E7F2EF',
                    '200': '#8FC3B5',
                    '300': '#5CA894',
                    '400': '#41C588',
                    '500': '#0B7D5F',
                    'foundation-500': '#12B76A',
                    '600': '#0A7256',
                },
                red: {
                    '50': '#FCEAEA',
                    '200': '#F8A9A3',
                    '300': '#F5827A',
                    '500': '#DE1B1B',
                    'foundation-500' : '#F04438',
                },
                black: {
                    'base': '#1A1A27',
                    '500': "#343C44"
                },
                white: {
                    'base': '#C4C4C4',
                    'lightest': '#ffffff',
                },
                sky: {
                    'base': '#CDCFD0',
                    'light': '#E3E5E6',
                    'lightest': '#F7F9FA',
                    'dark': '#979C9E',
                },
                teal: {
                    '50': '#E8F5F3'
                },
                blue: {
                    '300': "#72B3F8"
                },
                orange: {
                    '300': '#FAB55A'
                },
                ink: {
                    'base': "#404446",
                    'darker': "#202325",
                    'lighter': "#72777A"
                },
                graphite: {
                    "500": "#617E8C",
                    "800": "#35454D"
                },
                success : '#74B816',
                warning: '#F59F00',
                info: '#229BD8',
                danger: '#DE1B1B',
                error:{
                    'light': "#FCEAEA",
                    'primary': "#DD5353"
                },
                neutral: {
                    '100': "#CACBCD",
                    'B100': "#858383",
                    'B200': "#514E4E",
                    '200': "#B3B5B7",
                    '400': "#737476",
                    '500': "#646566"
                }
            },
            fontSize: {
                '4xl': '34px',
            },
            fontWeight: {
                'semibold': '500',
                '600': '600',
            },
            fontFamily: {
                // 'display': 'Marcellus',
                'body': 'Poppins',
                'inter' : 'Inter'
            },
        },
    },
    plugins: [],
};
