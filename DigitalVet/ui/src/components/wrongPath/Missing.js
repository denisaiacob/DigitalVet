import page from "../../images/404.png"
import {Typography} from "@mui/material";

function Missing() {
    return (
        <div className="clinic-page">
            <Typography
                fontWeight='bold'
                sx={{marginTop: 8}}
            >
                Pagina nu a fost găsită
            </Typography>
            <img style={{width: '20%'}} src={page} alt={"Pagina nu a fost găsită"}/>
        </div>
    )
}

export default Missing