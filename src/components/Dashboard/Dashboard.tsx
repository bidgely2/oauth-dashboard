import { Box, Button, Typography } from "@mui/material";
import AppBox from "./AppBox";
import { Apps } from "../../__mock__/apis/AppInfo";
import { useState } from "react";
import CreateApp from "./CreateApp";

const Dashboard = () => {
    const [open, setOpen] = useState(false);

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
                <Typography variant="h5" sx={{ ml: "20px" }}>
                    Hello Utility
                </Typography>
                <Button
                    variant="contained"
                    sx={{ width: "150px", ml: "auto", mr: "20px" }}
                    onClick={handlePopup}
                >
                    Create App
                </Button>
            </Box>
            <AppBox data={Apps} />
            <CreateApp open={open} setOpen={setOpen} />
        </>
    );
};

export default Dashboard;
