import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Summary = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(selector.FormOneReducer[0].fname);
    navigate("/");
  };
  return (
    <div>
      <h1>summary</h1>
      {selector.FormOneReducer.map((item) => {
        return (
          <div>
            <p>{item.fname}</p>
            <p>{item.mname}</p>
            <p>{item.lname}</p>
            <p>{item.fullName}</p>
          </div>
        );
      })}
      {selector.FormTwoReducer.map((item) => {
        return (
          <div>
            <p>{item.height}</p>
            <p>{item.weight}</p>
            <p>{item.chest}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
      {selector.FormThreeReducer.map((item) => {
        return (
          <div>
            <p>{item.priAdd}</p>
            <p>{item.secAdd}</p>
            <p>{item.city}</p>
            <p>{item.state}</p>
          </div>
        );
      })}
      <button onClick={handleClick}>Go To First Page</button>
    </div>
  );
};

export default Summary;
