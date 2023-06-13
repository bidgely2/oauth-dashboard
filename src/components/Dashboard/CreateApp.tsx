import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Box, Button, Snackbar, AlertProps } from "@mui/material";
import { Apps, Appdata } from "../../__mock__/apis/AppInfo"
import { useState } from "react";
import React from "react";
import MuiAlert, { AlertColor } from "@mui/material/Alert"

interface PopupProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface ToastMsg {
    open: boolean,
    message: AlertColor,
    content: String,
    time: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateApp = (props: PopupProps) => {


    const [input, setInput] = useState<Appdata>({ name: "", type: "" });   //FormInputs
    const [Toast, setToast] = useState<ToastMsg>({ open: false, message: "success", content: "", time: 3000 });  //ToastMsg

    const ClickCreate = () => {
        let present: Appdata | undefined = Apps.find((data) => { return data.name === input.name ? true : false })
        let failure: boolean = (input.type === "") || (input.name === "")

        if (failure) {
            setToast({ open: true, message: "error", content: "Please provide input", time: 10000 })
        } else if (present !== undefined) {
            setToast({ open: true, message: "warning", content: "The given App already exists", time: 10000 })
        } else {
            Apps.push(input);
            setToast({ open: true, message: "success", content: "Successfully created the app", time: 5000 })
            setTimeout(() => { ClickCancel() }, 5000);
        }
    }

    const handleInput = (e: any) => {
        const NAME = e.target.name;
        const VALUE = e.target.value
        setInput({ ...input, [NAME]: VALUE })
    }

    const ClickCancel = () => {
        setInput({ name: "", type: "" })
        props.setOpen(false);
    }

    const ToastClose = () => {
        setToast({ ...Toast, open: false, time: 0 })
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
                    height: "380px"
                }}>
                <DialogTitle sx={{ mr: "auto" }}>
                    <Typography variant="h4" sx={{ fontWeight: "550" }} >Create App</Typography>
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
            <Snackbar open={Toast.open} autoHideDuration={Toast.time} onClose={ToastClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity={Toast.message} sx={{ width: '100%' }}>
                    {Toast.content}
                </Alert>
            </Snackbar>
        </Dialog>
    )
}

export default CreateApp;