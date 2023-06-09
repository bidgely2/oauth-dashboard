import { Card, CardContent, Typography } from "@mui/material";
import {Appdata} from "../../__mock__/apis/AppInfo"

interface AppCardProps{
    data: Appdata
}

function AppCard(props:AppCardProps){
    return(
        <Card sx={{
            margin:"10px",
            width:"110px",
            height:"110px"
        }}>
            <CardContent>
                <Typography sx={{fontWeight:"550"}} variant="h6">{props.data.name}</Typography>
                <Typography variant="body1">{props.data.type}</Typography>
            </CardContent>
        </Card>
    )
}

export default AppCard;