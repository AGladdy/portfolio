/* eslint-disable jsx-a11y/media-has-caption */

import { ReactElement, useEffect } from 'react';
import React, { useState } from 'react';
import {
  Button, Card, Col, User, Text, Modal, useModal, Container, Tooltip, Grid, Spacer, Link,
} from '@nextui-org/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Character from '../../assets/profilephoto.png';
import vid1 from '../../assets/Girlhood_MSD_FINAL.mp4';
import vid2 from '../../assets/Bracket 3_all (1).mp4';
import vid3 from '../../assets/cake.mp4';
import vid4 from '../../assets/beats.mp4';
import vid5 from '../../assets/hallow.mp4';
import vid6 from '../../assets/Happy-VDay-2025.mp4';
import vid7 from '../../assets/red.mp4';
import vid8 from '../../assets/sss.mp4';
import { Page } from 'react-pdf';
// import vid9 from '../../assets/levoit.mp4';

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
  // eslint-disable-next-line react/require-default-props
  isSocialMedia?: boolean;
  // eslint-disable-next-line react/require-default-props
}

function ProjectCard({
  text, pdf, hasVideo, video, postPic, hasWebsite, website, isSocialMedia,
}: ProjectCardProps): ReactElement {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentColorBG, setCurrentColorBG] = useState('transparent');
  const { setVisible, bindings } = useModal();
  const changeColor = () => {
    setCurrentColorBG(currentColorBG === 'transparent' ? '#fb3958' : 'transparent');
    setCurrentColor(currentColor === 'black' ? '#fb3958' : 'black');
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();
  const zoom = zoomPluginInstance.zoomTo;
  const [zoomLevel, setZoomLevel] = useState(1.5); // Default fallback
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const isXS = window.innerWidth < 600;
    setZoomLevel(isXS ? 0.6 : 1.8);
    setIsClient(true); // Only show Viewer after we're in the browser
  }, []);
  
  return (
    <Card
      onPress={() => setVisible(true)}
      isPressable
      isHoverable
      css={{
        width: '100%',
        height: '50%',
      }}
    >
      <Modal
        scroll
        fullScreen
        css={{ backgroundColor: '#282c34', backgroundImage: 'linear-gradient(147deg, #282c34 0%, #434343 74%)', backgroundSize: '400% 400%' }}
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindings}
      >
        <Modal.Header>
          <Text color="white" weight="bold" id="modal-title" h4>
            {text}
          </Text>
        </Modal.Header>
        {isSocialMedia ? (
          <Modal.Body>
            <Grid.Container css={{ alignItems: 'center', justifyContent: 'center' }}>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid1}
                  />
                </Container>
              </Grid>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid6}
                  />
                </Container>
              </Grid>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid2}
                  />
                </Container>
              </Grid>

              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid3}
                  />
                </Container>
              </Grid>

              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid5}
                  />
                </Container>
              </Grid>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid4}
                  />
                </Container>
              </Grid>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid7}
                  />
                </Container>
              </Grid>
              <Grid xs={5} md={4} css={{ marginBottom: '4vh' }}>
                <Container css={{ '@xs': { width: 'auto', height: '50vh' }, '@md': { width: 'auto', height: '50vh' } }}>
                  <video
                    style={{
                      height: '100%', width: '100%', position: 'relative',
                    }}
                    controls
                    className="video"
                    title="Video player"
                    src={vid8}
                  />
                </Container>
              </Grid>
            </Grid.Container>

          </Modal.Body>
        ) : null}
        {!isSocialMedia ? (
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
                      src={video}
                    />

                  </Container>
                ) : null}
              </Grid>
              <Spacer />
              <Grid xs={12} css={{ alignItems: 'center', justifyContent: 'center' }}>
                {hasWebsite ? (
                  <Button
                    auto
                    color="primary"
                    ripple
                    animated
                   as="a"
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

              {isClient && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer
                    key={zoomLevel} // still good to rerender if zoom changes
                    fileUrl={pdf}
                    theme="dark"
                    plugins={[ zoomPluginInstance]}
                    defaultScale={zoomLevel}
                  />
                </Worker>
              )}

              </Grid>
            </Grid.Container>

          </Modal.Body>
        ) : null}
        <Modal.Footer>
          <Button flat auto color="primary" onPress={() => setVisible(false)}>
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
            New York, New York
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
