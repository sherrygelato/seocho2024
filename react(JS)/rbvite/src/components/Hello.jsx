import { useEffect } from "react";
import { useCount } from "../hooks/count-context";

export default function Hello(props) {
  const {plusCount} = useCount(); 
  console.log("# none :: Hello.jsx");

  useEffect(() => {
    console.log("# useEffect :: Hello.jsx");
  }, []);

  return (
    <h1
      onClick={plusCount}
      style={{
        cursor: "pointer",
      }}
    >
      Hello, {props.name}!{" "}
      <small className="font-sm text-red-500">({props.age + 1})</small>
    </h1>
  );
}