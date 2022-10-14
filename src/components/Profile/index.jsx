import React from "react";

import { Modal, Box, Typography, Button } from "@mui/material";

const index = ({ open, data, onClose }) => {
    return (
        <Modal open={open}>
            <Box
                sx={{
                    width: "40rem",
                    background: "white",
                    m: "auto",
                    mt: "5rem",
                    borderRadius: "2rem",
                }}
            >
                <Box
                    sx={{
                        p: "4rem",
                        "& p": {
                            mt: "1rem",
                        },
                        "& button": {
                            mt: "2rem",
                        },
                    }}
                >
                    <Typography variant="body2">
                        Student Name: {data.studentName}
                    </Typography>
                    <Typography variant="body2">
                        Student Number: {data.studentNumber}
                    </Typography>
                    <Typography variant="body2">
                        Guardian Name: {data.guardianName}
                    </Typography>
                    <Typography variant="body2">
                        Guardian Number: {data.guardianNumber}
                    </Typography>
                    <Typography variant="body2">
                        Days left: {data.endDate}
                    </Typography>
                    <Typography variant="body2">
                        Photo: need to be worked on
                    </Typography>

                    <Button onClick={onClose} variant="contained">
                        {" "}
                        close{" "}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default index;
