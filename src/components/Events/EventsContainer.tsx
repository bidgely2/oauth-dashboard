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

    // for clicking back button
    const navigate = useNavigate();
    const BackClick =()=>{
        navigate("/dashboard")
    }

    const ClientData = useGetClientData();

    return (
        ClientData.length>0 ? <Box sx={{ width: "100vw",p: "70px 20px 80px 20px", mt:"20px", bgcolor:"#f7f7f5", boxSizing:"border-box"}}>
            <Box sx={{display:"flex",flexDirection:"row", alignItems:"center", mb:"20px",ml:"20px"}}>
                <Typography variant="h5" sx={{fontFamily:"'Noto Sans SC', sans-serif", color:"#4F4557"}}> App/Credentials Information</Typography>
                <Button variant="contained" sx={{ml:"auto",mr:"30px"}} onClick={BackClick}>Back</Button>  
            </Box>
            <ClientDetails ClientDetail={ClientData[0].ClientDetail}/>
            <EncryptionDetails EncryptDetail={ClientData[0].EncryptDetail}/>
            <AppDomains AppDomain={ClientData[0].AppDomain}/>
            <GrantTypeManagement GrantManagement={ClientData[0].GrantManagement}/>
            <KeyManagement KeyManagement={ClientData[0].KeyManagement}/>
            <DeleteCredentials props={ClientData[0]}/>
        </Box>
        :<></>
    )
}

export default Events;