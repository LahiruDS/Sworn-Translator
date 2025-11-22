import React from "react";


export default function Navbar() {
  return (
    <div className="w-full bg-gray-900 shadow p-4 flex justify-between text-white">
      <h1 className="text-xl font-bold">Sworn Translation</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:underline font-bold hover:bg-slate-500">Upload</a>
        <a href="/translator" className="hover:underline font-bold">Translator</a>
        <a href="/download" className="hover:underline font-bold">Download</a>
      </div>
    </div>
  );
}
