import { Box, Button, Typography } from "@mui/material";
import AppBox from "./AppBox";
import { useState } from "react";
import CreateApp from "./CreateApp";
import ToastMessage from "../templates/ToastMessage";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [ToastOpen, setToast] = useState(false);
    function handlePopup() {
        setOpen(true);
    }

    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "70px",
                    bgcolor: "#edede8",
                    position: "absolute",
                    top: "70px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="contained"
                    sx={{ width: {xs:"120px",md:"150px"}, ml: "auto", mr: "30px", mt: "20px" }}
                    onClick={handlePopup}
                >
                    Create App
                </Button>
            </Box>
            <AppBox />
            <CreateApp
                open={open}
                setOpen={setOpen}
                ToastOpen={ToastOpen}
                setToastOpen={setToast}
            />
            <ToastMessage
                open={ToastOpen}
                time={5000}
                ToastClose={() => {
                    setToast(false);
                }}
                msgType="success"
                content="Successfully created the app"
                vertical="top"
                horizontal="right"
            />
        </>
    );
};

export default Dashboard;
