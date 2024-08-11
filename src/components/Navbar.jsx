import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded>
      <Link to="/" className="inline-block max-w-[40px] md:max-w-[60px]">
        <img src="/logo.png" alt="logo" />
      </Link>
      <NavbarToggle />
      <NavbarCollapse>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-blue-300 px-6 py-3 rounded-xl" : "px-6 py-3"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-blue-300 px-6 py-3 rounded-xl" : "px-6 py-3"
          }
          to="/task1"
        >
          Task-1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-blue-300 px-6 py-3 rounded-xl" : "px-6 py-3"
          }
          to="/task2"
        >
          Task-2
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComponent;
