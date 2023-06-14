import {Routes, Route} from "react-router-dom"
import Root from "../components/root/LoginRoot"
import RouteGaurd from "./RouteGaurd"
import Login from "../components/root/Login";
import NotFound from "../components/root/NotFound"
import Dashboard from "../components/Dashboard/Dashboard";
import Events from "../components/Events/EventsContainer"

const AppRoutes = ()=>{

    return (
        <>
            <Routes>
                <Route path="" element={<Root />}/>
                <Route path="/" element={<Root />}/>
                <Route path="/login" element={<Login />} />

                <Route element={<RouteGaurd />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/editApp/:id" element={<Events />} />
                </Route>

                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    )
}

export default AppRoutes;