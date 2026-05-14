import React, { useState } from "react";
import {
  MonitorCheck,
  ShieldCheck,
  Monitor,
  HeartPulse,
  Baby,
  Car,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const roles = [
  { label: "Control Room", sub: "All Areas Access", icon: MonitorCheck },
  { label: "Security Officer", sub: "All Areas Access", icon: ShieldCheck },
  { label: "OPS Incharge", sub: "OPD", icon: Monitor },
  { label: "ICU Incharge", sub: "ICU & Critical Care", icon: HeartPulse },
  { label: "Paeds Supervisor", sub: "Pediatrics Area", icon: Baby },
  { label: "Parking Incharge", sub: "Parking Areas", icon: Car },
];

const RolesTab = () => {
  const [activeRole, setActiveRole] = useState("OPS Incharge");

  return (
    <div className="p-3" style={{ backgroundColor: "#0f1729" }}>
      {/* Title */}
      <p className="text-slate-400 text-xs mb-3 px-1">
        Role Based View – Appointment / Responsibility Wise Access
      </p>

      {/* Row */}
      <div className="flex items-center gap-2">
        {/* Left arrow */}
        <button className="text-slate-500 hover:text-white flex-shrink-0">
          <ChevronLeft size={18} />
        </button>

        {/* Cards */}
        <div className="flex gap-2 flex-1">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = activeRole === role.label;

            return (
              <div
                key={role.label}
                onClick={() => setActiveRole(role.label)}
                className="relative flex items-center gap-3 p-3 rounded-lg cursor-pointer flex-1 min-h-[72px] transition-all duration-150"
                style={{
                  border: isActive ? "1px solid #7c3aed" : "1px solid #1e2a45",
                  backgroundColor: isActive
                    ? "rgba(109, 40, 217, 0.15)"
                    : "#111827",
                }}
              >
                {/* Checkmark top right — only on active */}
                {isActive && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle size={14} className="text-purple-400" />
                  </div>
                )}

                {/* Icon */}
                <div
                  className="p-2 rounded-md flex-shrink-0"
                  style={{ backgroundColor: "#1e2a45" }}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-purple-400" : "text-slate-400"}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-semibold text-xs leading-tight uppercase tracking-wide"
                    style={{ color: isActive ? "#a78bfa" : "#94a3b8" }}
                  >
                    {role.label}
                  </h3>
                  <p className="text-xs mt-0.5 text-slate-500">{role.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button className="text-slate-500 hover:text-white flex-shrink-0">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RolesTab;
