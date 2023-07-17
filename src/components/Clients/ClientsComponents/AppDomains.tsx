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
import { APIURLS, OauthAPIs } from "../../../apis/OauthAPI";

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
    id: number
}

interface domainAPIProps{
    id:number,
    clientId:string,
    requestOrigin:string
}


const AppDomains = ({ AppDomain }: AppDomainProps) => {

    
    const AppDomainComponent = ({Domain,id}: domainComponentProps) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    mb: "20px",
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
                    onClick={CopyClick}
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
    
    
    const { rc } = useGlobalContext();
    
    const [redirectURI, setURI] = useState("");
    const [currentId,setCurrentId] = useState(0);
    const [del, setDel] = useState({ open: false, clickedYes: false });
    const [Toast, setToast] = useState<ToastMsg>({
        open: false,
        msgType: "success",
        content: "",
        time: 0,
    });
    const [appDomain,setAppDomain] = useState<domainAPIProps[]>([{id:0,clientId:"",requestOrigin:""}]);

    useEffect(()=>{
        const getData = async() => {
            const res = await OauthAPIs.getData(rc,APIURLS.APPDOMAINS)
                .then((response)=>setAppDomain(response.data as domainAPIProps[]))
        }
        getData();
    },[])

    // console.log(appDomain);
    
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
    const CopyClick = (e: any) => {
        navigator.clipboard.writeText(redirectURI);
        setToast({
            open: true,
            msgType: "success",
            content: "Successfullt copied the domain",
            time: 3000,
        });
    };

    const DelClick = (e:any,id:number) => {
        console.log(id);
        setCurrentId(id);
        setDel({ open: true, clickedYes: false });
    };

    if (del.clickedYes) {
        setURI("");
        setToast({
            open: true,
            msgType: "success",
            content: "Domain deleted successfully",
            time: 3000,
        });
        setDel({ open: false, clickedYes: false });
        rc.apiClient
            .delete("/api/v2.0/whitelist-origin/delete", {
                params: { requestId: 123 },
            })
            .then((res) => {
                console.log(res.data);
            });
        AppDomain.splice(currentId,1);
    }

    const SetInput = (e: any) => {
        setURI(e.target.value);
    };

    const CloseToast = () => {
        setToast({ open: false, msgType: "success", content: "", time: 0 });
    };

    const SaveURI = () => {
        // console.log(AppDomain.AppDomain);
        if (isValidUrl(redirectURI) && redirectURI.length !== 0) {
            AppDomain.push(redirectURI);
            rc.apiClient
                .post("/api/v2.0/whitelist-origin/post", { requestId: 123 })
                .then((res) => {
                    console.log(res.data);
                });
        } else {
            setToast({
                open: true,
                msgType: "warning",
                content: "Invalid URI input",
                time: 5000,
            });
        }
        setURI("");
    };

    const Domains = appDomain.map((domain, index) => { return <AppDomainComponent Domain={domain.requestOrigin} id={index}/> })

    return (
        <EditBox>
            <Title> Your App Domains</Title>
            <Box sx={{ disply: "flex", flexDirection:"column", mt:"15px" }}>
                {Domains}
                <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                    <TextField
                        placeholder="Add an app domain"
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
