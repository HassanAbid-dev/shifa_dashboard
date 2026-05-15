// src/data/zones.js
const zones = [
  {
    label: "OPD Department",
    count: 9,
    subZones: [
      { label: "OPD Registration", count: 3 },
      { label: "OPD Waiting Area", count: 4 },
      { label: "OPD Consultation Rooms", count: 2 },
    ],
  },
  {
    label: "Emergency",
    count: 14,
    subZones: [],
  },
  {
    label: "ICU & Critical Care",
    count: 18,
    subZones: [],
  },
  {
    label: "Laboratory",
    count: 9,
    subZones: [],
  },
  {
    label: "Pediatrics",
    count: 11,
    subZones: [],
  },
];

export default zones;
