import { useState } from "react";
import { Star, Users } from "lucide-react";

const CameraCard = ({ camera }) => {
  const [starred, setStarred] = useState(false);

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden h-full"
      style={{ border: "1px solid #1e2a45", backgroundColor: "#0a0f1e" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{ backgroundColor: "#0f1729" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
          <span
            className="text-slate-300 truncate"
            style={{ fontSize: "10px" }}
          >
            {camera.name}
          </span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 ml-1">
          <Users size={10} className="text-slate-400" />
          <span className="text-slate-400" style={{ fontSize: "10px" }}>
            {camera.people}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1 min-h-0">
        <img
          src={camera.image}
          alt={camera.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-0.5"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <span className="text-slate-300" style={{ fontSize: "10px" }}>
            {camera.time}
          </span>
          <button onClick={() => setStarred(!starred)}>
            <Star
              size={12}
              className={starred ? "text-yellow-400" : "text-slate-400"}
              fill={starred ? "#facc15" : "none"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCard;
