import { Box, Button, Divider, Typography } from "@mui/material";
import AppBox from "./AppBox";
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
                <Typography sx={{ ml: "40px", mt:"20px",fontFamily:"'Noto Sans SC', sans-serif", typography:"title5", letterSpacing:"1px"}}>
                    Hello Utility
                </Typography>
                <Button
                    variant="contained"
                    sx={{ width: "150px", ml: "auto", mr: "30px", mt:"20px" }}
                    onClick={handlePopup}
                >
                    Create App
                </Button>
            </Box>
            <AppBox/>
            <CreateApp open={open} setOpen={setOpen} />
        </>
    );
};

export default Dashboard;
