import React from "react";
import logo from "../../assets/logo.png";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header h-16 flex gap-2 py-1 px-3 bg-slate-950 text-slate-100 justify-between items-center text-sm ">
        <div className="logo flex items-center gap-2 text-sm">
          <img
            className="rounded-md logo w-8 h-8 rounded-md"
            src={logo}
            alt="Hospital Logo"
          />
          <div className="flex flex-col ">
            <Link to="/" className="hover:cursor-pointer ">
              Shifa International
            </Link>
            <p>Hospital</p>
          </div>
        </div>
        <div className="title">
          <p>AI Video Analytics System</p>
          <p className=" text-xs text-slate-400">
            Smart Surveillance. Safer Hospital.
          </p>
        </div>
        <div className="currentRole ">
          <select
            className="currentRole outline-none bg-slate-950 hover:cursor-pointer"
            name="currentRole"
            id="currentRole"
          >
            <option>Admin</option>
            <option>Doctor</option>
            <option>Nurse</option>
          </select>
        </div>
        <div className="relative notification rounded-full bg-slate-900 p-2 hover:cursor-pointer">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>
        <div className="w-px h-6 bg-slate-700" />
        <div className="clock hover:cursor-pointer">
          <div className="time">
            <span>10:30:30 AM</span>
          </div>
          <div className="flex gap-2">
            <div className="day">Tuesday</div>
            <div className="date">29,April,2026</div>
          </div>
        </div>
        <div className="w-px h-6 bg-slate-700 " />
        <div className="superRole hover:cursor-pointer">
          <p>Admin</p>
          <span>Super Administrator</span>
        </div>
      </div>
    </>
  );
};

export default Header;
