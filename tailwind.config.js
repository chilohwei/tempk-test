/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#163c73",
          "200": "#1e2c5f",
          "300": "rgba(30, 44, 95, 0.5)",
          "400": "rgba(22, 60, 115, 0.5)",
        },
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.1)",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(255, 255, 255, 0.16)",
        },
        whitesmoke: {
          "100": "#f1f1f1",
          "200": "#eee",
          "300": "#ebeced",
          "400": "rgba(238, 238, 238, 0.2)",
        },
        seagreen: "#00813e",
        midnightblue: {
          "100": "#001440",
          "200": "rgba(0, 20, 64, 0.1)",
          "300": "rgba(0, 20, 64, 0.5)",
        },
        orange: "#ffab00",
        mediumslateblue: {
          "100": "#0066ff",
          "200": "rgba(0, 102, 255, 0.5)",
        },
        lightsteelblue: {
          "100": "#c3dbff",
          "200": "#c7d2ff",
        },
        deepskyblue: "#34c1ed",
        blueviolet: "#6740f4",
        palevioletred: "#ff9abd",
        mediumseagreen: "#2ac072",
        lavender: {
          "100": "#daeeff",
          "200": "#d2e9fd",
        },
        mediumblue: "#5a31f4",
        tomato: "#ff585b",
        lightskyblue: "#96d3ff",
        dodgerblue: "#0095ff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        oswald: "Oswald",
        "roboto-serif": "'Roboto Serif'",
      },
      borderRadius: {
        "4xs": "9px",
        xl: "20px",
        "29xl": "48px",
        "11xl": "30px",
        "21xl": "40px",
        "10xs": "3px",
        "sm-3": "13.3px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "5xl": "1.5rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      xs: "0.75rem",
      "21xl": "2.5rem",
      "181xl": "12.5rem",
      "31xl": "3.125rem",
      "61xl": "5rem",
      "49xl": "4.25rem",
      "22xl": "2.563rem",
      "35xl": "3.375rem",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
