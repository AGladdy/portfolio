import type { ReactElement } from 'react';
import React from 'react';
import { Card, Col, Text } from '@nextui-org/react';

import vid from '../../assets/profilevid.mp4';

function AboutMe(): ReactElement {
  return (
    <Card css={{
      backgroundColor: 'rgba(255, 255, 255, 1)',
      width: '100%',
      height: '50%',

    }}
    >
      <Card.Header />
      <Card
        style={{
          position: 'relative',
          width: '50%', // Set a fixed width for the circular cutout
          height: '50%', // Set a fixed height for the circular cutout
          borderRadius: '50%', // Make the container circular
          overflow: 'hidden', // Hide anything outside the circular shape
          margin: 'auto', // Center the circular cutout
        }}
        variant="flat"
      >
        <video
          width="50%"
          height="50%"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Card>
      <Card.Footer>
        <Col>
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
            I&apos;m a creative professional with expertise in web, graphic,
            and visual design, holding a Bachelor&apos;s in Graphic Information
            Technology from Arizona State University. Specializing in Graphic
            Design, Front-End Development, and User Interface Design, I blend
            creativity and problem-solving to innovate in the digital realm.
          </Text>
        </Col>
      </Card.Footer>
    </Card>
  );
}

export default AboutMe;
