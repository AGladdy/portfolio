/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-bind */

import React from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './PdfViewer.css';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function SinglePage(props: { pdf: string; }) {
  const { pdf } = props;

  return (

    <Viewer fileUrl={pdf} />

  );
}
