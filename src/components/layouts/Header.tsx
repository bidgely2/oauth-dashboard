import {AppBar, Typography} from "@mui/material"
import logo from "../../assets/img/bidgely.png";
import styles from "./login.module.css"
import Menu from "../Dashboard/Menu"
import { useState } from "react";
import utilityLogo from "../../assets/img/Reliance logo.png"

const Header = ()=>{

    const [LoggedIn, setLoggedIn] = useState<boolean>(true);

    return (
        <AppBar 
            sx={{
                height: "60px",
                color: "black",
                bgcolor:"white",
                display:"flex",
                flexDirection:"row",
                alignItems:"center"
            }}>
            <img className={styles.headerLogo} src={logo} alt="Bidgely Inc."/>
            <Typography variant="h6">Bidgely Oauth Console</Typography>
            {LoggedIn
                ?<><img className={styles.utilityLogo} src={utilityLogo}/>
                <Menu LoggedIn={LoggedIn} setLoggedIn = {setLoggedIn} />
                </>
                :<></>}
        </AppBar>
    )
}

export default Header;