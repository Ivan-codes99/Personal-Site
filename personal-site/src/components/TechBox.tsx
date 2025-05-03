// components/TechBox.jsx
import React from 'react';

interface TechBoxProps {
  label: string;
}

export default function TechBox({ label }: TechBoxProps) {
  return (
    <div className="bg-cyan-950 opacity-80 rounded-lg text-center px-4 py-1 text-emerald-300 font-semibold text-shadow-md shadow-md">
      {label}
    </div>
  );
}
