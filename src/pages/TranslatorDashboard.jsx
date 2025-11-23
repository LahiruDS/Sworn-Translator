import axios from "axios";
import { useEffect, useState } from "react";

export default function TranslatorDashboard() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/translator/docs").then(res => {
      setDocs(res.data);
    });
  }, []);

  return (
    <div className="p-6 min-h-96">
      <h2 className="text-2xl font-bold mb-4">Translator Dashboard</h2>
      <div className="grid gap-4">
        {docs.map(doc => (
          <div key={doc._id} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">{doc.originalName}</h3>
            <a
              href={`http://localhost:5000/uploads/${doc.filePath}`}
              className="text-blue-600 underline"
            >
              Download original
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
