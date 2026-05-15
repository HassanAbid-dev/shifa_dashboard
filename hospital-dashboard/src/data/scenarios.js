export const scenarios = [
  { id: 1, name: "Unauthorized Entry", icon: "🚫" },
  { id: 2, name: "Crowd Density / Overcrowding", icon: "👥" },
  { id: 3, name: "Mask / Safety Compliance", icon: "😷" },
  { id: 4, name: "Staff Presence / Absence", icon: "👤" },
  { id: 5, name: "Mobile Phone Usage", icon: "📱" },
  { id: 6, name: "Fire / Smoke Detection", icon: "🔥" },
];

export const cameraAlerts = {
  "CAM 01": { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0 },
  "CAM 02": { 1: 1, 2: 3, 3: 2, 4: 1, 5: 2, 6: 0 },
  "CAM 03": { 1: 2, 2: 1, 3: 0, 4: 0, 5: 1, 6: 0 },
  "CAM 04": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  "CAM 05": { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0, 6: 0 },
  "CAM 06": { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
};
