import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("reactjs");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const tonav = useNavigate();
  useEffect(() => {
    fetch(`https://api.npms.io/v2/search?q=${search ? search : "react"}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [search]);

  function HandleFav() {
    let data = {
      value,
      text,
      edit: false
    };
    const prevdata = JSON.parse(localStorage.getItem("fav")) || [];
    const newData = [...prevdata, data];
    let z = newData.indexOf(data.value);
    console.log(z);
    if (newData.indexOf(data.value === -1)) {
      localStorage.setItem("fav", JSON.stringify(newData));
      setValue("");
      setText("");
       tonav("/fav");
    }
    return;
  }

  return (
    <div className="App">
      <div className="heading"> Search for NPM package</div>
      <input  className='input'type="search" onChange={(e) => setSearch(e.target.value)} />
      <h5>Results</h5>
      <div className="parent">
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                height: "1.57rem",
                alignItems: "center"
              }}
            >
              <span>
                <input
                  type="radio"
                  value={item.package.name}
                  onChange={(e) => setValue(e.target.value)}
                />
                {item.package.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="label">
      <label className="heading" >Why is this your favorite?</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={HandleFav}>Add fav</button>
      </div>
    </div>
  );
}

