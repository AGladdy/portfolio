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
      <Card style={{
        position: 'relative',
        width: '50%', // Set a fixed width for the circular cutout
        height: '50%', // Set a fixed height for the circular cutout
        borderRadius: '50%', // Make the container circular
        overflow: 'hidden', // Hide anything outside the circular shape
        margin: 'auto', // Center the circular cutout
      }}
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
            Hi, I am a multitalented creator who produces web, graphic, and visual designs.
            I am a student in Arizona State University&apos;s engineering program.
            Enrolled in their Graphic Information Technology program for my BAS.
            My main focus is Front-End development and User Interface design. My innate creativity
            and love for art have seamlessly fused with my problem-solving skills,
            fueling my journey in engineering to reshape the digital world through innovation
            and technology.
          </Text>
        </Col>
      </Card.Footer>
    </Card>
  );
}

export default AboutMe;
