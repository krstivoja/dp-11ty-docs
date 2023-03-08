module.exports = {
  content: ['./dist/**/*.{html,js,md}'],
  theme: {
    extend: {
      fontSize: {
        clamp: 'clamp(18px,2vw,24px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    /********************************** custom utilities **********************************/
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      addUtilities({
        // container
        '.container-narrow': {
          '@apply mx-auto w-[90%] max-w-[1200px]': {},
        },
      })
    }),
  ],
}
