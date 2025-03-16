import React from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <nav>(Dashboard Navbar)</nav>
      {children}
    </div>
  );
}