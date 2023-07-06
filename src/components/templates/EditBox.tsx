import { Box, Typography } from "@mui/material"
import React from "react"

interface BoxProps{
    children: React.ReactNode
}

export const EditBox =({children}:BoxProps) =>{
    return(
        <Box
            sx={{
                width: "calc(100vw-80px)",
                margin: "20px 40px",
                p: "15px 0 25px 0",
                bgcolor:"white",
                borderRadius:"5px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
                {children}
        </Box>
    )
}