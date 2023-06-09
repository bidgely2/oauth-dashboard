import {Routes, Route} from "react-router-dom"
import Root from "../components/root/LoginRoot"
import RouteGaurd from "./RouteGaurd"
import Login from "../components/root/Login";
import NotFound from "../components/root/NotFound"
import CreateApp from "../components/Dashboard/CreateApp";
import Dashboard from "../components/Dashboard/Dashboard";

function AppRoutes(){

    return (
        <>
            <Routes>
                <Route path="" element={<Root />}/>
                <Route path="/" element={<Root />}/>
                <Route path="/login" element={<Login />} />
                <Route path ="/createApp" element={<CreateApp/>}/>

                <Route element={<RouteGaurd />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                </Route>

                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    )
}

export default AppRoutes;