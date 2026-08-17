export const STATUS_KEYS = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  UNDER_REVIEW: "UNDER_REVIEW",
  RESOLVED_BY_AUTHORITY: "RESOLVED_BY_AUTHORITY",
  CLOSED: "CLOSED",
  REOPENED: "REOPENED",
  REJECTED: "REJECTED"
};

export const CATEGORY_OPTIONS = [
  { value: "GARBAGE", label: "Garbage / Waste Collection" },
  { value: "STREETLIGHT", label: "Street Light Outage" },
  { value: "POTHOLE", label: "Pothole / Road Damage" },
  { value: "WATER_LEAKAGE", label: "Water Leakage" },
  { value: "DRAINAGE", label: "Drainage Overflow" },
  { value: "OTHER", label: "Other Issue" },
];

export const STATUS_OPTIONS_ADMIN = [
  { value: "PENDING", label: "Pending" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "RESOLVED_BY_AUTHORITY", label: "Resolved by Authority" },
];
