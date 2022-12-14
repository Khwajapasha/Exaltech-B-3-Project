import React from "react";
import { useSelector } from "react-redux";
import "./Navigation.css";
const Navigation = () => {
  const navSelector = useSelector((store) => store.NavigatioReducer);
  return (
    <div>
      <nav>
        {navSelector.map((item, index) => {
          return (
            <a href={item.link} target={item.target} key={index}>
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
export default Navigation;
