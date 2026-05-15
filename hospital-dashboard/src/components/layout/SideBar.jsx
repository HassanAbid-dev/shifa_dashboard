import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  Camera,
  Map,
  CalendarCheck,
  CalendarClock,
  CalendarDaysIcon,
  Bell,
  BarChart2,
  FileText,
  MapPin,
  Users,
  Car,
  Search,
  Settings,
  Cog,
  User,
  ScrollText,
  Circle,
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

const Sidebar = () => {
  return (
    <aside className="w-[200px] h-full bg-slate-900 flex flex-col border-r border-slate-700">
      {/* Nav Links */}
      <nav className="flex-1  p-2 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                isActive
                  ? "bg-slate-800 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800"
              }`
            }
          >
            <item.icon size={16} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col">
        <div className="p-3 border-t border-slate-700 flex flex-col gap-1 mx-2">
          <div className="flex items-center gap-2">
            <Settings size={14} className="text-green-400" />
            <span className="text-xs text-slate-400">System Status</span>
          </div>
          <span className="text-xs text-green-400 font-medium pl-5">
            All Systems Operational
          </span>
        </div>
        <div className="p-2 border-t border-slate-700 mx-2">
          <span className="text-slate-600 mb-2" style={{ fontSize: "9px" }}>
            © 2026 Nexer Technology Solutions
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
