const { theme } = require('@hawaii-bus-plus/tailwind-theme');

function headerStyles(theme) {
  const style = {
    fontWeight: "500",
    fontFamily: theme("fontFamily.display").join(", "),
  }

  return {
    h1: style,
    h2: style,
    h3: style,
    h4: style,
  }
}

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  // mode: 'jit',
  purge: {
    enabled:
      process.env.HUGO_ENVIRONMENT === "production" ||
      process.env.NODE_ENV === "production",
    content: ["./layouts/**/*.html", "./content/**/*.md"],
  },
  darkMode: "media",
  theme: {
    ...theme,
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: headerStyles(theme),
        },
        lg: {
          css: headerStyles(theme),
        },
        xl: {
          css: headerStyles(theme),
        },
        light: {
          css: [
            {
              color: 'inherit',
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

module.exports = config;
