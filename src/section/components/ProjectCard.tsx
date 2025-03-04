import type { ReactElement } from 'react';
import React, { useState } from 'react';
import {
  Button, Card, Col, User, Text, Modal, useModal, Container, Tooltip, Grid, Spacer, Link,
} from '@nextui-org/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Character from '../../assets/AFprofile.png';

interface ProjectCardProps {
  text: string;
  pdf: string;
  // eslint-disable-next-line react/require-default-props
  hasVideo?: boolean;
  // eslint-disable-next-line react/require-default-props
  video?: string;
  postPic: string;
  // eslint-disable-next-line react/require-default-props
  hasWebsite?: boolean;
  // eslint-disable-next-line react/require-default-props
  website?: string;
}

function ProjectCard({
  text, pdf, hasVideo, video, postPic, hasWebsite, website,
}: ProjectCardProps): ReactElement {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentColorBG, setCurrentColorBG] = useState('transparent');
  const { setVisible, bindings } = useModal();
  const changeColor = () => {
    setCurrentColorBG(currentColorBG === 'transparent' ? '#fb3958' : 'transparent');
    setCurrentColor(currentColor === 'black' ? '#fb3958' : 'black');
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Card
      onPress={() => setVisible(true)}
      isPressable
      isHoverable
      css={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '100%',
        height: '50%',
      }}
    >
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindings}
      >
        <Modal.Header>
          <Text weight="bold" id="modal-title" h4>
            {text}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container css={{
            alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Grid xs={12}>
              {hasVideo ? (
                <Container css={{ '@md': { width: '50%', height: '50vh' } }}>

                  <iframe
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    allowFullScreen
                    className="video"
                    title="Youtube player"
                    sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                    src={`https://youtube.com/embed/${video}?autoplay=1`}
                  />

                </Container>
              ) : null}
            </Grid>
            <Spacer />
            <Grid xs={12} css={{ alignItems: 'center', justifyContent: 'center' }}>
              {hasWebsite ? (
                <Button
                  auto
                  color="warning"
                  ripple
                  animated
                  as={Link}
                  href={website}
                  icon={(
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                      />
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                >
                  <Text color="white" css={{ letterSpacing: '$normal' }}>Read More</Text>
                </Button>
              ) : null}
            </Grid>
            <Spacer />
            <Grid xs={12} css={{ alignItems: 'center', justifyContent: 'center' }}>

              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

                <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />

              </Worker>

            </Grid>
          </Grid.Container>

        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="warning" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card.Header style={{ backgroundColor: 'transparent' }}>

        <User
          size="lg"
          src={Character}
          name=""
          style={{ marginRight: '-12px' }}
        />

        <Text
          weight="bold"
          css={{
            paddingTop: '0px',
            letterSpacing: '$normal',
            fontSize: 14,
            '@xs': {
              fontSize: 14,
            },
            '@sm': {
              fontSize: 16,
            },
            '@md': {
              fontSize: 18,
            },
            '@lg': {
              fontSize: 20,
            },
          }}
        >
          annalisefw
          <br />
          <Text
            weight="bold"
            css={{
              paddingTop: 4,
              fontSize: 8,
              letterSpacing: '$normal',
              '@xs': {
                fontSize: 10,
              },
              '@sm': {
                fontSize: 12,
              },
              '@md': {
                fontSize: 14,
              },
              '@lg': {
                fontSize: 16,
              },
            }}
          >
            New York City, New York
          </Text>
        </Text>
      </Card.Header>
      <Card.Image
        src={postPic}
        alt="Cover photo from a project"
        objectFit="contain"
        autoResize
        showSkeleton
      />
      <Card.Footer>
        <Col>
          <Tooltip content="Like">
            <Button
              id="like"
              onPress={() => {
                changeColor();
              }}
              size="md"
              css={{
                backgroundColor: 'transparent',
                height: '32px',
                minWidth: '32px',
                marginLeft: '-4px',

              }}
              icon={(

                <svg xmlns="http://www.w3.org/2000/svg" style={{ color: currentColor, fill: currentColorBG }} className="icon icon-tabler icon-tabler-heart" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>

              )}
            />
          </Tooltip>

          <Text
            weight="bold"
            css={{
              paddingTop: 12,
              fontSize: 12,
              letterSpacing: '$normal',
              '@xs': {
                fontSize: 14,
              },
              '@sm': {
                fontSize: 16,
              },
              '@md': {
                fontSize: 18,
              },
              '@lg': {
                fontSize: 20,
              },
            }}
          >
            {text}
          </Text>
        </Col>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
