import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png.png";

const NavBar = () => {
  const baseClass =
    "px-3 py-1 rounded text-sm font-medium hover:bg-blue-400 transition";
  const activeClass = "bg-blue-600 text-white";

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img  src={logo} alt="Logo" className="h-12 w-12 object-contain cursor-pointer" />
        <span className="text-lg font-semibold text-indigo-700 cursor-pointer">
        BG remove App
        </span>
      </Link>

      <div className="flex items-center gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Upload
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Register
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
