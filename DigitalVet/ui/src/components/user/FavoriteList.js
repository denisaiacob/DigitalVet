import RightSide from "../filtersResult/RightSide";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";
import useAuth from "../../hooks/UseAuth";

function FavoriteList() {
    const {auth} = useAuth();
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await ClinicService.getAllFavoriteByUser(auth?.user.id);
                const favorites = response.data;
                let clinicData = [];

                for (const f of favorites) {
                    const clinicResponse = await ClinicService.getClinicById(f.clinicId);
                    clinicData.push(clinicResponse.data);
                }
                setClinics(clinicData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFavorites().then();
    }, [auth?.user]);


    return (
        <div className="clinic-page">
            <div style={{marginLeft: '10%'}}>
                <RightSide clinics={clinics}/>
            </div>
        </div>
    );
}

export default FavoriteList;