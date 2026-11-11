import { Search, Menu, Sun, Bell } from "lucide-react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-search">
        <Search size={18} />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <button
          className="navbar-button"
          type="button"
          aria-label="Open menu"
          title="Open menu"
        >
          <Menu size={18} />
        </button>
        <button
          className="navbar-button"
          type="button"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          
          <Sun size={18} />
        </button>
        <button
          className="navbar-button notification"
          type="button"
          aria-label="View notifications"
          title="View notifications"
        >
          <Bell size={18} />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
