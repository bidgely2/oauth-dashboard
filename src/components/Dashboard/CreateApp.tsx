import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Box, Button, Divider} from "@mui/material";
import { AppsInterface, useGetAppData } from "../../__mock__/apis/OauthMocks/AppInfo"
import { useState } from "react";
import React from "react";
import {Close} from '@mui/icons-material';
import ToastMessage from "../templates/ToastMessage";
import { ToastMsg } from "../templates/InputBox";
import { useGlobalContext } from "../../context/GlobalContext";

interface PopupProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateApp = (props: PopupProps) => {

    const {rc} = useGlobalContext()

    const [input, setInput] = useState<AppsInterface>({ name: "", type: "" });   //FormInputs
    const [Toast, setToast] = useState<ToastMsg>({ open: false, msgType: "success", content: "", time: 0 });  //ToastMsg

    const AppData:AppsInterface[] = useGetAppData();
    // console.log(DATA);
    const [timeOutId,settimeOutId] = useState<any>();

    const ClickCreate = () => {
        
        // app name is already present
        let present: AppsInterface | undefined = AppData.find((data) => { return data.name === input.name ? true : false })
        // all inputs empty
        let failure: boolean = (input.type === "") || (input.name === "")

        if (failure) {
            setToast({ open: true, msgType: "error", content: "Please provide input", time: 10000 })
        } else if (present !== undefined) {
            setToast({ open: true, msgType: "warning", content: "The given App already exists", time: 10000 })
        } else {
            AppData.push(input);

            rc.apiClient.post("/api/apps/post",{ requestId: 123, name:input.name,type:input.type})
                .then(res=>console.log(res.data));

            setToast({ open: true, msgType: "success", content: "Successfully created the app", time: 5000 })
            settimeOutId (setTimeout(()=>{
                setInput({ name: "", type: "" })
                ToastClose();
                props.setOpen(false);}, 5000))
        }
    }

    const handleInput = (e: any) => {
        const NAME = e.target.name;
        const VALUE = e.target.value
        setInput({ ...input, [NAME]: VALUE })
    }

    const ClickCancel = () => {
        setInput({ name: "", type: "" })
        ToastClose();
        props.setOpen(false);
        // console.log(timeOutId);
        clearTimeout(timeOutId);
    }

    const ToastClose = () => {
        setToast({ ...Toast, open: false, time: 0 })
    }

    const CloseClick = () => {
        ClickCancel();
    }

    return (
        <Dialog
            open={props.open}
            onClose={() => props.setOpen(!props.open)}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    bgcolor: "white",
                    width: "380px",
                    height: "350px",
                    position:"relative"
                }}>
                <DialogTitle sx={{disply:"flex",flexDirection:"row",alignItems:"center",width:"85%",ml:"10px"}}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"center", mt:"10px"}}>
                        <Typography sx={{ typography:"title5",mr:"auto",ml:"10px"}} >Create App</Typography>
                        <Close sx={{color:"black", ":active":{fontSize:"22px"}}} onClick={CloseClick}/>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{
                    padding: "0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr:"auto",
                    ml:"45px"
                }}>
                    {/* <Box sx={{ display:"flex", flexDirection:"cloumn",alignItems:"center", width: "340px",mt:"10px"}}> */}
                        {/* <Box sx={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",mb:"20px", alignItems:"center"}}> */}
                            <Typography variant="body2" sx={{mr:"auto"}}>App Name</Typography>
                            <TextField variant="outlined" name="name" onChange={handleInput} autoComplete="off" sx={{width:"280px"}} />
                        {/* </Box> */}
                        {/* <Box sx={{display:"grid",gridTemplateColumns:"repeat(5,1fr)", alignItems:"center"}}> */}
                            <Typography variant="body2" sx={{mr:"auto", mt:"20px"}}>App Type</Typography>
                            <TextField variant="outlined" name="type" onChange={handleInput} autoComplete="off" sx={{width:"280px"}}/>
                        {/* </Box> */}
                    {/* </Box> */}
                </DialogContent>
                <DialogActions>
                    <Box sx={{ mb: "20px", display: "flex", flexDirection: "row", justifyContent: "space-around",mr:"10px" }}>
                        <Button variant="contained" sx={{ mr: "40px", width: "100px" }} onClick={ClickCreate}>Create</Button>
                        <Button variant="contained" sx={{ ml: "40px", width: "100px" }} onClick={ClickCancel}>Cancel</Button>
                    </Box>
                </DialogActions>
            </Box>
            <ToastMessage 
                open={Toast.open} 
                time={Toast.time} 
                ToastClose={ToastClose} 
                msgType={Toast.msgType} 
                content={Toast.content}
                vertical='top'
                horizontal='right'/>
        </Dialog>
    )
}

export default CreateApp;