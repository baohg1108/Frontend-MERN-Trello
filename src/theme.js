// theme.js
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";

const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: cyan,
        secondary: orange,
      },
    },
  },
});

export default theme;
