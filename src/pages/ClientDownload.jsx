import axios from "axios";
import { useEffect, useState } from "react";

export default function ClientDownload() {
  const [docs, setDocs] = useState([]);

  return (
    <div className="p-6 min-h-96">
      <h2 className="text-2xl font-bold mb-4">Your Final Certified Documents</h2>
      <div className="grid gap-4">          
      </div>
    </div>
  );
}
