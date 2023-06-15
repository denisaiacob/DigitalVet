import page from "../../images/unauthorized.png";
import {Typography} from "@mui/material";

function Unauthorized() {

    return (
        <div className="clinic-page">
            <Typography
                fontWeight='bold'
                sx={{margin: 8}}
            >
                Nu ai acces la această pagină!
            </Typography>
            <img style={{width: '20%'}} src={page} alt={"You do not have access"}/>
        </div>
    )
}

export default Unauthorized