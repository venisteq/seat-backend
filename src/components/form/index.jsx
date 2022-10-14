import React from "react";

import { Box, TextField, Button } from "@mui/material";

import formImage from "../../assets/form.jpg";

import * as styles from "./styles";

const index = ({ data, onClose, onChange, onSubmit }) => {
    return (
        <Box sx={{ ...styles.bookingForm, background: `url(${formImage})` }}>
            <Box sx={styles.container}>
                <Box>
                    <Box sx={styles.bookingCol}>
                        <Box>
                            <TextField
                                type=""
                                value={data.studentName}
                                id="fname"
                                name="studentName"
                                placeholder="Student Name"
                                onChange={onChange}
                                required
                            />
                        </Box>
                        <Box>
                            <TextField
                                type="tel"
                                id="phone"
                                value={data.studentNumber}
                                name="studentNumber"
                                placeholder="Student Number"
                                pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
                                required
                                onChange={onChange}
                            />
                            <Box sx="Field_guardian">
                                <TextField
                                    onChange={onChange}
                                    type="text"
                                    id="lname"
                                    value={data.guardianName}
                                    name="guardianName"
                                    placeholder="Guardian Name"
                                />
                            </Box>
                            <Box sx="Field_guardian">
                                <TextField
                                    onChange={onChange}
                                    type="tel"
                                    id="phone"
                                    name="guardianNumber"
                                    placeholder="Guardian Number"
                                    value={data.guardianNumber}
                                    pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
                                    required
                                />
                            </Box>
                            <Box sx="Field_days">
                                <select
                                    id="days_left"
                                    name="daysLeft"
                                    placeholder="Days left"
                                    required
                                    value={data.daysLeft}
                                    onChange={onChange}
                                >
                                    <option value="0">Days Left</option>
                                    <option value="10">10 Days</option>
                                    <option value="15">15 Days</option>
                                    <option value="15">20 Days</option>
                                    <option value="25">25 Days</option>
                                    <option value="30">30 Days</option>
                                </select>
                            </Box>
                            <Box sx="photo-upload">
                                <div>Photo</div>
                                <input
                                    type="file"
                                    name="photo"
                                    id="image"
                                    // sx="upload-box"
                                    placeholder="Upload File"
                                    value={data.photo.value}
                                    onChange={onChange}
                                />
                                {/* {data.photo && (
                                    <img
                                        src={
                                            URL.createObjectURL(data.photo) ||
                                            ""
                                        }
                                        alt="photohere"
                                    />
                                )} */}
                            </Box>
                            <Box sx={styles.buttons}>
                                <Button
                                    variant="outlined"
                                    value="Cancel"
                                    onClick={onClose}
                                >
                                    Cancel{" "}
                                </Button>
                                <Button
                                    variant="contained"
                                    value="Book Seat"
                                    onClick={onSubmit}
                                >
                                    Book Seat{" "}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default index;
