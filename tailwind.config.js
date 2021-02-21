const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled:
      process.env.HUGO_ENVIRONMENT === "production" ||
      process.env.NODE_ENV === "production",
    content: ["./layouts/**/*.html", "./content/**/*.md"],
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      display: ["Red Rose", "serif"],
    },
    extend: {
      backgroundSize: {
        96: "24rem",
      },
      inset: {
        "1/4-screen": "25vh",
        "3/4-screen": "75vh",
      },
      minHeight: {
        "1/4-screen": "25vh",
      },
      colors: {
        route: "var(--route-color)",
        gray: {
          ...colors.trueGray,
          750: "#333",
        },
        blue: {
          50: "hsl(212, 20%, 90%)",
          100: "hsl(212, 10%, 72%)",
          200: "hsl(212, 10%, 64%)",
          300: "hsl(212, 10%, 53%)",
          400: "hsl(212, 10%, 42%)",
          500: "hsl(212, 10%, 32%)",
          600: "hsl(212, 10%, 28%)",
          700: "hsl(212, 10%, 22%)",
          800: "hsl(212, 10%, 18%)",
          900: "hsl(212, 10%, 10%)",
        },
        red: {
          DEFAULT: "#C67168",
        },
        yellow: {
          DEFAULT: "#E2C049",
        },
        brown: {
          DEFAULT: "#918381",
        },
        cyan: {
          DEFAULT: "#8BB9BD",
        },
        ocean: {
          light: "#778a91",
          DEFAULT: "#335468",
          dark: "#2d4859",
        },
      },
      fill: (theme) => ({
        "blue-500": theme("colors.blue.500"),
        "blue-600": theme("colors.blue.600"),
      }),
      textColor: {
        route: "var(--route-text-color)",
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
