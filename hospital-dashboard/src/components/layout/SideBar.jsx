import { NavLink } from "react-router-dom";
import {
  X,
  Settings,
  LayoutDashboard,
  Video,
  Camera,
  Map,
  CalendarCheck,
  CalendarClock,
  BarChart2,
  FileText,
  MapPin,
  Users,
  Car,
  Search,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Live View", path: "/live-view", icon: Video },
  { label: "Cameras", path: "/cameras", icon: Camera },
  { label: "Appointments", path: "/appointments", icon: CalendarCheck },
  { label: "Locations", path: "/locations", icon: Map },
  { label: "Events", path: "/events", icon: CalendarClock },
  { label: "Reports", path: "/reports", icon: BarChart2 },
  { label: "Logs", path: "/logs", icon: FileText },
  { label: "Zones", path: "/zones", icon: MapPin },
  { label: "Users", path: "/users", icon: Users },
  { label: "Vehicles", path: "/vehicles", icon: Car },
  { label: "Search", path: "/search", icon: Search },
  { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = ({ onClose }) => {
  return (
    /*
      Mobile:  full width slide-in drawer (w-64), labels visible
      Tablet (lg):  icons + labels, w-[160px]
      Desktop (xl): icons + labels, w-[200px]
    */
    <aside className="w-64 lg:w-[160px] xl:w-[200px] h-screen bg-slate-900 flex flex-col border-r border-slate-700">
      {/* Close button — only visible on mobile drawer */}
      <div className="flex items-center justify-between px-3 py-2 lg:hidden border-b border-slate-700">
        <span className="text-xs text-slate-400 font-medium">Navigation</span>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto hide-scrollbar p-1.5 flex flex-col gap-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors ${
                isActive
                  ? "bg-slate-800 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`
            }
          >
            <item.icon size={14} className="flex-shrink-0" />
            {/* Label always visible — sidebar width controls the layout */}
            <span className="truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom status */}
      <div className="flex flex-col">
        <div className="mx-2 border-t border-slate-700" />
        <div className="p-2 flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <Settings size={12} className="text-green-400 flex-shrink-0" />
            <span className="text-xs text-slate-400 truncate">
              System Status
            </span>
          </div>
          <span className="text-xs text-green-400 font-medium pl-5 truncate">
            All Systems Operational
          </span>
        </div>
        <div className="mx-2 border-t border-slate-700" />
        <div className="p-2">
          <span
            className="text-slate-600 truncate block"
            style={{ fontSize: "9px" }}
          >
            © 2026 Nexer Technology Solutions
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
