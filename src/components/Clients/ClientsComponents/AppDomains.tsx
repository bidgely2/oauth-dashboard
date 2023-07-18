import { Box, TextField, Button, AlertColor } from "@mui/material";
import {
    ContentCopyOutlined as Copy,
    DeleteOutlined as Delete,
} from "@mui/icons-material";
import { EditBox } from "../../templates/EditBox";
import { useEffect, useState } from "react";
import ToastMessage from "../../templates/ToastMessage";
import PopupWarning from "../../templates/PopupWarning";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Title } from "./title/title";
import { APIURLS, OauthAPIs, client_id } from "../../../apis/OauthAPI";
import { AxiosRequestConfig } from "axios";

interface AppDomainProps {
    AppDomain: string[];
}

interface ToastMsg {
    open: boolean;
    msgType: AlertColor;
    content: string;
    time: number;
}

interface domainComponentProps{
    Domain: string,
    domainId: number,
    arrayId:number
}

interface domainAPIProps{
    id:number,
    clientId:string,
    requestOrigin:string
}

const AppDomains = ({ AppDomain }: AppDomainProps) => {

    
    const AppDomainComponent = ({Domain,domainId,arrayId}: domainComponentProps) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    mb: "20px",
                    width:"fit-content"
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
                        minWidth:"350px",
                        border:"1px #D8D8D8 solid",
                        typography:"body4",
                        fontWeight:"400",
                        fontFamily:"'Roboto Mono', Monaco, monospace",
                    }}>
                    {Domain}
                </Box>
                <Copy
                    fontSize="small"
                    color="primary"
                    onClick={(e)=>CopyClick(e,arrayId)}
                    sx={{
                        opacity: "60%",
                        ":hover": { opacity: "100%" },
                        ":active": { fontSize: "18px" },
                    }}
                    />
                <Delete
                    fontSize="small"
                    color="primary"
                    onClick={(e)=>DelClick(e,domainId,arrayId)}
                    sx={{
                        opacity: "60%",
                        ":hover": { opacity: "100%" },
                        ":active": { fontSize: "18px" },
                    }}/>
            </Box>
        )
    }
    
    
    const { rc } = useGlobalContext();
    
    const [requestOrigin, setOrigin] = useState("");
    const [currentId,setCurrentId] = useState({domainId:0,arrayId:0});
    const [del, setDel] = useState({ open: false, clickedYes: false });
    const [addDomain,setDomain] = useState(false)
    const [Toast, setToast] = useState<ToastMsg>({
        open: false,
        msgType: "success",
        content: "",
        time: 0,
    });
    const [appDomain,setAppDomain] = useState<domainAPIProps[]>([{id:0,clientId:"",requestOrigin:""}]);

    useEffect(()=>{
        const getData = async() => {
            if(addDomain){
                const res = await OauthAPIs.postData(rc,APIURLS.APPDOMAINS,{clientId:client_id,requestOrigin:requestOrigin})
                    .then((response)=>console.log(response.data))
                setDomain(false);
                setOrigin("");
            }
            else if(!del.clickedYes){
                const res = await OauthAPIs.getData(rc,APIURLS.APPDOMAINS)
                .then((response)=>setAppDomain(response.data as domainAPIProps[]))
            }
            else{
                setOrigin("");
                setToast({
                    open: true,
                    msgType: "success",
                    content: "Domain deleted successfully",
                    time: 3000,
                });
                
                const config:AxiosRequestConfig = {
                        data: {
                            "clientId":client_id,
                            "requestOrigin":appDomain[currentId.arrayId].requestOrigin
                        }
                }
                const res = await OauthAPIs.deleteData(rc,APIURLS.APPDOMAINS,config,currentId.domainId)
                .then((response)=>console.log(response.data));
                setDel({ open: false, clickedYes: false });
            }
        }
        getData();
    },[del.clickedYes,addDomain])
    
    const isValidUrl = (urlString: string) => {
        var inputElement = document.createElement("input");
        inputElement.type = "url";
        inputElement.value = urlString;

        if (!inputElement.checkValidity()) {
            return false;
        } else {
            return true;
        }
    };
    const CopyClick = (e: any,arraydId:number) => {
        navigator.clipboard.writeText(appDomain[arraydId].requestOrigin);
        setToast({
            open: true,
            msgType: "success",
            content: "Successfully copied the domain",
            time: 3000,
        });
    };

    const DelClick = (e:any,domainId:number,arrayId:number) => {
        setCurrentId({domainId:domainId,arrayId:arrayId});
        setDel({ open: true, clickedYes: false });
    };

    const SetInput = (e: any) => {
        setOrigin(e.target.value);
    };

    const CloseToast = () => {
        setToast({ open: false, msgType: "success", content: "", time: 0 });
    };

    const SaveURI = () => {

        if (isValidUrl(requestOrigin) && requestOrigin.length !== 0) {
            setDomain(true);
        } else {
            setToast({
                open: true,
                msgType: "warning",
                content: "Invalid URI input",
                time: 5000,
            });
            setOrigin("");
        }
    };

    const Domains = appDomain.map((domain, index) => { return <AppDomainComponent Domain={domain.requestOrigin} domainId={domain.id} arrayId={index}/> })

    return (
        <EditBox>
            <Title> Your App Domains</Title>
            <Box sx={{ disply: "flex", flexDirection:"column", mt:"15px"}}>
                <Box sx={{maxHeight:"400px",overflow:"auto",mb:"10px"}}>
                    {Domains}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                    <TextField
                        placeholder="Add an app domain"
                        onChange={SetInput}
                        name="requestOrigin"
                        value={requestOrigin}
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
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
            <ToastMessage
                open={Toast.open}
                time={Toast.time}
                ToastClose={CloseToast}
                msgType={Toast.msgType}
                content={Toast.content}
                vertical="top"
                horizontal="right"
            />
            <PopupWarning
                open={del}
                setOpen={setDel}
                message="The App Domain will be deleted permanently"
            />
        </EditBox>
    );
};

export default AppDomains;
