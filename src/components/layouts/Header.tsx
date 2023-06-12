import {AppBar, Typography} from "@mui/material"
import logo from "../../assets/img/bidgely.png";
import styles from "./login.module.css"
import { AccountCircle } from "@mui/icons-material";
import Menu from "../Dashboard/Menu"
import { useState } from "react";

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
                ?<><AccountCircle fontSize="large" sx={{color:"#19A7CE", ml:"auto",mr:"5px"}} />
                <Menu LoggedIn={LoggedIn} setLoggedIn = {setLoggedIn} />
                </>
                :<></>}
        </AppBar>
    )
}

export default Header;