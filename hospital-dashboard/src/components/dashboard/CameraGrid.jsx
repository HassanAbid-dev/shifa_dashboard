import cameras from "../../data/camera";
import CameraCard from "./CameraCard";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAMERAS_PER_PAGE = 6;

const CameraGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cameras.length / CAMERAS_PER_PAGE);
  const visible = cameras.slice(
    (currentPage - 1) * CAMERAS_PER_PAGE,
    currentPage * CAMERAS_PER_PAGE,
  );

  return (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: "#080f1e" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1.5">
        <h2 className="text-slate-200 text-xs font-semibold">
          Live Cameras – OPD Areas
        </h2>
        <span className="text-xs text-slate-400">{cameras.length} Cameras</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
        {visible.map((cam) => (
          <CameraCard key={cam.id} camera={cam} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-1.5 px-1">
        <span className="text-xs text-slate-400" style={{ fontSize: "10px" }}>
          Showing {(currentPage - 1) * CAMERAS_PER_PAGE + 1} to{" "}
          {Math.min(currentPage * CAMERAS_PER_PAGE, cameras.length)} of{" "}
          {cameras.length} cameras
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="w-6 h-6 rounded text-xs font-medium transition-all"
              style={{
                backgroundColor:
                  currentPage === page ? "#7c3aed" : "transparent",
                color: currentPage === page ? "#fff" : "#64748b",
                border: currentPage === page ? "none" : "1px solid #1e2a45",
              }}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-6 h-6 rounded flex items-center justify-center"
            style={{ border: "1px solid #1e2a45", color: "#64748b" }}
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="w-6 h-6 rounded flex items-center justify-center"
            style={{ border: "1px solid #1e2a45", color: "#64748b" }}
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraGrid;
