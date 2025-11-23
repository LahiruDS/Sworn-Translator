import React from "react";


export default function Navbar() {
  return (
    <div className="w-full bg-gray-900 shadow p-4 flex justify-between text-slate-400 items-center">
      <a href="/"><img src="ST01.png" alt="Logo" className="w-40 h-15"/></a>
      <div className="flex gap-4">
        <a href="/" className="hover:text-white font-bold">Upload</a>
        <a href="/translator" className="hover:text-white font-bold">Translator</a>
        <a href="/download" className="hover:text-white font-bold">Download</a>
      </div>
    </div>
  );
}
