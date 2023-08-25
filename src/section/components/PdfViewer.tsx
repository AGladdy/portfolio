/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-bind */
import {
  Button, Grid, Link, Spacer, Text,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './PdfViewer.css';
import { FaFilePdf, FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

export default function SinglePage(props: { pdf: string; }) {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1); // setting 1 to show fisrt page
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }: { numPages: any }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage(): void {
    changePage(-1);
  }

  function nextPage(): void {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <Grid.Container css={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Grid
        xs={12}
        css={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky',
        }}
      >
        <Text h5 weight="bold">
          <Spacer />
          Page
          {' '}
          {pageNumber || (numPages ? 1 : '--')}
          {' '}
          of
          {' '}
          {numPages || '--'}
        </Text>
      </Grid>
      <Grid
        xs={12}
        css={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >

        <Button.Group color="warning">
          <Button type="button" disabled={pageNumber <= 1} onPress={previousPage} icon={<FaArrowLeftLong />} />
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            icon={<FaArrowRightLong />}
          />
        </Button.Group>
        <Button
          color="warning"
          as={Link}
          onClick={() => {
            const link = document.createElement('a');
            link.href = pdf; // Replace with the actual path to your PDF file
            link.download = 'project.pdf'; // Replace with the desired file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          icon={<FaFilePdf />}
        >
          Download

        </Button>
      </Grid>
      <Grid
        xs={1}
        css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Document
          className="doc"
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Grid>
    </Grid.Container>

  );
}
