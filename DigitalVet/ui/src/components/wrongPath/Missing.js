import page from "../../images/page_not_found.jpg"

function Missing() {
    return (
        <div className="clinic-page">
            <img style={{width: '100%', height: '100%'}} src={page} alt={"Page not found"}/>
        </div>
    )
}

export default Missing