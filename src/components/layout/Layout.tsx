import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { menuItems } from "../../constants/sideNavData";

function Layout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const getIconStyle = (path) => {
    return isActive(path) ? { fill: "#FF5733" } : {}; // Change the color when active
  };
  return (
    <div className="flex h-screen -bg--theme-dark p-[36px] pl-0">
      {/* Sidebar */}
      <aside className="w-1/4  text-white  overflow-auto">
        <div className="logo mb-[60px] ml-[36px]">
          <img src={logo} alt="" />
        </div>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  ` flex items-center gap-3 px-4 py-2  pl-[36px] border-l-[6px]  ${
                    isActive
                      ? "  -text--highlight -border--highlight"
                      : "border-transparent  -text--text-gray"
                  } hover:-text--highlight`
                }
              >
                <img
                  src={item.icon}
                  alt={item.label}
                />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className=" main-container w-full bg-white overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
