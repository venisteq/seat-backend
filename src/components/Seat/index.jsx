import React from "react";
import dayjs from "dayjs";

import { Box } from "@mui/material";

const index = ({ seat, onClick, style }) => {
    const today = dayjs();
    const endDate = dayjs(seat.endDate);
    const diff = endDate.diff(today, "day");

    return (
        <Box
            sx={{
                width: "2rem",
                height: "2rem",

                cursor: "pointer",
                background: diff > 0 ? "red" : "grey",
                ...style,
            }}
            onClick={() => onClick(seat)}
        >
            {diff > 0 ? diff : ""}
        </Box>
    );
};

export default index;
