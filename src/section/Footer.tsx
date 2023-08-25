import { Grid, Text } from '@nextui-org/react';
import React, { ReactElement } from 'react';
import Socials from './components/Socials';

function Footer(): ReactElement {
  return (
    <Grid.Container gap={2} alignItems="center" css={{ display: 'flex' }}>
      <Grid xs={12}>
        <Socials />
      </Grid>
      <Grid xs={12} justify="center">
        <Text h6 color="white">
          Designed & built by A
          <sup>2</sup>
        </Text>
      </Grid>
    </Grid.Container>
  );
}

export default Footer;
