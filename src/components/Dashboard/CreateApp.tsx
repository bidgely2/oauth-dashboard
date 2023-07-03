import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Box, Button} from "@mui/material";
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
                    width: "400px",
                    height: "380px",
                    position:"relative"
                }}>
                <DialogTitle sx={{ mr: "auto"}}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap:"140px" }}>
                        <Typography variant="h4" sx={{ fontWeight: "550"}} >Create App</Typography>
                        <Close color="disabled" sx={{":hover":{color:"gray"}, ":active":{fontSize:"22px"}}} onClick={CloseClick}/>
                    </Box>
                    <Typography variant="subtitle2" sx={{ mt: "10px", mb: "0px", ml: "5px" }}>Provide some description about the app</Typography>
                </DialogTitle>
                <DialogContent sx={{
                    padding: "0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        width: "300px",
                        display: "grid",
                        gridTemplateColumns: "auto",
                        columnGap: "20px",
                        rowGap: "20px",
                        padding: '10px',
                        alignItems: "center",
                    }}>
                        {/* <Typography variant="h6" >App Name</Typography> */}
                        <TextField variant="outlined" label="App Form" name="name" fullWidth onChange={handleInput} />
                        {/* <Typography variant="h6" >App Type</Typography> */}
                        <TextField variant="outlined" label="App Type" name="type" fullWidth onChange={handleInput} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{ mb: "40px", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ mr: "20px", width: "100px" }} onClick={ClickCreate}>Create</Button>
                        <Button variant="contained" sx={{ ml: "20px", width: "100px" }} onClick={ClickCancel}>Cancel</Button>
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