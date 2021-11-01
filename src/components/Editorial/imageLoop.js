import React from "react";
import "./Editorial.css";

const ImageLoop = ({data}) => {
    return(
        <React.Fragment>
            <div className="image-column">
                {data.map((val) => (
                    <div className="image-inner-container" key={val.id}>
                        <img src={val.download_url} alt={val.author} width="390px"/>              
                    </div>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default ImageLoop;