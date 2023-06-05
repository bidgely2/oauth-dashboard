import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

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