'use client'

import { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

export default function PdfViewer({ src }: { src: string }) {
  const [numPages, setNumPages] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setWidth(containerRef.current.clientWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex items-center justify-center py-24">
            <p className="font-sans text-[10px] text-muted tracking-[0.3em] uppercase animate-pulse">
              Loading...
            </p>
          </div>
        }
        error={
          <div className="flex items-center justify-center py-24">
            <p className="font-sans text-[10px] text-red-400 tracking-[0.3em] uppercase">
              Could not load PDF
            </p>
          </div>
        }
      >
        {width > 0 &&
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i + 1}
              pageNumber={i + 1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="mb-1"
            />
          ))}
      </Document>
    </div>
  )
}
