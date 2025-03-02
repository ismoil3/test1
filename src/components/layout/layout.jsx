import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex bg-red-300 gap-[30px] ">
            <NavLink to={"/"} className={({isActive})=>isActive ? "text-[blue]":"text-[black]"}>
              <li>Home</li>
            </NavLink>
            
            <NavLink to={"/contact"} style={({isActive})=>isActive ? {color:"red"} :{color:"black"}}>
              <li>Contact</li>
            </NavLink>
            
            <NavLink to={"/about"} className={({isActive})=>isActive ? "text-[blue]":"text-[black]"}>
              <li>About</li>
            </NavLink>
            
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[blue] text-[white]">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
