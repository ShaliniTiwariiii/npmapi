import React, { useEffect, useState } from "react";
import './indexPage.css'
import { AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai';

import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const [show, setShow] = useState(true);
  const [editValue, setEditValue] = useState("");
  const [favdata, setFavData] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const tonav = useNavigate();
  useEffect(() => {
    if (favdata?.length > 0) {
      setShow(false);
    }
  }, [favdata]);
  function handleEdit(id) {
    favdata.forEach((item, i) => {
      if (i === id) {
        item.edit = !item.edit;
      }
    });
    setFavData([...favdata]);
  }
  function HandleDelete(id) {
    let arr = favdata.filter((item, i) => i !== id);
    localStorage.setItem("fav", JSON.stringify([...arr]))
    setFavData([...arr]);
  }
  function handleSubmit(id) {
    favdata.forEach((item, i) => {
      if (i === id) {
        item.value = editValue;
        item.edit = false;
      }
    });
    tonav("/fav");
    setFavData([...favdata]);
    localStorage.setItem("fav", JSON.stringify([...favdata]));
  }
  return (
    <>
      {show ? (
        <>
          <button onClick={() => tonav("/")}>Add Fav </button>
        </>
      ) : (
        <>          <button onClick={() => tonav("/")}>Add Fav</button>
          {favdata?.map((item, i) => {
            return (
              <div className='table'key={i} style={{ display: "flex" }}>
                {item.value}
                 <div className='Button'>
                <button style={{width:'2rem'}} onClick={() => handleEdit(i)}><AiOutlineEdit style={{fontSize:'15px'}}/></button>
                {item.edit ? (
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={() => handleSubmit(i)}>Submit</button>
                  </>
                ) : (
                  ""
                )}
                <button style={{width:'2rem'}}  onClick={() => HandleDelete(i)}><AiOutlineDelete style={{fontSize:'15px'}}/></button>
              </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
