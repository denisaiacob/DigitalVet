import RightSide from "../filtersResult/RightSide";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";

function FavoriteList() {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        const fetchClinic = async () => {
            try {
                const response = await ClinicService.getAllClinics();
                setClinics(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClinic().then();
    }, []);

    return (
        <div className="clinic-page">
            <div style={{marginLeft:'10%'}}>
                <RightSide clinics={clinics}/>
            </div>
        </div>
    );
}

export default FavoriteList;