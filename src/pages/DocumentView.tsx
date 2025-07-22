import React from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
export default function DocumentView() {
  const { doc } = useParams<{ doc: string }>();
  const descripcion = 'Este documento guarda información acerca de la sintaxis de algunas consultas SQL';
  const pdfUrl = `/pdfs/${doc}`;
  console.log(doc);

  return (
    <div className="min-h-screen w-full bg-[#c6eafe] flex flex-col items-center font-sans px-4 py-2 overflow-auto">
      {/* Logo y título */}
      <div className="flex flex-col items-center mt-2 mb-2 w-full">
        <div className="flex flex-row items-center justify-center gap-2 mb-1 w-full">
          <img src="/assets/beginner_code.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-base font-bold text-black leading-tight text-center" style={{ fontFamily: 'Jersey 25, sans-serif' }}>Vista del archivo</h1>
        </div>
        <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-4"></div>
      </div>

      {/* Descripción */}
      <div className="w-full max-w-xs md:max-w-md bg-[#a8d8f8] rounded-lg px-3 py-2 mb-4">
        <p className="text-base md:text-lg text-black text-center" style={{ fontFamily: 'Itim, cursive' }}>{descripcion}</p>
      </div>

      {/* Visor de PDF */}
      <div className="w-full max-w-md flex flex-col items-center bg-[#222] rounded-lg overflow-hidden mb-8" style={{ minHeight: 400 }}>
        <Document file={pdfUrl} loading={<div className="text-white p-4">Cargando PDF...</div>}>
          <Page pageNumber={1} width={320} />
          <Page pageNumber={2} width={320} />
        </Document>
      </div>
    </div>
  );
}
