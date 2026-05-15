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
    </aside>
  );
};

export default Sidebar;
