import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    Box,
    Button,
    Select,
    MenuItem,
    FormControl,
    IconButton,
} from "@mui/material";
import {
    AppsInterface,
} from "../../__mock__/apis/OauthMocks/AppInfo";
import { useEffect, useState } from "react";
import React from "react";
import { Close } from "@mui/icons-material";
import ToastMessage from "../templates/ToastMessage";
import { ToastMsg } from "../templates/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { APP_ACTIONS } from "../../store/actions/AppActions";
import { useNavigate } from "react-router-dom";
import { CLIENT_ACTIONS } from "../../store/actions/ClientActions";


interface PopupProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    ToastOpen: boolean;
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateApp = (props: PopupProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState<AppsInterface>({ name: "", type: "" }); //FormInputs
    const [Toast, setToast] = useState<ToastMsg>({
        open: false,
        msgType: "success",
        content: "",
        time: 0,
    }); //ToastMsg
    const [AppType, setAppType] = useState("");

    // const AppData: AppsInterface[] = useGetAppData();
    const AppData:AppsInterface[] = (useSelector((state:any)=>state.apps))

    const ClickCreate = () => {
        let present: AppsInterface | undefined = AppData.find((data) => {    // app name is already present
            return data.name === input.name ? true : false;
        });

        let failure: boolean = input.type === "" || input.name === "";       // all inputs empty
        console.log(input);

        if (failure) {
            setToast({
                open: true,
                msgType: "error",
                content: "Please provide input",
                time: 10000,
            });
        } else if (present !== undefined) {
            setToast({
                open: true,
                msgType: "warning",
                content: "The given App name already exists",
                time: 10000,
            });
        } else {
            dispatch(APP_ACTIONS.POST_APP(input));
            dispatch(CLIENT_ACTIONS.SET_CLIENTS());
            navigate(`/editApp/${AppData.length}`)
            props.setToastOpen(true);
            ClickCancel();
        }
    };


    const handleInput = (e: any) => {
        const VALUE = e.target.value;

        setInput({ ...input, name: VALUE });
    };

    const ClickCancel = () => {
        setInput({ name: "", type: "" });
        setAppType("");
        ToastClose();
        props.setOpen(false);
    };

    const ToastClose = () => {
        setToast({ ...Toast, open: false, time: 0 });
    };

    const ClickSelect = (e: any) => {
        ToastClose();
        const VALUE: string = e.target.value;
        setAppType(VALUE);
        setInput({ ...input, type: VALUE });
    };

    return (
        <Dialog
            open={props.open}
            onClose={() => {
                props.setOpen(!props.open);
                ClickCancel();
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    bgcolor: "white",
                    width: "380px",
                    height: "360px",
                    position: "relative",
                }}
            >
                <IconButton sx={{ position: "absolute", right: "10px", top: "15px" }}>
                    <Close color="action" fontSize="small" onClick={ClickCancel} />
                </IconButton>
                <DialogTitle
                    sx={{
                        disply: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "85%",
                    }}
                >
                    <Typography sx={{ typography: "title1", mr: "auto", ml: "15px" }}>
                        Create App
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        padding: "0px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mr: "auto",
                        ml: "45px",
                    }}
                >
                    <Typography variant="body2" sx={{ mr: "auto", mb: "5px" }}>
                        App Name
                    </Typography>
                    <TextField
                        variant="outlined"
                        name="name"
                        placeholder="Your App Name"
                        onChange={handleInput}
                        autoComplete="off"
                        sx={{ width: "280px" }}
                        InputProps={{ style: { fontSize: "17px" } }}
                    />
                    <Typography
                        variant="body2"
                        sx={{ mr: "auto", mt: "20px", mb: "5px" }}
                    >
                        App Type
                    </Typography>
                    <FormControl sx={{ width: "278px" }}>
                        <Select
                            value={AppType}
                            onChange={ClickSelect}
                            displayEmpty
                            renderValue={AppType === "" ? () => "Select" : () => AppType}
                        >
                            <MenuItem value={"Widgets SDK"}>Widgets SDK</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Box
                        sx={{
                            mb: "25px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            mr: "10px",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{ mr: "40px", width: "100px" }}
                            onClick={ClickCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ ml: "40px", width: "100px" }}
                            onClick={ClickCreate}
                        >
                            Create
                        </Button>
                    </Box>
                </DialogActions>
            </Box>
            <ToastMessage
                open={Toast.open}
                time={Toast.time}
                ToastClose={ToastClose}
                msgType={Toast.msgType}
                content={Toast.content}
                vertical="top"
                horizontal="right"
            />
        </Dialog>
    );
};

export default CreateApp;
