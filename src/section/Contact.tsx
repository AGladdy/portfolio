import {
  Button,
  Card, Grid, Text, Textarea,
} from '@nextui-org/react';
import React, { ReactElement, useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

function Contact(): ReactElement {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    if (!fullName || !email || !message) {
      // eslint-disable-next-line no-alert
      alert('Please fill in all required fields.');
      return;
    }
    const templateParams = {
      name: fullName,
      body: message,
      number: phone,
      address: email,
    };

    emailjs.send('service_gca4f7b', 'template_99x0mlc', templateParams, '7rIXTtOS2NTUD1rAc')
      .then(() => {
        // show the user a success message
        // eslint-disable-next-line no-alert
        alert('Email sent successfully!');
      }, () => {
        // show the user an error
        // eslint-disable-next-line no-alert
        alert('Email sent unsuccessfully!');
      });
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  return (
    <Grid.Container
      gap={2}
      justify="center"
      id="contact"
    >
      <Grid md={12}>
        <Card>
          <Card.Body>
            <Grid.Container
              gap={2}
            >
              <Grid xs={12} justify="center">
                <Text h3 weight="bold" css={{ textAlign: 'center', letterSpacing: '$normal' }}>
                  Contact Me
                </Text>
              </Grid>
              <Grid xs={12} justify="space-around">
                <Textarea
                  maxRows={1}
                  bordered
                  required
                  fullWidth
                  size="lg"
                  status="warning"
                  label="Full Name*"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  css={{ letterSpacing: '$normal' }}
                />
              </Grid>
              <Grid xs={6}>
                <Textarea
                  maxRows={1}
                  bordered
                  required
                  size="lg"
                  fullWidth
                  status="warning"
                  label="Email*"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid xs={6}>
                <Textarea
                  maxRows={1}
                  bordered
                  size="lg"
                  fullWidth
                  status="warning"
                  label="Phone"
                  placeholder="Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  css={{ letterSpacing: '$normal' }}
                />
              </Grid>
              <Grid xs={12}>
                <Textarea
                  maxRows={3}
                  bordered
                  required
                  size="lg"
                  fullWidth
                  status="warning"
                  label="Message*"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  css={{ letterSpacing: '$normal' }}
                />
              </Grid>
              <Grid>
                <Button color="warning" size="md" onClick={sendEmail} icon={<BsSendFill />}>
                  <Text color="white" css={{ letterSpacing: '$normal' }}>Send</Text>
                </Button>
              </Grid>

            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>

  );
}

export default Contact;
