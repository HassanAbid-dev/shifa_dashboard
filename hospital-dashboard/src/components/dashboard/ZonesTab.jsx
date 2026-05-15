import React, { useState } from "react";
import zones from "../../data/zone";
import { ChevronRight, Camera } from "lucide-react";

const ZonesTab = () => {
  const [openZone, setOpenZone] = useState("OPD Department");
  const [search, setSearch] = useState("");

  const filtered = zones.filter((z) =>
    z.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="flex flex-col border-r  border-slate-700 rounded-md"
      style={{ backgroundColor: "#0f1729", borderRight: "1px solid #1e2a45" }}
    >
      {/* Title */}
      <div className="p-3 pb-0">
        <p className="text-slate-400 text-xs mb-2">Area / Zone Selection</p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Area / Zone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-xs px-3 py-2 rounded-md outline-none"
          style={{
            backgroundColor: "#1e2a45",
            border: "1px solid #2a3a5c",
            color: "#94a3b8",
          }}
        />
      </div>

      {/* Zone list */}
      <div className="flex-1 overflow-y-auto mt-2">
        {filtered.map((zone) => {
          const isOpen = openZone === zone.label;

          return (
            <div key={zone.label}>
              {/* Zone row */}
              <div
                onClick={() => setOpenZone(isOpen ? null : zone.label)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer transition-all"
                style={{
                  backgroundColor: isOpen
                    ? "rgba(109,40,217,0.15)"
                    : "transparent",
                  borderLeft: isOpen
                    ? "2px solid #7c3aed"
                    : "2px solid transparent",
                }}
              >
                {/* Chevron */}
                <ChevronRight
                  size={14}
                  className="text-slate-500 flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />

                {/* Label */}
                <span
                  className="text-xs flex-1"
                  style={{ color: isOpen ? "#a78bfa" : "#94a3b8" }}
                >
                  {zone.label}
                </span>

                {/* Camera count badge */}
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: isOpen ? "#4c1d95" : "#1e2a45",
                    color: isOpen ? "#c4b5fd" : "#64748b",
                  }}
                >
                  {zone.count}
                </span>
              </div>

              {/* Subzones — only show when open */}
              {isOpen && zone.subZones.length > 0 && (
                <div style={{ backgroundColor: "#0a0f1e" }}>
                  {zone.subZones.map((sub) => (
                    <div
                      key={sub.label}
                      className="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:bg-slate-800 transition-all"
                    >
                      {/* Camera icon */}
                      <Camera
                        size={12}
                        className="text-slate-600 flex-shrink-0"
                      />

                      {/* Sub label */}
                      <span className="text-xs flex-1 text-slate-500">
                        {sub.label}
                      </span>

                      {/* Sub count */}
                      <span
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: "#1e2a45", color: "#64748b" }}
                      >
                        {sub.count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZonesTab;
