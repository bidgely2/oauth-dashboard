import { Card, CardContent, Typography } from "@mui/material";
import {Appdata} from "../../__mock__/apis/AppInfo"

interface AppCardProps{
    data: Appdata
}

function AppCard(props:AppCardProps){
    return(
        <Card sx={{
            margin:"10px",
            
            width:"100px",
            height:"100px"
        }}>
            <CardContent>
                <Typography>{props.data.name}</Typography>
                <Typography>{props.data.type}</Typography>
            </CardContent>
        </Card>
    )
}

export default AppCard;