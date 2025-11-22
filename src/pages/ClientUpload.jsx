import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ClientUpload() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Create object URL for preview and clean up when file changes/unmounts
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => {
      // revoke to avoid memory leaks
      URL.revokeObjectURL(url);
    };
  }, [file]);

  async function upload() {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post("http://localhost:5000/api/client/upload", formData);
      alert("Uploaded!");
      // Optionally clear after upload
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed. See console for details.");
    }
  }

  function clearFile() {
    setFile(null);
  }

  // Helper to format size
  function formatBytes(bytes) {
    if (!bytes) return "0 B";
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
  }

  // Render preview depending on MIME type
  function renderPreview() {
    if (!file || !previewUrl) return null;

    const type = file.type || "";

    if (type.startsWith("image/")) {
      return (
        <img src={previewUrl} alt={file.name} className="max-w-full max-h-96 rounded shadow mb-4" />
      );
    }

    if (type === "application/pdf") {
      return (
        <div className="mb-4">
          <iframe
            title="pdf-preview"
            src={previewUrl}
            className="w-full h-96 border rounded"
          />
        </div>
      );
    }

    // Fallback: show filename, size and a download link
    return (
      <div className="p-4 mb-4 border rounded bg-gray-50">
        <p className="font-medium">{file.name}</p>
        <p className="text-sm text-gray-600">{formatBytes(file.size)}</p>
        <a
          href={previewUrl}
          download={file.name}
          className="text-blue-600 underline mt-2 inline-block"
        >
          Download / Open
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Upload Your Document</h2>

      <div className="mb-4">
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
          }}
          className="mb-2"
        />
        {file && (
          <div className="flex items-center gap-2">
            <button onClick={upload} className="px-4 py-2 bg-blue-600 text-white rounded">
              Upload
            </button>
            <button onClick={clearFile} className="px-3 py-2 border rounded">
              Remove
            </button>
            <div className="ml-auto text-sm text-gray-600">{file.name} — {formatBytes(file.size)}</div>
          </div>
        )}
      </div>

      {/* Preview area */}
      {renderPreview()}
    </div>
  );
}
