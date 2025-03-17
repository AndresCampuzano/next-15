import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl">(root)</h1>
      {children}
    </div>
  );
}
