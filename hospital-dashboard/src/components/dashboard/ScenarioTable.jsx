import React, { useState } from "react";
import { scenarios, cameraAlerts } from "../../data/scenarios";

const cameras = Object.keys(cameraAlerts);

const AlertCell = ({ count }) => {
  if (count === 0) return <span className="text-slate-500">0</span>;
  const color =
    count >= 6
      ? "text-red-400"
      : count >= 3
        ? "text-orange-400"
        : "text-amber-400";
  return (
    <div className={`flex items-center justify-center gap-1 ${color}`}>
      <span>⚠️</span>
      <span>{count}</span>
    </div>
  );
};

const ScenarioTable = () => {
  const [search, setSearch] = useState("");
  const filtered = scenarios.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-3 py-1.5" style={{ backgroundColor: "#080f1e" }}>
      {/* Header */}
      <div className="flex items-center gap-5 mb-1.5">
        <p className="text-slate-300 text-xs font-medium">
          OPD Scenarios – Camera Wise Status
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Scenario..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md outline-none border border-slate-700 placeholder-slate-500"
            style={{ fontSize: "11px" }}
          />
          <button
            className="text-slate-400 border border-slate-700 px-3 py-1 rounded-md hover:bg-slate-800"
            style={{ fontSize: "11px" }}
          >
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto hide-scrollbar">
        <table
          className="w-full"
          style={{ borderCollapse: "collapse", fontSize: "11px" }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #1e2a45" }}>
              <th
                className="text-left text-slate-400 font-medium px-2 py-1"
                style={{ width: "200px", minWidth: "200px" }}
              >
                Scenario
              </th>
              {cameras.map((cam) => (
                <th
                  key={cam}
                  className="text-center text-slate-400 font-medium px-2 py-1"
                  style={{ minWidth: "80px" }}
                >
                  {cam}
                </th>
              ))}
              <th
                className="text-center text-slate-400 font-medium px-2 py-1"
                style={{ minWidth: "90px" }}
              >
                Total Alerts
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((scenario) => {
              const total = cameras.reduce(
                (sum, cam) => sum + cameraAlerts[cam][scenario.id],
                0,
              );
              return (
                <tr
                  key={scenario.id}
                  style={{ borderBottom: "1px solid #1e2a45" }}
                  className="hover:bg-slate-800/30"
                >
                  <td className="px-2 py-1 text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span>{scenario.icon}</span>
                      <span className="whitespace-nowrap">{scenario.name}</span>
                    </div>
                  </td>
                  {cameras.map((cam) => (
                    <td key={cam} className="px-2 py-1 text-center">
                      <AlertCell count={cameraAlerts[cam][scenario.id]} />
                    </td>
                  ))}
                  <td className="px-2 py-1 text-center">
                    <span
                      className={
                        total > 0
                          ? "text-orange-400 font-medium"
                          : "text-slate-500"
                      }
                    >
                      {total}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between mt-1.5"
        style={{ fontSize: "10px" }}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            No Events
          </span>
          <span className="text-amber-400">⚠️ 1-2 Low</span>
          <span className="text-orange-400">⚠️ 3-5 Medium</span>
          <span className="text-red-400">⚠️ &gt;5 High</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Total Alerts (All OPD Cameras)</span>
          <span className="bg-red-600 text-white px-2 py-0.5 rounded-full font-medium">
            {cameras.reduce(
              (sum, cam) =>
                sum +
                Object.values(cameraAlerts[cam]).reduce((a, b) => a + b, 0),
              0,
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScenarioTable;
