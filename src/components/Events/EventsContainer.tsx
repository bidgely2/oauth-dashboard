import { Box, Button, Typography } from "@mui/material";
import ClientDetails from "./EventsComponents/ClientDetails";
import EncryptionDetails from "./EventsComponents/EncryptionDetails";
import GrantTypeManagement from "./EventsComponents/GrantTypeManagement";
import KeyManagement from "./EventsComponents/KeyManagement";
import DeleteCredentials from "./EventsComponents/DeleteCredentials";
import AppDomains from "./EventsComponents/AppDomains";
import { useNavigate } from "react-router-dom";
import { useGetClientData } from "../../__mock__/apis/OauthMocks/EventsInfo";

const Events = () => {

    const navigate = useNavigate();

    const BackClick =()=>{
        navigate("/dashboard")
    }

    const DATA = useGetClientData();
    //  console.log(DATA); 

    return (
        <Box sx={{ width: "100vw",p: "70px 20px 80px 20px", mt:"20px", bgcolor:"#f7f7f5", boxSizing:"border-box"}}>
            <Box sx={{display:"flex",flexDirection:"row", alignItems:"center", mb:"20px",ml:"20px"}}>
                <Typography variant="h5" sx={{fontFamily:"'Noto Sans SC', sans-serif", color:"#4F4557"}}> App/Credentials Information</Typography>
                <Button variant="contained" sx={{ml:"auto",mr:"30px"}} onClick={BackClick}>Back</Button>  
            </Box>
            <ClientDetails ClientDetail={DATA.ClientDetail}/>
            <EncryptionDetails EncryptDetail={DATA.EncryptDetail}/>
            <AppDomains AppDomain={DATA.AppDomain}/>
            <GrantTypeManagement GrantManagement={DATA.GrantManagement}/>
            <KeyManagement KeyManagement={DATA.KeyManagement}/>
            <DeleteCredentials props={DATA}/>
        </Box>
    )
}

export default Events;