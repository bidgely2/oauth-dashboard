import { Typography, Button, Box } from "@mui/material";
import lock from "../../../assets/img/lock.png";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from './Loginbody.module.css'
import { useGlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    // const {loggedIn,setLoggedIn} = useGlobalContext();

    const navigate = useNavigate();

    const LoginClick = ()=>{
        // setLoggedIn(!loggedIn)
        navigate("/dashboard");
    }

    return (
        <>
            <Header />
            <Box
                sx={{
                    position: "absolute",
                    // mt:"70px",
                    // minHeight:"100vh",
                    width: "100vw",
                    bgcolor: "#edede8",
                    top: "70px",
                    bottom: "80px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:'center'
                }}
            >
                {/* <Box sx={{
                    width:"25%",
                    height:"70%", 
                    borderRadius:"5px", 
                    bgcolor:"#F8F6F4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:'center'
                }}> */}
                    <img className={styles.lockImg} src={lock} alt={"Lock img"} />
                    <Typography fontSize={20} margin={"10px"}>
                        Login to Your Oauth Dashboard
                    </Typography>
                    <Typography
                        fontSize={13}
                        fontWeight={100}
                        letterSpacing={1.5}
                        color={"#5c5c5a"}
                        mt={2}
                        mb={5}
                    >
                        Once you login yours apps will be available
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1467D5",
                            color: "white",
                            height: "40px",
                            width: "120px",
                        }}
                        onClick={LoginClick}
                    >
                        Log In
                    </Button>
                {/* </Box> */}
            </Box>
            <Footer />
        </>
    );
};

export default Login;
