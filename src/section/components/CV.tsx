import type { ReactElement } from 'react';
import React from 'react';
import {
  Button, Card, Grid, Link,
} from '@nextui-org/react';
import { BsSendFill } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa6';
import cv from '../../assets/cv3.pdf';

function CV(): ReactElement {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact'); // Replace with the actual ID of the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card
      style={{ backgroundColor: 'transparent' }}
      css={{
        background: 'transparent',
      }}
    >
      <Card.Body>
        <Grid.Container
          justify="flex-end" // Align the grid items to the right
          css={{
            display: 'flex',
            flexDirection: 'column',
            '@xs': { flexDirection: 'row' },
          }}
        >
          <Grid
            xs={12}
            sm={6}
            css={{
              padding: '$xs',
              '@sm': { justifyContent: 'flex-end' },
            }}
          >
            <Button
              auto
              ripple
              animated
              size="lg"
              color="primary"
              css={{
                boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
                padding: '0 24px 0 24px',
                minWidth: '100%',
                '@sm': { minWidth: '30%' },
              }}
              onPress={handleScrollToContact}
              as={Link}
              icon={<BsSendFill />}
            >
              Let&apos;s Talk
            </Button>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              padding: '$xs',
              '@sm': { justifyContent: 'flex-end' },
            }}
          >
            <Button
              auto
              ripple
              animated
              size="lg"
              css={{
                boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
                padding: '0 24px 0 24px',
                minWidth: '100%',
                '@sm': { minWidth: '30%' },
              }}
              as={Link}
              onClick={() => {
                const link = document.createElement('a');
                link.href = cv; // Replace with the actual path to your PDF file
                link.download = 'Annalise_Faith_cv.pdf'; // Replace with the desired file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              icon={<FaFilePdf />}
            >
              Download CV
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}

export default CV;
