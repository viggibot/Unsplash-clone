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

    const download = (e) => {
        console.log(e.target.href);
        e.preventDefault();
        fetch(e.target.href)
        .then((response) => {
            response.arrayBuffer().then(function (buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png");
              document.body.appendChild(link);
              link.click();
            });
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="modal" style={isTrue ? {display:"block"} : {display:"none"}}>
            <AiOutlineClose onClick={() => closePopup(false)} size={40} className="icon "/>
            <div className="innerModel">
                <AiOutlineLeft onClick={ImgUp}  size={40} className="icon left"/>
                <div className="modalContent">
                
                    <div className="topModel">
                        <div className="AuthorName">
                            <p>{newAuthor}</p>
                        </div>
                        <div className="btnModel">
                            <div className="innerBtnModel">
                                <button className="topNavBtn"><AiFillHeart size={20}/></button>
                                <button className="topNavBtn"><AiOutlinePlus size={20}/></button>
                                <a href={newImageUrl} target="_blank" onClick={(e) => 
                                    download(e) } download><button className="topNavBtn"><FiDownload size={20}/>Download</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="centerModel">
                        <div className="innerCenterModel">
                            <img src={newImageUrl} alt={newAuthor} width="100%"/>
                        </div>
                    </div>      
                </div>
                <AiOutlineRight onClick={ImgDown} size={40} className="icon right"/>
            </div>
        </div>
    )
}

export default BoxModel;



