import React from "react";

import { Box } from "@mui/material";
import Seat from "../Seat";

const index = ({ seats, onClick, variant = "vertical", style }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: variant === "vertical" ? "column" : "row",
                // justifyContent: "space-between",
                ...style,
            }}
        >
            {seats.map((seat) => (
                <Seat seat={seat} onClick={onClick} />
            ))}
        </Box>
    );
};

export default index;
