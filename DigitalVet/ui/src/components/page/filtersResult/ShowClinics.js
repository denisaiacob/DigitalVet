import React, {useEffect, useState} from "react";
import "../../../App.css"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide";
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";
import {useMediaQuery, useTheme} from "@mui/material";
import LeftResponsiveSide from "./LeftResponsiveSide";
import ClinicService from "../../../services/ClinicService";

function ShowClinics() {
    const theme2 = useTheme();
    const isMatch = useMediaQuery(theme2.breakpoints.down(550));
    const [clinics, setClinics] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [initialValues, setInitialValues] = useState({
        location: "",
        service: "",
        date: null,
        sort: null
    });

    useEffect(() => {
        const locationValue = queryParams.get('location');
        const serviceValue = queryParams.get('service');
        const dateValue = queryParams.get('date');

        setInitialValues({
            location: locationValue || "",
            service: serviceValue || "",
            date: dateValue!=='M' ? dayjs(dateValue) : null,
            sort: 'rating'
        });
        const fetchClinic = async () => {
            try {
                const response = await ClinicService.getAllClinics();
                setClinics(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClinic().then();
    }, []);

    return (
        <div>
            {isMatch ? (
                <div className="responsive-container">
                    <div className="right-column" style={{marginBottom: 40}}>
                        <LeftResponsiveSide initialValues={initialValues} setInitialValues={setInitialValues}/>
                        <RightSide filter={initialValues}/>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="left-column" style={{marginLeft: 40, marginBottom: 90}}>
                        <LeftSide initialValues={initialValues} setInitialValues={setInitialValues}/>
                    </div>
                    <div className="right-column" style={{marginBottom: 20}}>
                        <RightSide clinics={clinics} filter={initialValues}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowClinics;