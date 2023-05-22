/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        'slow-spin': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #FFFFFF 5px, #FFFFFF 100px)',
        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px)',
        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #FFFFFF 5px, #FFFFFF 80px)',
        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 80px)',
        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #FFFFFF 5px, #FFFFFF 60px)',
        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 60px)',
        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #FFFFFF 5px, #FFFFFF 40px)',
        circularDartSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 4px, #1b1b1b 40px)',
      },
    },
  },
  plugins: [],
}
