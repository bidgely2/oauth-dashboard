import Applayout from "../layouts/AppLayout";
import {Navigate, Outlet} from "react-router-dom"

function RouteGaurd(){
    const userLoggedIn = true;
    return(
        <>
            {userLoggedIn?<Applayout />:<Navigate to="/login" replace={true}/>}
            <Outlet />
        </>
    )
}

export default RouteGaurd;
