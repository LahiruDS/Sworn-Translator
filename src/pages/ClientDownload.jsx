import axios from "axios";
import { useEffect, useState } from "react";

export default function ClientDownload() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("").then(res => {
      setDocs(res.data);
    });
  }, []);

  return (
    <div className="p-6 min-h-96">
      <h2 className="text-2xl font-bold mb-4">Your Final Certified Documents</h2>
      <div className="grid gap-4">
        {docs.map((doc) => (
          <div key={doc._id} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">{doc.finalName}</h3>
            <a
              href={""}
              className="text-green-600 underline"
            >
              Download Certified Document
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
