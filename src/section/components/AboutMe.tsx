import type { ReactElement } from 'react';
import React, { useState } from 'react';
import {
  Button, Card, Col, Text, Tooltip, User,
} from '@nextui-org/react';
import Character from '../../assets/profile.JPG';
import gif from '../../assets/vllo.GIF';

function AboutMe(): ReactElement {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentColorBG, setCurrentColorBG] = useState('transparent');

  const changeColor = () => {
    setCurrentColorBG(currentColorBG === 'transparent' ? '#fb3958' : 'transparent');
    setCurrentColor(currentColor === 'black' ? '#fb3958' : 'black');
  };

  return (
    <Card css={{
      backgroundColor: 'rgba(255, 255, 255, 1)',
      width: '100%',
      height: '50%',

    }}
    >
      <Card.Header style={{ backgroundColor: 'transparent' }}>
        <User
          size="lg"
          src={Character}
          name=""
          css={{ marginRight: '-12px' }}
        />
        <Text
          h2
          weight="bold"
          css={{
            paddingTop: '8px',
            fontSize: 14,
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
          annalisefw

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
      <Card.Image src={gif} objectFit="contain" autoResize css={{ padding: '0 25% 0 25%' }} />
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
            Hi, I am a multitalented creator who produces web, graphic,
            and visual designs.  I am a student at Arizona State University majoring in
            Graphic Information Technology to obtain my Bachelor&apos;s of Applied Science
            in the Ira A. Fulton Schools of Engineering.
            I intend to make a career as a user experience designer.
          </Text>
        </Col>
      </Card.Footer>
    </Card>
  );
}

export default AboutMe;
