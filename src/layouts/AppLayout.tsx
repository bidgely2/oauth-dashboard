import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { typographies } from "./Theme/Typography";

interface ApplayoutProp{
    children:React.ReactNode
}


function Applayout({children}:ApplayoutProp){

    const theme = createTheme({
        typography:{
            ...typographies
        }
    })

    return(
        <ThemeProvider theme = {theme}>
            <Box sx={{position:"relative",minHeight:"100vh"}}>
                <Header />
                {children}
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default Applayout;