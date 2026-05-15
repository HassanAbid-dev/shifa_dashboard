import React from "react";
import RolesTab from "../components/dashboard/RolesTab";
import CameraGrid from "../components/dashboard/CameraGrid";
import ZonesTab from "../components/dashboard/ZonesTab";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";

const Dashboard = () => {
  return (
    <div
      className="flex flex-col h-full  overflow-y-auto"
      style={{ backgroundColor: "#080f1e" }}
    >
      {/* RoleTabs */}
      <RolesTab />

      <div
        className="flex items-start"
        style={{ borderBottom: "1px solid #1e2a45" }}
      >
        {/* LEFT — Zone panel */}
        <div className="w-[220px] flex-shrink-0 p-2 ">
          <ZonesTab />
        </div>

        {/* MIDDLE — Camera grid */}
        <div className="flex-1 p-3" style={{ backgroundColor: "#080f1e" }}>
          <CameraGrid />
        </div>

        {/* RIGHT — Analytics */}
        <div
          className="w-[420px] flex-shrink-0 p-3 mr-2 rounded-md mb-2"
          style={{
            backgroundColor: "#0f1729",
            borderLeft: "1px solid #1e2a45",
          }}
        >
          <AnalyticsPanel />
        </div>
      </div>

      {/* BOTTOM — Scenario table sits below all 3 columns */}
      <div className="p-3">Scenario Table coming soon</div>
    </div>
  );
};

export default Dashboard;
