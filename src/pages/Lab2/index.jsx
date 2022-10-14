import React from "react";
import { Box, Stack } from "@mui/material";
import Tower from "../../components/Towers";

const index = ({ seats, onClick }) => {
    console.log("seats", seats);
    const firstRow = seats.slice(0, 13);
    const col1 = seats.slice(13, 20);
    const col2 = seats.slice(20, 27);
    const col3 = seats.slice(27, 34);
    const col4 = seats.slice(34, 41);
    const col5 = seats.slice(41, 48);
    const col6 = seats.slice(48, 55);
    const col7 = seats.slice(55, 60);
    const col8 = seats.slice(60, 65);

    const col9 = seats.slice(65, 70);
    const col10 = seats.slice(70, 75);
    const col11 = seats.slice(75, 80);
    const col12 = seats.slice(80, 84);

    return (
        <Box sx={{ m: 4 }}>
            <Tower
                seats={firstRow}
                onClick={onClick}
                variant="horizontal"
                style={{
                    width: "40rem",
                    justifyContent: "space-between",
                    ml: 4,
                }}
            />
            <Stack
                flexDirection="row"
                sx={{
                    mt: "4rem",
                    border: "1px solid",
                    width: "90%",
                    borderTop: "0",
                }}
            >
                <Tower
                    seats={col1}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />
                <Tower
                    seats={col2}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />
                <Tower
                    seats={col3}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />

                <Tower
                    seats={col4}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />
                <Tower
                    seats={col5}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />
                <Tower
                    seats={col6}
                    onClick={onClick}
                    style={{
                        height: "30rem",
                        p: "2rem",
                        justifyContent: "space-between",
                    }}
                />

                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        height: "34rem",
                    }}
                >
                    <Tower
                        seats={col7}
                        onClick={onClick}
                        style={{
                            height: "20rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col8}
                        onClick={onClick}
                        style={{
                            height: "20rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col9}
                        onClick={onClick}
                        style={{
                            height: "20rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />

                    <Tower
                        seats={col10}
                        onClick={onClick}
                        style={{
                            height: "20rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col11}
                        onClick={onClick}
                        style={{
                            height: "20rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />
                    <Tower
                        seats={col12}
                        onClick={onClick}
                        style={{
                            height: "15rem",
                            p: "2rem",
                            justifyContent: "space-between",
                        }}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default index;
