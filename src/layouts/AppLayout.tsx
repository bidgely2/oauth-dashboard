import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Box } from "@mui/material";

interface ApplayoutProp{
    children:React.ReactNode
}

function Applayout({children}:ApplayoutProp){
    return(
        <Box sx={{position:"relative",minHeight:"100vh"}}>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}

export default Applayout;