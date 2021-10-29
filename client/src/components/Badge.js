import React from "react";

export default function Badge({ count }) {
  return <span className="badge">{count < 100 ? count : "99+"}</span>;
}
