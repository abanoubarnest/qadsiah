module.exports = {
  mode: 'jit',
  content: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  variants: {
    opacity: ['hover'],
  },
  theme: {
    maxWidth: {},
    fontFamily: {
      body: ['GalanoGrotesque'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },

    extend: {
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        primary: {
          25: '#eff1f4',
          50: '#e5e7ed',
          100: '#bec3d3',
          200: '#939cb6',
          300: '#687499',
          400: '#475683',
          500: '#27386d',
          600: '#233265',
          700: '#1d2b5a',
          800: '#172450',
          900: '#0e173e',
        },

        neutral: {
          25: '#FAFAFC',
          50: '#FCFCFD',
          75: '#E5E6ED',
          100: '#F7F8F9',
          200: '#E7EAEE',
          300: '#CFD4DC',
          400: '#98A3B3',
          500: '#61718A',
          600: '#536075',
          700: '#3F4A5A',
          800: '#313945',
          900: '#1E222A',
        },

        warning: {
          100: '#FFFBEF',
          200: '#FFF5CC',
          300: '#FDECCE',
          400: '#F9C56C',
          500: '#F59E0B',
          600: '#C47E08',
          700: '#935F06',
        },

        success: {
          100: '#E3FCEF',
          200: '#ABF5D1',
          300: '#D8F3E3',
          400: '#9DE0B8',
          500: '#5CCB88',
          600: '#3BC171',
          700: '#27814B',
        },

        info: {
          100: '#EAE6FF',
          200: '#C0B6F2',
          300: '#998DD9',
          400: '#8777D9',
          500: '#6554C0',
          600: '#5243AA',
          700: '#403294',
        },
        error: {
          100: '#FFEBE6',
          200: '#FFBDAD',
          300: '#FCDAD7',
          400: '#F7A19B',
          500: '#F26359',
          600: '#C8392F',
          700: '#78221C',
        },
        social:{
          facebook:'#0165E1'
        },
      },
      container: {},
      boxShadow: {
        inner: '0px 0.5px 4px rgba(96, 97, 112, 0.32)',
        sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        base: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        md: '0px 2px 4px -2px rgba(0, 10, 80, 0.06), 0px 4px 8px -2px rgba(0, 10, 80, 0.10)',
        lg: '0px 4px 6px -2px rgba(0, 10, 80, 0.03), 0px 12px 16px -4px rgba(0, 10, 80, 0.08)',
        xl: '0px 8px 8px -4px rgba(0, 10, 80, 0.03), 0px 20px 24px -4px rgba(0, 10, 80, 0.08)',
        '2xl': '0px 32px 64px -12px rgba(0, 10, 80, 0.14)',
      },
    },
  },
};
