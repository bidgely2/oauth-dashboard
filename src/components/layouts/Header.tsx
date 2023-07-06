import {AppBar, Typography} from "@mui/material"
import logo from "../../assets/img/bidgely.png";
import styles from "./login.module.css"
import Menu from "../Dashboard/Menu"
import { useState } from "react";
import utilityLogo from "../../assets/img/PacifiCorp.jpg"

const Header = ()=>{

    const [LoggedIn, setLoggedIn] = useState<boolean>(true);

    return (
        <AppBar sx={{
            height: "70px",
            color: "black",
            bgcolor:"white",
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        }}>
            <img className={styles.headerLogo} src={logo} alt="Bidgely Inc."/>
            <Typography sx={{fontFamily: "'Noto Sans SC', sans-serif", fontSize: "21px"}}>Bidgely Oauth Console</Typography>
            {LoggedIn
                ?<><img className={styles.utilityLogo} src={utilityLogo}/>
                <Menu LoggedIn={LoggedIn} setLoggedIn = {setLoggedIn} />
                </>
                :<></>}
        </AppBar>
    )
}

export default Header;