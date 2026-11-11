 import Sidebar from "./sidebar";
 import Navbar from "./navbar";

import "./layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div >
      <Navbar/>
      <Sidebar/>
      
      <Outlet>
        <main className="App"/>
      </Outlet>
      </div>
  );
};

export default Layout;
