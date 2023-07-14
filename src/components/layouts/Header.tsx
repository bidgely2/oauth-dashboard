import {AppBar, Typography} from "@mui/material"
import logo from "../../assets/img/bidgely.png";
import styles from "./login.module.css"
import Menu from "../Dashboard/Menu"
import { useSelector } from "react-redux";

const Header = ()=>{

    const loggedIn = useSelector((state:any)=>state.session);

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
            <Typography sx={{fontFamily: "poppins, 'Arial Narrow', sans-serif", fontSize: {xs:"17px",md:"22px"}, fontWeight:"550", letterSpacing:"1px"}}>Bidgely Oauth Console</Typography>
            {loggedIn
                ?<><img className={styles.utilityLogo} src={"https://d13hc4rsp6iv99.cloudfront.net/dashboard/AEE.png"} alt="Utility logo"/>
                <Menu loggedIn={loggedIn}/>
                </>
                :<></>}
        </AppBar>
    )
}

export default Header;