import { Typography, Button, Box } from "@mui/material";
import lock from "../../../assets/img/lock.png";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from './Loginbody.module.css'
import { useDispatch } from "react-redux";
import { SESSION_ACTIONS } from "../../../store/actions/SessionActions";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const ClickLogin = () =>{
        dispatch(SESSION_ACTIONS.SET_LOGGED_IN(true))
        navigate("/dashboard");
    }

    return (
        <>
            <Header />
            <Box
                sx={{
                    position: "absolute",
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
                <Box sx={{
                    width:{xs:"55%",md:"35%",lg:"25%"},
                    height:{xs:"60%",md:"60%",lg:"70%"},
                    borderRadius:"5px", 
                    bgcolor:"#ffffffd1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:'center',
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}>
                    <img className={styles.lockImg} src={lock} alt={"Lock img"} />
                    <Typography  fontSize={{"md":"20px","xs":"16px"}} margin={"10px"} textAlign="center">
                        Login to Your Oauth Dashboard
                    </Typography>
                    <Typography
                        sx={{fontSize:{xs:"9px",md:"13px"}, m:"16px 16px 40px 16px"}}
                        letterSpacing={1.5}
                        color={"#5c5c5a"}
                        textAlign="center"
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
                        onClick={ClickLogin}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Login;
