const analyticsData = {
  totalCameras: { value: 12, online: 11, offline: 1 },
  totalEvents: { value: 56, trend: "+18% vs yesterday" },
  activeAlerts: { value: 8, high: 3, medium: 3, low: 2 },
  peopleCount: { value: 482, trend: "+12% vs yesterday" },
};

export const recentAlerts = [
  {
    id: 1,
    title: "Crowd Density High",
    location: "OPD Waiting Area - CAM 02",
    time: "10:22:10 AM",
    severity: "Medium",
    image:
      "https://thumbs.dreamstime.com/b/man-communicating-female-receptionist-senior-men-women-sitting-background-36371919.jpg",
  },
  {
    id: 2,
    title: "Unauthorized Entry",
    location: "OPD Corridor - CAM 03",
    time: "10:20:45 AM",
    severity: "High",
    image:
      "https://www.shutterstock.com/image-photo/high-angle-cctv-shot-busy-260nw-2557673779.jpg",
  },
  {
    id: 3,
    title: "Mobile Phone Usage",
    location: "OPD Waiting Area - CAM 02",
    time: "10:19:03 AM",
    severity: "Low",
    image:
      "https://www.shutterstock.com/shutterstock/videos/3840898585/thumb/1.jpg?ip=x480",
  },
];

export default analyticsData;
