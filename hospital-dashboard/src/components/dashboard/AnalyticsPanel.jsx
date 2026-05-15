import analyticsData, { recentAlerts } from "../../data/analytics";
import { Camera, Calendar, TriangleAlert, Users } from "lucide-react";

const severityColor = (severity) => {
  if (severity === "High")
    return { bg: "#3b0f0f", color: "#f87171", border: "#7f1d1d" };
  if (severity === "Medium")
    return { bg: "#2d1f00", color: "#fbbf24", border: "#78350f" };
  return { bg: "#0d2b1f", color: "#34d399", border: "#065f46" };
};

const StatCard = ({ label, value, sub, icon: Icon, iconColor }) => (
  <div
    className="flex flex-col p-1 rounded"
    style={{ backgroundColor: "#0a0f1e", border: "1px solid #1e2a45" }}
  >
    <div className="flex items-center justify-between">
      <span style={{ fontSize: "9px" }} className="text-slate-400">
        {label}
      </span>
      <Icon size={10} style={{ color: iconColor }} />
    </div>
    <span className="font-semibold text-slate-100" style={{ fontSize: "12px" }}>
      {value}
    </span>
    {sub && (
      <span className="text-slate-500" style={{ fontSize: "8px" }}>
        {sub}
      </span>
    )}
  </div>
);

const AnalyticsPanel = () => {
  const d = analyticsData;

  return (
    <div className="flex flex-col" style={{ backgroundColor: "#0f1729" }}>
      <div className="flex flex-col gap-1 p-1.5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <span
            className="text-slate-200 font-semibold"
            style={{ fontSize: "10px" }}
          >
            Analytics Summary (OPD)
          </span>
          <span
            className="px-1 py-0.5 rounded"
            style={{
              backgroundColor: "#1e2a45",
              color: "#94a3b8",
              fontSize: "9px",
            }}
          >
            Today
          </span>
        </div>

        {/* 2x2 Stat cards */}
        <div className="grid grid-cols-2 gap-1">
          <StatCard
            label="Total Cameras"
            value={d.totalCameras.value}
            sub={`Online: ${d.totalCameras.online} Offline: ${d.totalCameras.offline}`}
            icon={Camera}
            iconColor="#60a5fa"
          />
          <StatCard
            label="Total Events"
            value={d.totalEvents.value}
            sub={d.totalEvents.trend}
            icon={Calendar}
            iconColor="#818cf8"
          />
          <StatCard
            label="Active Alerts"
            value={d.activeAlerts.value}
            sub={`H:${d.activeAlerts.high} M:${d.activeAlerts.medium} L:${d.activeAlerts.low}`}
            icon={TriangleAlert}
            iconColor="#f87171"
          />
          <StatCard
            label="People Count"
            value={d.peopleCount.value}
            sub={d.peopleCount.trend}
            icon={Users}
            iconColor="#a78bfa"
          />
        </div>

        {/* Recent Alerts */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span
              className="font-semibold text-slate-300"
              style={{ fontSize: "10px" }}
            >
              Recent Alerts (OPD)
            </span>
            <button
              className="text-purple-400 hover:text-purple-300"
              style={{ fontSize: "9px" }}
            >
              View All
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {recentAlerts.map((alert) => {
              const s = severityColor(alert.severity);
              return (
                <div
                  key={alert.id}
                  className="flex items-center gap-1 p-1 rounded"
                  style={{
                    backgroundColor: "#0a0f1e",
                    border: "1px solid #1e2a45",
                  }}
                >
                  <img
                    src={alert.image}
                    alt={alert.title}
                    className="rounded flex-shrink-0 object-cover"
                    style={{ width: "40px", height: "28px" }}
                  />
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-medium block truncate"
                      style={{ color: s.color, fontSize: "9px" }}
                    >
                      {alert.title}
                    </span>
                    <span
                      className="block truncate text-slate-500"
                      style={{ fontSize: "8px" }}
                    >
                      {alert.location}
                    </span>
                    <span
                      className="text-slate-600"
                      style={{ fontSize: "8px" }}
                    >
                      {alert.time}
                    </span>
                  </div>
                  <span
                    className="px-1 py-0.5 rounded flex-shrink-0"
                    style={{
                      backgroundColor: s.bg,
                      color: s.color,
                      border: `1px solid ${s.border}`,
                      fontSize: "8px",
                    }}
                  >
                    {alert.severity}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
