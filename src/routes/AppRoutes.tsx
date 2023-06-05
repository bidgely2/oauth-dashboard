import {Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Applayout from "../components/AppLayout";
import Dashboard from "../components/Dashboard";

function AppRoutes(){
    return (
        <>
            <Routes>
                <Route  element={<Applayout />}>
                    {/* <Route path="/" element={<Dashboard />}/> */}
                    <Route path="/" element={<Login />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;