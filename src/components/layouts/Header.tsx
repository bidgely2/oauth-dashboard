import {AppBar, Typography} from "@mui/material"
import logo from "../../assets/img/bidgely.png";
import styles from "./login.module.css"

const Header = ()=>{
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
        </AppBar>
    )
}

export default Header;