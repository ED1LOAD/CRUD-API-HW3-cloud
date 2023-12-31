import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFFFFF",
      },
    },
  },
});

export default createTheme(myTheme);