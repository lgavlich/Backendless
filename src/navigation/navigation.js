import React from "react";
import { NavLink } from "react-router-dom";
import tabs from "../mocData/tabs.json";

const setActive = ({ isActive }) => (isActive ? "active-link" : "link");

const NavigationList = () => (
  <div className="navList">
    {tabs.map((el) => {
      return (
        <NavLink key={el.id} to={el.id} className={setActive}>
          {el.title}
        </NavLink>
      );
    })}
  </div>
);

export default NavigationList;
