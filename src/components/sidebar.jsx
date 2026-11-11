import {
  LayoutDashboard,
  Users,
  BookOpen,
  CalendarDays,
  CreditCard,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import "./sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">🎓</div>

        <div>
          <h2>SVU</h2>
          <span>Student Virtual University</span>
        </div>
      </div>
      <nav className="sidebar-menu">
        <p className="menu-title">MAIN</p>

        <NavLink to="/dashboard" className="sidebar-link">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </NavLink>

        <p className="menu-title">ACADEMIC</p>

        <NavLink to="/students" className="sidebar-link">
          <Users size={19} />
          <span>Students</span>
        
        </NavLink>

        <NavLink to="/subjects" className="sidebar-link">
          <BookOpen size={19} />
          <span>Subjects</span>
        </NavLink>

        <NavLink to="/exams" className="sidebar-link">
          <CalendarDays size={19} />
          <span>Exams</span>
        </NavLink>

        <NavLink to="/payments" className="sidebar-link">
          <CreditCard size={19} />
          <span>Payments</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-button" onClick={handleLogout}>
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
