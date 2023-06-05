import Applayout from "../layouts/AppLayout";
import {Navigate, Outlet} from "react-router-dom"

function RouteGaurd(){
    const userLoggedIn = false;
    return(
        <>
            {userLoggedIn}
            ?<Applayout />
            :<Navigate to="/login" replace />
            <Outlet />
        </>
    )
}

export default RouteGaurd;
