import { createTheme } from "@mui/material/styles";
import { primary, secondary } from "./Colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primary[500],
        },
        secondary: {
            main: secondary[500],
        },
    },
});


export default theme;