import { Typography, Button, Box } from "@mui/material";
import lock from "../assets/img/lock.png"
import styles from "./login.module.css"
import Header from "./Header"
import Footer from "./Footer"

function Login(){

    const LoggedIn = false;

    return (
        <>
            <Header />
            <Box 
                sx={{
                    position:"absolute",
                    width:"100%",
                    height:"75%",
                    bgcolor:"#f7f7f5",
                    top:"10%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <img className={styles.lockImg} src={lock} alt={"Lock img"}/>
                <Typography 
                    fontSize={20}>
                    Login to Your Oauth Dashboard
                </Typography>
                <Typography 
                    fontSize={13}
                    fontWeight={100} 
                    letterSpacing={1.5}
                    color={"#5c5c5a"}
                    mt={2}
                    mb={5}>
                    Once you login yours apps will be available
                </Typography>
                <Button 
                    variant="contained" 
                    sx={{
                        backgroundColor:"#1467D5",
                        color:"white",
                        height:"40px",
                        width:"120px"
                    }}>
                    Log In
                </Button>
            </Box>
            <Footer />
        </>
        
    )
}

export default Login;