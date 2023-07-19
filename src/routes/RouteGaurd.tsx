import { useSelector } from "react-redux";
import Applayout from "../layouts/AppLayout";
import {Navigate, Outlet} from "react-router-dom"

const RouteGaurd = ()=>{
    const loggedIn:boolean = useSelector((state:any)=>state.session)
    console.log(loggedIn);
    return(
        <>
            {loggedIn
            ?<Applayout>
                <Outlet />
            </Applayout>
            :<Navigate to="/login" replace={true}/>}
            
        </>
    )
}

export default RouteGaurd;
