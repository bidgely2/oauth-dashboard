import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Applayout(){
    return(
        <>
            <Header />
            <Footer />
            <Outlet />
        </>
    )
}

export default Applayout;