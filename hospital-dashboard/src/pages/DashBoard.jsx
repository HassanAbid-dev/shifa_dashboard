import React from "react";
import RolesTab from "../components/dashboard/RolesTab";
import CameraGrid from "../components/dashboard/CameraGrid";
import ZonesTab from "../components/dashboard/ZonesTab";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import ScenarioTable from "../components/dashboard/ScenarioTable";

/*
  Layout strategy by breakpoint:
  
  mobile  (< 768px):  single column, no zones, no analytics, roles scroll horizontally
  tablet  (768-1024): camera grid full width, no zones, analytics below camera grid
  laptop  (1024-1280): 3 col: zones(160px) + camera + analytics(280px)
  desktop (> 1280px):  3 col: zones(200px) + camera + analytics(340px)
*/

const Dashboard = () => {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ backgroundColor: "#080f1e" }}
    >
      {/* RolesTab — always visible, scrolls horizontally on mobile */}
      <div className="flex-shrink-0">
        <RolesTab />
      </div>

      {/* 
        DESKTOP / LAPTOP (lg+): 3-column fixed layout 
        MOBILE / TABLET (< lg): stacked scrollable layout
      */}

      {/* lg+ : 3 column row that fills remaining height */}
      <div
        className="hidden lg:flex min-h-0 flex-1"
        style={{ borderBottom: "1px solid #1e2a45" }}
      >
        {/* LEFT — Zone panel */}
        <div className="w-[160px] xl:w-[200px] flex-shrink-0 overflow-y-auto hide-scrollbar">
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
          className="w-[280px] xl:w-[320px] 2xl:w-[360px] flex-shrink-0 overflow-y-auto hide-scrollbar"
          style={{
            backgroundColor: "#0f1729",
            borderLeft: "1px solid #1e2a45",
          }}
        >
          <AnalyticsPanel />
        </div>
      </div>

      {/* mobile/tablet (< lg): stacked scrollable */}
      <div className="flex lg:hidden flex-col flex-1 overflow-y-auto hide-scrollbar">
        {/* Camera grid — full width */}
        <div className="p-2" style={{ backgroundColor: "#080f1e" }}>
          <CameraGrid />
        </div>

        {/* Analytics — below camera on tablet, hidden on mobile */}
        <div
          className="hidden md:block p-2"
          style={{ backgroundColor: "#0f1729", borderTop: "1px solid #1e2a45" }}
        >
          <AnalyticsPanel />
        </div>

        {/* Zones — below analytics on tablet */}
        <div
          className="hidden md:block"
          style={{ borderTop: "1px solid #1e2a45" }}
        >
          <ZonesTab />
        </div>

        {/* Scenario table */}
        <div style={{ borderTop: "1px solid #1e2a45" }}>
          <ScenarioTable />
        </div>
      </div>

      {/* Scenario table — desktop only (lg+) */}
      <div className="hidden lg:block flex-shrink-0">
        <ScenarioTable />
      </div>
    </div>
  );
};

export default Dashboard;
