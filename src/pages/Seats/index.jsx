import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Modal } from "@mui/material";

import Form from "../../components/form";
import Profile from "../../components/Profile";
// import Seat from "../../components/Seat";

import Lab2 from "../Lab2";

import Axios from "../../utils/axios";

const Seats = () => {
    const [seats, setSeats] = useState([]);

    const [formData, setFormData] = useState({
        id: "",
        studentName: "",
        studentNumber: "",
        guardianName: "",
        guardianNumber: "",
        daysLeft: 0,
        photo: {
            data: "",
            value: "",
        },
    });

    const [displayForm, setDisplayForm] = useState(false);
    const [displayProfile, setDisplayProfile] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState({});

    useEffect(() => {
        Axios.get("/seat")
            .then((result) => {
                console.log("seat", result);
                setSeats(result.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const openSeat = (seat) => {
        console.log("seat-clicked", seat);
        const today = dayjs();
        const endDate = dayjs(seat.endDate);
        const diff = endDate.diff(today, "hours");

        if (diff <= 0) {
            // open form here
            setDisplayForm(true);
        } else {
            setDisplayProfile(true);
            setSelectedSeat(seat);
            // open profile
        }
    };

    // const renderSeats = () => {
    //     const today = dayjs();
    //     return seats.map((seat) => {
    //         const endDate = dayjs(seat.endDate);
    //         const diff = endDate.diff(today, "day");
    //         return (
    //             <Box
    //                 sx={{
    //                     ...styles.root,
    //                     background: diff > 0 ? "red" : "grey",
    //                 }}
    //                 onClick={() => {
    //                     openSeat(seat);
    //                     setFormData((prop) => ({ ...prop, id: seat._id }));
    //                 }}
    //             >
    //                 {diff > 0 ? diff : ""}
    //             </Box>
    //         );
    //     });
    // };

    const changeHandler = (e) => {
        if (e.target.name === "photo") {
            setFormData((prop) => ({
                ...prop,
                [e.target.name]: {
                    data: e.target.files[0],
                    value: e.target.value,
                },
            }));
        } else
            setFormData((prop) => ({
                ...prop,
                [e.target.name]: e.target.value,
            }));
    };

    const seatClickHandler = (seat) => {
        openSeat(seat);
        setFormData((prop) => ({ ...prop, id: seat._id }));
    };

    const submitHandler = () => {
        const formValues = new FormData();
        console.log("formdata", formData);
        Object.keys(formData).forEach((key) => {
            if (key === "daysLeft") {
                const date = dayjs().add(formData.daysLeft + 1, "day");
                formValues.append("endDate", date);
            }
            if (key === "photo") {
                formValues.append("photo", formData.photo.data);
            } else formValues.append(key, formData[key]);
        });

        Axios.put(`/seat/${formData.id}`, formValues)
            .then((result) => {
                const updatedSeatIndex = seats.findIndex(
                    (seat) => seat._id === result.data._id
                );
                const updatedSeats = seats;
                updatedSeats[updatedSeatIndex] = result.data;
                setSeats(updatedSeats);
            })
            .finally(() => setDisplayForm(false));
    };
    return (
        <>
            {/* {seats.length > 0 && (
                <Seat seat={seats[0]} onClick={seatClickHandler} />
            )} */}

            <Lab2 seats={seats} onClick={seatClickHandler} />
            <Modal open={displayForm}>
                <Form
                    onClose={() => setDisplayForm(false)}
                    onSubmit={() => {
                        submitHandler();
                    }}
                    onChange={changeHandler}
                    data={formData}
                />
            </Modal>
            <Profile
                open={displayProfile}
                onClose={() => {
                    setDisplayProfile(false);
                }}
                data={selectedSeat}
            />
        </>
    );
};

export default Seats;
