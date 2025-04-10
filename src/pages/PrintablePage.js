// PrintablePage.js
import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function PrintablePage() {
  const location = useLocation();
  const { printData } = location.state || { printData: [] };
  const [format, setFormat] = useState('image');
  const printRef = useRef();

  const handleDownload = () => {
    if (format === 'pdf') {
      generatePDF();
    } else if (format === 'image') {
      generateImage();
    } else if (format === 'excel') {
      generateExcel();
    } else {
      alert('Unsupported format');
    }
  };

  const generatePDF = () => {
    html2canvas(printRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('printable.pdf');
    });
  };

  const generateImage = () => {
    html2canvas(printRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'printable.png');
      });
    });
  };

  const generateExcel = () => {
    // Convert printData into a simple array-of-arrays for Excel
    const worksheetData = [];
    printData.forEach(item => {
      worksheetData.push([`${item.size} MM${item.bigCoil ? ' Big Coil' : ''}`]);
      item.values.forEach(val => {
        worksheetData.push([`${val.color} - ${val.value}`]);
      });
      worksheetData.push([]); // blank row for spacing
    });

    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Printable");
    XLSX.writeFile(wb, "printable.xlsx");
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="formatSelect">Choose Format: </label>
        <select
          id="formatSelect"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="image">Image</option>
          <option value="pdf">PDF</option>
          <option value="excel">Excel</option>
        </select>
        <button onClick={handleDownload} style={{ marginLeft: '10px' }}>
          Download
        </button>
      </div>

      <div ref={printRef} style={{ padding: '20px', backgroundColor: 'white' }}>
        {printData.map((entry, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <h3>
              {entry.size} {entry.bigCoil ? 'Big Coil' : ''}
            </h3>
            <ul>
              {entry.values.map((val, i) => (
                <li key={i}>
                  {val.color ? `${val.color} - ${val.value}` : val.value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrintablePage;
