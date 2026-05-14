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
    <aside className="w-[200px] h-screen bg-slate-900 flex flex-col border-r border-slate-700">
      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
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

      {/* Bottom */}
      <div className="p-4 border-t border-slate-700">status here</div>
    </aside>
  );
};

export default Sidebar;
