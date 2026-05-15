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
    <div className="px-2 md:px-3 py-1.5">
      {/* Title — hidden on smallest screens */}
      <p className="hidden sm:block text-slate-400 text-xs mb-1.5 px-1">
        Role Based View – Appointment / Responsibility Wise Access
      </p>

      <div className="flex items-center gap-1 md:gap-2">
        <button className="text-slate-500 hover:text-white flex-shrink-0">
          <ChevronLeft size={14} />
        </button>

        {/*
          Mobile: horizontally scrollable, each card fixed width
          Desktop: flex-1 cards that fill the row
        */}
        <div className="flex gap-1.5 md:gap-2 flex-1 overflow-x-auto hide-scrollbar md:overflow-x-visible">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = activeRole === role.label;
            return (
              <div
                key={role.label}
                onClick={() => setActiveRole(role.label)}
                className="relative flex items-center gap-1.5 md:gap-2 px-2 py-1.5 rounded-lg cursor-pointer flex-shrink-0 md:flex-1 transition-all duration-150"
                style={{
                  border: isActive ? "1px solid #7c3aed" : "1px solid #1e2a45",
                  backgroundColor: isActive
                    ? "rgba(109,40,217,0.15)"
                    : "#111827",
                  minHeight: "48px",
                  minWidth: "120px", // ensures cards don't collapse on mobile
                }}
              >
                {isActive && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle size={10} className="text-purple-400" />
                  </div>
                )}
                <div
                  className="p-1 md:p-1.5 rounded-md flex-shrink-0"
                  style={{ backgroundColor: "#1e2a45" }}
                >
                  <Icon
                    size={14}
                    className={isActive ? "text-purple-400" : "text-slate-400"}
                  />
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-semibold leading-tight uppercase tracking-wide truncate"
                    style={{
                      color: isActive ? "#a78bfa" : "#94a3b8",
                      fontSize: "9px",
                    }}
                  >
                    {role.label}
                  </h3>
                  <p
                    className="text-slate-500 mt-0.5 truncate"
                    style={{ fontSize: "8px" }}
                  >
                    {role.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="text-slate-500 hover:text-white flex-shrink-0">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RolesTab;
