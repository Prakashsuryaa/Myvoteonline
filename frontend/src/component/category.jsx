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

  // Helper to download Excel file
  const downloadExcel = (jsonData, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, fileName);
    console.log(`✅ Excel File Downloaded: ${fileName}`);
  };

  const extractTextFromPDF = async (file) => {
    try {
      const reader = new FileReader();

      reader.onload = async (evt) => {
        try {
          const typedArray = new Uint8Array(evt.target.result);
          const pdf = await pdfjs.getDocument({ data: typedArray }).promise;

          console.log(`📄 PDF Loaded Successfully with ${pdf.numPages} Pages`);

          let extractedData = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const textItems = textContent.items.map((item) => item.str).join(' ');

            // Preprocess text to remove extra spaces and newlines
            const cleanedText = textItems.replace(/\s+/g, ' ').trim();

            console.log(`🔍 Extracted Text from Page ${i}:`, cleanedText);

            // Check if the cleaned text is empty
            if (!cleanedText) {
              console.warn(`❌ No text extracted from Page ${i}`);
              continue;
            }

            // ✅ Updated Regex
            const voterPattern = /नाम\s+([\s\S]+?)\nिपता\s+([\s\S]+?)\nमकान नं०\s+([\s\S]+?)\nआयु\s+(\d+)\s+(पुष|मिहला)/gu;
            let match;
            let pageData = [];
            while ((match = voterPattern.exec(cleanedText)) !== null) {
              pageData.push({
                name: match[1].trim(),
                father_name: match[2].trim(),
                house_number: match[3].trim(),
                age: parseInt(match[4], 10),
                gender: match[5].trim()
              });
            }

            if (pageData.length > 0) {
              extractedData = extractedData.concat(pageData);
            } else {
              console.warn(`❌ No voter data extracted from Page ${i}`);
            }
          }

          console.log('✅ Extracted Voter Data:', extractedData);
          if (extractedData.length > 0) {
            downloadExcel(extractedData, 'voters_list.xlsx');
          } else {
            console.error('❌ No Data Extracted. Please check the PDF format.');
          }
        } catch (error) {
          console.error('❌ Error Extracting PDF Data:', error);
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('❌ File Read Error:', error);
    }
  };

  const handlePdfFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      extractTextFromPDF(file);
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
            onChange={handlePdfFileChange}
            className="hidden"
          />
          <input
            type="file"
            accept=".xls,.xlsx"
            ref={excelInputRef}
            onChange={handlePdfFileChange} // Changed to handlePdfFileChange
            className="hidden"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileUpload;