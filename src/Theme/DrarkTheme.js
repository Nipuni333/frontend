const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#5A20CB",
        },
        black:{
            main:"#0D0D0D"

        },
        background: {
            default: "#0D0D0D",
            paper: "#0D0D0D",
        },
        text: {
            primary: "#FFFFFF",  // Usually, for dark mode, text should be light
        },
    },
    // Extending the theme to include custom colors
    customColors: {
        black: "#242B2E",
        textColor: "#111111",
    },
});

export default darkTheme;
