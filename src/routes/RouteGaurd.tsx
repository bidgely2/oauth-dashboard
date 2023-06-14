import Applayout from "../layouts/AppLayout";
import {Navigate, Outlet} from "react-router-dom"

const RouteGaurd = ()=>{
    const userLoggedIn = true;
    return(
        <>
            {userLoggedIn
            ?<Applayout>
                <Outlet />
            </Applayout>
            :<Navigate to="/login" replace={true}/>}
            
        </>
    )
}

export default RouteGaurd;
