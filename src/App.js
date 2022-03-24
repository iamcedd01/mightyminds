// Components
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

// Pages
import Index from "./pages/Index";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0F2551",
        },
        secondary: {
            main: "#0D244F",
        },
    },
    typography: {
        fontFamily: "Roboto",
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Index />
        </ThemeProvider>
    );
}

export default App;
