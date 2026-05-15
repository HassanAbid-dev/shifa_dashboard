import React from "react";
import RolesTab from "../components/dashboard/RolesTab";
import CameraGrid from "../components/dashboard/CameraGrid";
import ZonesTab from "../components/dashboard/ZonesTab";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import ScenarioTable from "../components/dashboard/ScenarioTable";

const Dashboard = () => {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ backgroundColor: "#080f1e" }}
    >
      {/* RoleTabs */}
      <div className="flex-shrink-0">
        <RolesTab />
      </div>

      {/* Middle row */}
      <div
        className="flex min-h-0 flex-1"
        style={{ borderBottom: "1px solid #1e2a45" }}
      >
        {/* LEFT — Zone panel */}
        <div className="w-[200px] flex-shrink-0 m-1 overflow-y-auto hide-scrollbar">
          <ZonesTab />
        </div>

        {/* MIDDLE — Camera grid */}
        <div
          className="flex-1 overflow-hidden p-2"
          style={{ backgroundColor: "#080f1e" }}
        >
          <CameraGrid />
        </div>

        {/* RIGHT — Analytics */}
        <div
          className="w-[340px] flex-shrink-0 m-1 overflow-y-auto hide-scrollbar"
          style={{
            backgroundColor: "#0f1729",
            borderLeft: "1px solid #1e2a45",
          }}
        >
          <AnalyticsPanel />
        </div>
      </div>

      {/* BOTTOM — Scenario table */}
      <div className="flex-shrink-0">
        <ScenarioTable />
      </div>
    </div>
  );
};

export default Dashboard;
