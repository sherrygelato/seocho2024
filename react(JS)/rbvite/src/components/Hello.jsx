import { useState, useEffect, useReducer } from "react";
import { useCount } from "../hooks/count-context";
import Button from "./atoms/Button";

export default function Hello(props) {
  const {plusCount} = useCount(); 
  // console.log("# none :: Hello.jsx");

  const [ isActive, setIsActive] = useState(false);
  const [ isValid, toggleValid] = useReducer((pre) => !pre, false); // totalCalc도 가능

  useEffect(() => {
    // console.log("# useEffect :: Hello.jsx");
  }, []);

  return (
    <>
      <h1
        onClick={plusCount}
        style={{
          cursor: "pointer",
        }}
      >
        Hello, {props.name}!{" "}
        <small className="font-sm text-red-500">({props.age + 1})</small>
        <p> Active: {isActive ? "T" : "F"} -- Valid: {isValid ? "T" : "F"} </p>
      </h1>

      <Button text="isActive" onClick={() => setIsActive(!isActive)} />
      <Button text="isValid" onClick={toggleValid} />
    </>
  );
}