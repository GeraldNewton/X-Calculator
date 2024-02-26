import "./App.css";
import { useState } from "react";
import Button from "./components/button.js";
import Calculate from "./components/calculate.js";
function App() {
  let inputarr = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  let [inputBox, setInputBox] = useState("");
  let [outputBox, setOutputBox] = useState("");

  let handleClick = (e) => {
    if (e.target.value === "C") {
      setOutputBox("");
      setInputBox("");
    } else if (e.target.value === "=") {
      if(!inputBox.length)
      {
        console.log(inputBox);
        setOutputBox("Error");
      }
      else{
        console.log("inelse");
        let res = Calculate(inputBox);
        setOutputBox(res);
      }
    } else {
      setInputBox((prev) => prev + e.target.value);
    }
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={inputBox} className="inputBox" />
      <div className="outputBox">{outputBox}</div>
      <div className="inputButtons" onClick={handleClick}>
        {inputarr.map((val) => (
          <Button key={val} Val={val} />
        ))}
      </div>
    </div>
  );
}

export default App;