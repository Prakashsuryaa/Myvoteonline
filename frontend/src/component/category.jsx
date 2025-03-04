import React, { useRef } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import img4 from '../../src/images/bg.jpg';
import { FaFilePdf } from 'react-icons/fa6';
import { GrDocumentExcel } from 'react-icons/gr';
import * as XLSX from 'xlsx';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.mjs'; // No need to set workerSrc manually

const FileUpload = () => {
  const pdfInputRef = useRef(null);
  const excelInputRef = useRef(null);

  const handlePdfClick = () => {
    pdfInputRef.current.click();
  };

  const handleExcelClick = () => {
    excelInputRef.current.click();
  };

  // Helper to download JSON file
  const downloadJSON = (jsonData, fileName) => {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    console.log(`✅ JSON File Downloaded: ${fileName}`);
  };

  const handleExcelFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
        console.log('Excel JSON Data:', jsonData);
        downloadJSON(jsonData, 'excel_output.json');
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="flex flex-1 items-center justify-center p-4"
        style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
            Upload File
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex justify-around">
            <button
              onClick={handlePdfClick}
              className="px-6 py-8 rounded-md text-red-500 font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <FaFilePdf size={50} className="ml-4" />
              <span className="block mt-2 text-sm">Upload PDF</span>
            </button>
            <button
              onClick={handleExcelClick}
              className="px-6 py-8 rounded-md text-green-500 font-semibold transition-transform duration-300 transform hover:scale-105 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <GrDocumentExcel size={50} className="ml-4" />
              <span className="block mt-2 text-sm">Upload Excel</span>
            </button>
          </div>
          {/* Hidden file inputs */}
          <input
            type="file"
            accept=".pdf"
            ref={pdfInputRef}
          
            className="hidden"
          />
          <input
            type="file"
            accept=".xls,.xlsx"
            ref={excelInputRef}
            onChange={handleExcelFileChange}
            className="hidden"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileUpload;