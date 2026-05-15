import cameras from "../../data/camera";
import CameraCard from "./CameraCard";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CameraGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <div className="flex flex-col p-2" style={{ backgroundColor: "#080f1e" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-slate-200 text-sm font-semibold">
          Live Cameras – OPD Areas
        </h2>
        <span className="text-xs text-slate-400">{cameras.length} Cameras</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {cameras.map((cam) => (
          <CameraCard key={cam.id} camera={cam} />
        ))}
      </div>

      {/* Pagination bar */}
      <div className="flex items-center justify-between mt-3 px-1">
        {/* Left text */}
        <span className="text-xs text-slate-400">
          Showing 1 to {cameras.length} of 12 cameras
        </span>

        {/* Page buttons */}
        <div className="flex items-center gap-1">
          {/* Page number buttons */}
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="w-7 h-7 rounded text-xs font-medium transition-all"
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

          {/* Prev arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-7 h-7 rounded flex items-center justify-center transition-all"
            style={{ border: "1px solid #1e2a45", color: "#64748b" }}
          >
            <ChevronLeft size={14} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="w-7 h-7 rounded flex items-center justify-center transition-all"
            style={{ border: "1px solid #1e2a45", color: "#64748b" }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraGrid;
