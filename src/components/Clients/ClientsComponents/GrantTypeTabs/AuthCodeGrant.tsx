import { AlertColor, Box, Button, TextField, Typography } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete} from '@mui/icons-material';
import { useState } from "react";
import ToastMessage from "../../../templates/ToastMessage";
import PopupWarning from "../../../templates/PopupWarning";

interface AuthGrantProps{
    AppDomain:string[]
}

interface ToastMsg{
    open: boolean,
    msgType: AlertColor,
    content: string,
    time: number
}

interface RedirectURIProps{
    RedirectURI: string,
    id: number
}

const AuthCodeGrant = ({AppDomain}:AuthGrantProps) =>{

    const [redirectURI,setURI] = useState("");
    const [currentId,setCurrentId] = useState(0);
    const [Toast,setToast] = useState<ToastMsg>({open:false,msgType:"success",content:"",time:0});
    const [del, setDel] = useState({open:false,clickedYes:false}); 

    const RedirectURIComponent = ({RedirectURI,id}: RedirectURIProps) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    mb: "20px",
                    width:"fit-content",
                }}>
                <Box
                    sx={{
                        color:"#414547",
                        backgroundColor:"#E3F4F4",
                        borderRadius:"4px",
                        height:"40px",
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        userSelect:"none",
                        p:"5px 15px",
                        mr:"10px",
                        minWidth:"400px",
                        border:"1px #D8D8D8 solid",
                        typography:"body4",
                        fontWeight:"400",
                        fontFamily:"'Roboto Mono', Monaco, monospace",
                    }}>
                    {RedirectURI}
                </Box>
                <Copy
                    fontSize="small"
                    color="primary"
                    onClick={(e)=>CopyClick(e,id)}
                    sx={{
                        opacity: "60%",
                        ":hover": { opacity: "100%" },
                        ":active": { fontSize: "18px" },
                    }}
                    />
                <Delete
                    key={id}
                    fontSize="small"
                    color="primary"
                    onClick={(e)=>DelClick(e,id)}
                    sx={{
                        opacity: "60%",
                        ":hover": { opacity: "100%" },
                        ":active": { fontSize: "18px" },
                    }}/>
            </Box>
        )
    }

    const CopyClick=(e:any,id:number)=>{
        navigator.clipboard.writeText(AppDomain[id]);
        setToast({open:true,msgType:"success",content:"Successfully copied the URI",time:3000})
    }

    const DelClick =(e:any,id:number)=>{
        setCurrentId(id);
        setDel({open:true,clickedYes:false});
    }
    if(del.clickedYes){
        
        setURI("");
        setToast({open:true,msgType:"success",content:"URI deleted successfully",time:3000})
        setDel({open:false,clickedYes:false});
        AppDomain.splice(currentId,1);
    }

    const SetInput =(e:any)=>{
        setURI(e.target.value);
    }

    const isValidUrl = (urlString: string) =>{
        var inputElement = document.createElement('input');
        inputElement.type = 'url';
        inputElement.value = urlString;
  
        if (!inputElement.checkValidity()) {
          return false;
        } else {
          return true;
        }
      }

    const SaveURI =()=>{
        if(isValidUrl(redirectURI) && redirectURI.length!==0){
            AppDomain.push(redirectURI);
        }
        else{
            setToast({open:true,msgType:"warning",content:"Invalid URI input",time:5000})
        }
        setURI("")
    }

    const CloseToast =()=>{
        setToast({open:false,msgType:"success",content:"",time:0});
    }

    const URIs = AppDomain.map((RedirectURI, index) => { return <RedirectURIComponent RedirectURI={RedirectURI} id={index}/> })

    return(
        <Box 
            sx={{
                p:"20px",
                maxWidth:"540px",
                overflowX:"auto",
                height:"250px",
                border:"1px lightgray solid",
                borderRadius:"5px",
                overflow:"hidden"}}>
            <Typography  sx={{ml:"20px",mb:"10px", fontFamily:"Noto Sans SC", typography:"subtitle5"}}>Redirect URI Management</Typography>
            <Typography variant="body2" sx={{ml:"20px", mb:"20px"}}>Enable Auth Code by specifying atleast one uri</Typography>
            <Box sx={{ml:"20px"}}>
                <Box sx={{maxHeight:"115px",overflow:"auto",mb:"10px"}}>
                    {URIs}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                    <TextField
                        placeholder="Add a redirect URI"
                        onChange={SetInput}
                        name="redirectURI"
                        value={redirectURI}
                        size="small"
                        InputProps={{ style: { fontSize: "17px", borderRadius:"2px 0 0 2px", width:"240px" } }}
                        autoComplete="off"
                    />
                    <Button
                        variant="contained"
                        onClick={SaveURI}
                        sx={{
                            boxShadow:"none",
                            borderRadius:"0 3px 3px 0",
                            fontSize: "17px",
                            height: "41px",
                            width: "80px",
                            textTransform: "none",
                        }}>Save
                    </Button>
                </Box>
            </Box>
            <ToastMessage 
                open={Toast.open} 
                time={Toast.time} 
                ToastClose={CloseToast} 
                msgType={Toast.msgType} 
                content={Toast.content}
                vertical='top'
                horizontal='right'/>
            <PopupWarning open={del} setOpen={setDel} message="The redirect URI will be deleted permanently"/>
        </Box>
    )
}

export default AuthCodeGrant;