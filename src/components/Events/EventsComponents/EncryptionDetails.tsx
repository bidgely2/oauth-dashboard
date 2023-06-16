import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";
import { CachedOutlined as Regenrate} from '@mui/icons-material';

interface EncryptDetailProps{
    EncryptDetail: any
}

const EncryptionDetails = ({EncryptDetail}:EncryptDetailProps) => {
    return (
        <EditBox>
            <Box sx={{display: "flex", flexDirection: "row", alignItems:"center", mb:"20px"}} >
                <Typography variant="h6" sx={{ ml: "20px",mr:"30px", fontFamily:"'Jost', sans-serif" }}>Encryption Details</Typography>
                <Regenrate 
                    fontSize="small" 
                    color="primary" 
                    sx={{
                        opacity:"60%", 
                        ":hover":{opacity:"100%"}, 
                        ":active":{fontSize:"18px"}
                    }}/>
                    <Typography color="primary" sx={{ml:"5px", opacity:"60%"}}>Regenerate</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", ml: "100px", mr: "auto" }}>
                <InputBox title="Encryption Key" wide="400px" readOnly={true} placeholder={EncryptDetail.EncryptionKey} />
                <InputBox title="iV Vector" wide="400px" readOnly={true} placeholder={EncryptDetail.iVVector}/>
            </Box>
        </EditBox>
    )
}

export default EncryptionDetails;