// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import '../Styles/schedule.moudle.css';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
// import samplePDF from '../assets/schedule.pdf';
//
// export default function Schedule() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//
//   const onSumbitHandle = (e) => {
//     e.preventDefault();
//     const link = '../assets/schedule.pdf';
//     window.open(link, '_blank');
//   };
//
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }
//
//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//   }
//
//   function previousPage() {
//     changePage(-1);
//   }
//
//   function nextPage() {
//     changePage(1);
//   }
//
//   return (
//     <div className="container">
//       <Document
//         file={samplePDF}
//         className="docs"
//         onLoadSuccess={onDocumentLoadSuccess}
//         renderMode="canvas"
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div className="text-center customInfo">
//         <button
//           className="btn"
//           type="button"
//           disabled={pageNumber <= 1}
//           onClick={previousPage}
//         >
//           <BiLeftArrow />
//         </button>
//         <p className="m-3">
//           Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//         </p>
//         <button
//           className="btn"
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={nextPage}
//         >
//           <BiRightArrow />
//         </button>
//       </div>
//
//       <div>
//         <a
//           className="btn btn-primary text-center"
//           href="../assets/schedule.pdf"
//           download
//         >
//           Download Schedule
//         </a>
//       </div>
//     </div>
//   );
// }
import React from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import samplePDF from '../assets/schedule.pdf';

const Schedule = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <Viewer fileUrl={samplePDF} />
    </div>
  );
};

export default Schedule;
