import React, {createContext} from "react";
import Banner from './components/banner';
import Navbar from './components/navbar';
import Editorial from "./components/Editorial/Editorial";
import BoxModel from './components/boxModel';
import { useState } from "react";

export const Fun = createContext();

function App() {

  const [Author, setAuthor] = useState(null);
  const  [ImageUrl, setImageUrl] = useState(null);
  const [isTrue, setTrue] = useState(false);

  const [newList, setlist] = useState(null);
  
  const [dataLen, setLen] = useState(null);

  const [showIndex, setIndex] = useState(null);

  const Popup = (e, data, dataLen) =>{
    setAuthor(e.target.textContent);
    setImageUrl(e.target.nextSibling.src);
    setlist(data);
    setTrue(true);
    setLen(dataLen);

    const index = data.findIndex((element) => {
      if (element.author === e.target.textContent) {
          return true;
      }
    });

    setIndex(index);
  }

  const closePopup = (bool) => {
    setTrue(bool)
  }


  return (
    <div>
      <BoxModel Author={Author} ImageUrl={ImageUrl} isTrue={isTrue} closePopup={closePopup} data={newList} dataLen={dataLen} showIndex={showIndex}/>
      <Fun.Provider value={Popup}>
        <Navbar/>
        <Banner/>
        <Editorial/>
      </Fun.Provider>
    </div>
  );
}

export default App;
