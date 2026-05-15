import React from "react";
import logo from "../../assets/logo.png";
import { Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  return (
    <div className="flex gap-2 py-1 px-3 bg-slate-950 text-slate-100 justify-between items-center text-sm h-12 flex-shrink-0">
      {/* Left — Hamburger (mobile/tablet) + Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Hamburger — only on mobile/tablet */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="rounded-md w-7 h-7 flex-shrink-0"
            src={logo}
            alt="Hospital Logo"
          />
          {/* Hospital name — hidden on mobile, shown md+ */}
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-xs font-medium">Shifa International</span>
            <span className="text-xs text-slate-400">Hospital</span>
          </div>
        </Link>
      </div>

      {/* Center title — hidden below xl */}
      <div className="hidden xl:block text-center flex-shrink-0">
        <p className="text-xs font-medium">AI Video Analytics System</p>
        <p className="text-xs text-slate-400">
          Smart Surveillance. Safer Hospital.
        </p>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Role dropdown — hidden on mobile */}
        <select className="hidden sm:block outline-none bg-slate-900 text-xs hover:cursor-pointer text-slate-300 border border-slate-700 rounded px-2 py-1">
          <option>Admin</option>
          <option>Doctor</option>
          <option>Nurse</option>
        </select>

        {/* Bell */}
        <div className="relative rounded-full bg-slate-900 p-1.5 hover:cursor-pointer flex-shrink-0">
          <Bell size={16} />
          <span
            className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full flex items-center justify-center"
            style={{ fontSize: "9px", width: "14px", height: "14px" }}
          >
            2
          </span>
        </div>

        {/* Divider — hidden on mobile */}
        <div className="hidden sm:block w-px h-5 bg-slate-700 flex-shrink-0" />

        {/* Clock — hidden on mobile */}
        <div className="hidden sm:block flex-shrink-0 text-right">
          <div className="text-xs">10:30:30 AM</div>
          <div
            className="text-slate-400 flex gap-1"
            style={{ fontSize: "10px" }}
          >
            <span>Tuesday</span>
            <span className="hidden md:inline">29 April 2026</span>
          </div>
        </div>

        {/* Divider — hidden below lg */}
        <div className="hidden lg:block w-px h-5 bg-slate-700 flex-shrink-0" />

        {/* Admin — hidden on mobile */}
        <div className="hidden lg:block flex-shrink-0 text-right">
          <p className="text-xs">Admin</p>
          <span className="text-slate-400" style={{ fontSize: "10px" }}>
            Super Administrator
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
