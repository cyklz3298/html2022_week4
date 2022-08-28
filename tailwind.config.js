module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  plugins: [
    require("tailwind-flagger"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.9375rem",
        md: "2.25rem",
        lg: "0rem",
      },
    },
    screens: {
      md: "768px",
      lg: "1296px",
    },
    fontFamily: {
      sans: [
        "Roboto",
        "'Noto Sans TC'",
        ...require("tailwindcss/defaultTheme").fontFamily.sans,
      ],
    },
    fontSize: {
      xs: ["0.75rem", "1.5"],
      sm: ["0.875rem", "1.5"],
      base: ["1rem", "1.5"],
      lg: ["1.125rem", "1.5"],
      xl: ["1.25rem", "1.5"],
      "2xl": ["1.5rem", "1.5"],
      "3xl": ["1.875rem", "1.5"],
      "4xl": ["2.25rem", "1.5"],
      "5xl": ["3rem", "1.5"],
      "6xl": ["3.75rem", "1.5"],
      "7xl": ["4.5rem", "1.5"],
      "8x": ["6rem", "1.5"],
      "9xl": ["8rem", "1.5"],
    },
    extend: {
      colors: {
        maroon: {
          light: "#FBF2F2",
          "light-hover": "#E5B4B2",
          DEFAULT: "#AA0601",
          dark: "#650300",
        },
      },
      // backgroundImage: {
      //   "logo-white": "url('../images/logo-white.png')"  //html class="bg-logo-white"
      // },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
  },
};
