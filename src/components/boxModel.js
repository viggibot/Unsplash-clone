import React, {useState, useEffect} from "react";
import "./box.css"; 
import {AiOutlineClose} from "react-icons/ai";
import { AiFillHeart,AiOutlinePlus, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';

const BoxModel = ({Author, ImageUrl, isTrue, closePopup, data, dataLen, showIndex}) => {

    const [newAuthor, setAuthor] = useState("Author");
    const [newImageUrl, setImageUrl] = useState("Image");
    const [count, setCount] = useState(null);



    useEffect((data) => {
        setAuthor(Author);
        setImageUrl(ImageUrl);
        setCount(showIndex + 1);
    }, [isTrue])

    const ImgUp = () => {
        if(count === 0)
        {
            setCount(0);
        }
        else{
            setCount(count - 1);
            setAuthor(data[count].author);
            setImageUrl(data[count].download_url);
        }
    }

    
    const ImgDown = () => {

        if(count === dataLen)
        {
            setCount(dataLen - 1);
        }
        else{
            setCount(count + 1);
            setAuthor(data[count].author);
            setImageUrl(data[count].download_url);
        }  
    }

    return (
        <div className="modal" style={isTrue ? {display:"block"} : {display:"none"}}>
            <AiOutlineClose onClick={() => closePopup(false)} size={40} className="icon "/>
            <div className="innerModel">
                <AiOutlineLeft onClick={ImgUp}  size={40} className="icon left"/>
                <div className="modalContent">
                
                    <div className="topModel">
                        <p>{newAuthor}</p>
                        <div className="btnModel">
                            <div className="innerBtnModel">
                                <button><AiFillHeart/></button>
                                <button><AiOutlinePlus/></button>
                                <button><FiDownload/>Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="centerModel">
                        <img src={newImageUrl} alt={newAuthor} width="300px"/>
                    </div>      
                </div>
                <AiOutlineRight onClick={ImgDown} size={40} className="icon right"/>
            </div>
        </div>
    )
}

export default BoxModel;



