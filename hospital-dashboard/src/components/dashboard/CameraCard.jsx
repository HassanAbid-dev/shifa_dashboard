import { useState } from "react";
import { Star, Users } from "lucide-react";

const CameraCard = ({ camera }) => {
  const [starred, setStarred] = useState(false);

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden"
      style={{ border: "1px solid #1e2a45", backgroundColor: "#0a0f1e" }}
    >
      {/* Top bar — name + people count */}
      <div
        className="flex items-center justify-between px-2 py-1"
        style={{ backgroundColor: "#0f1729" }}
      >
        {/* Green live dot + camera name */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-xs text-slate-300 truncate">{camera.name}</span>
        </div>

        {/* People count */}
        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
          <Users size={11} className="text-slate-400" />
          <span className="text-xs text-slate-400">{camera.people}</span>
        </div>
      </div>

      {/* Camera image */}
      <div className="relative">
        <img
          src={camera.image}
          alt={camera.name}
          className="w-full object-cover"
          style={{ height: "100px" }}
        />

        {/* Bottom overlay — timestamp + star */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-1"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          <span className="text-xs text-slate-300">{camera.time}</span>
          <button onClick={() => setStarred(!starred)}>
            <Star
              size={14}
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
