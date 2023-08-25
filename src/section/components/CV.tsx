import type { ReactElement } from 'react';
import React from 'react';
import {
  Button, Card, Grid, Link,
} from '@nextui-org/react';
import { BsSendFill } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa6';
import cv from '../../assets/cv.pdf';

function CV(): ReactElement {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact'); // Replace with the actual ID of the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Card style={{ backgroundColor: 'transparent', width: '100%' }}>
      <Card.Body>
        <Grid.Container>
          <Grid>
            <Button.Group size="xl" color="warning">
              <Button
                auto
                ripple
                animated
                color="warning"
                css={{
                  boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
                  padding: '0 24px 0 24px',

                }}
                onPress={handleScrollToContact}
                as={Link}
                icon={<BsSendFill />}
              >
                Let&apos;s Talk
              </Button>
              <Button
                auto
                ripple
                animated
                color="warning"
                css={{
                  boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
                  padding: '0 24px 0 24px',
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
            </Button.Group>

          </Grid>
        </Grid.Container>

      </Card.Body>
    </Card>
  );
}

export default CV;
