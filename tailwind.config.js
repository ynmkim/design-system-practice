/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        LINESeedSansKR: ['LINESeedSansKR'],
        LINESeedSansEN: ['LINESeedSansEN'],
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '21px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        m: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        l: [
          '18px',
          {
            lineHeight: '26px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        xl: [
          '20px',
          {
            lineHeight: '28px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        ['title-xs']: [
          '12px',
          {
            lineHeight: '20px',
            letterSpacing: '0',
            fontWeight: '500',
          },
        ],
        ['title-sm']: [
          '14px',
          {
            lineHeight: '21px',
            letterSpacing: '0',
            fontWeight: '600',
          },
        ],
        ['title-m']: [
          '17px',
          {
            lineHeight: '28px',
            letterSpacing: '0.3px',
            fontWeight: '700',
          },
        ],
        ['title-l']: [
          '20px',
          {
            lineHeight: '28px',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
        ['title-xl']: [
          '32px',
          {
            lineHeight: '38px',
            letterSpacing: '-1px',
            fontWeight: '700',
          },
        ],
        ['title-xxl']: [
          '48px',
          {
            lineHeight: '54px',
            letterSpacing: '0',
            fontWeight: '900',
          },
        ],
      },
      colors: {
        green: '#06C755',
        white: '#FFFFFF',
        'gray-100': '#FCFCFC',
        'gray-150': '#F5F5F5',
        'gray-200': '#EFEFEF',
        'gray-250': '#E8E8E8',
        'gray-300': '#DFDFDF',
        'gray-350': '#C8C8C8',
        'gray-400': '#B7B7B7',
        'gray-500': '#949494',
        'gray-600': '#777777',
        'gray-650': '#616161',
        'gray-700': '#555555',
        'gray-750': '#3F3F3F',
        'gray-770': '#383838',
        'gray-800': '#303030',
        'gray-850': '#1F1F1F',
        'gray-870': '#1A1A1A',
        'gray-900': '#111111',
        black: '#000000',
        'blue-400': '#96B2FF',
        'blue-500': '#638DFF',
        'blue-600': '#4D73FF',
        'blue-700': '#2F59CC',
        'navy-400': '#C8CFDC',
        'navy-500': '#98A0B3',
        'navy-600': '#707991',
        'navy-700': '#464F69',
        'navy-800': '#323B54',
        'navy-850': '#262F4A',
        'navy-900': '#202A43',
        red: '#FF334B',
      },
      borderRadius: {
        'radius-100': '3px',
        'radius-200': '5px',
        'radius-300': '7px',
        'radius-400': '12px',
        'radius-circle': '50%',
      },
    },
  },
  plugins: [],
};
