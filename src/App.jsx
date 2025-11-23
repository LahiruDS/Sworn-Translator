import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientUpload from "./pages/ClientUpload.jsx";
import TranslatorDashboard from "./pages/TranslatorDashboard.jsx";
import ClientDownload from "./pages/ClientDownload.jsx";
import React from "react";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientUpload />} />
        <Route path="/translator" element={<TranslatorDashboard />} />
        <Route path="/download" element={<ClientDownload />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}
