import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";

interface ClientDetailProps{
    ClientDetail:any
}

const ClientDetails = ({ClientDetail}:ClientDetailProps) => {
    return (
        <EditBox>
            <Typography variant="h6" sx={{ ml: "30px",mb: "10px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557" }}>Client Detail</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns:"auto", gap: "10px",width:"100%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox title="ClientId" wide="400px" readOnly={true} placeholder={ClientDetail.ClientId}/>
                    <InputBox title="ClientSecret" wide="400px" readOnly={true} placeholder={ClientDetail.ClientSecret}/>
                </Box>
                <InputBox title="Api Endpoint" margin="0 0 0 100px" wide="400px" readOnly={true} placeholder={ClientDetail.APIEndpoint} />
            </Box>
        </EditBox>
    )
}

export default ClientDetails;