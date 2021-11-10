import React from "react";
import EditorialImages from "./images";
import Awards from "./Awards";

const Editorial = () => {
    return (
        <div className="Editorial-container">
            <div className="Editorial-subContainer">
                <Awards/>
                <EditorialImages/>
            </div>
        </div>
    )
}

export default Editorial;