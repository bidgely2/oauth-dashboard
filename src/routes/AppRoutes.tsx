import {Routes, Route} from "react-router-dom"
import Root from "../components/Root"
import Dashboard from "../components/Dashboard";
import RouteGaurd from "./RouteGaurd"
import Login from "../components/Login";
import NotFound from "../components/NotFound"

function AppRoutes(){

    return (
        <>
            <Routes>
                <Route path="" element={<Root />}/>
                <Route path="/" element={<Root />}/>
                <Route path="/login" element={<Login />} />

                <Route element={<RouteGaurd />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                </Route>

                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    )
}

export default AppRoutes;