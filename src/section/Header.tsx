import type { ReactElement } from 'react';
import React from 'react';
import { Grid } from '@nextui-org/react';
import Socials from './components/Socials';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import CV from './components/CV';

function Header(): ReactElement {
  return (
    <Grid.Container justify="center" alignItems="center">
      <Grid xs={12} alignItems="center">
        <Title />
      </Grid>
      <Grid xs={12}>
        <Socials />
      </Grid>
      <Grid md={6} css={{ paddingTop: '36px', width: '94%' }}>
        <AboutMe />
      </Grid>

      <Grid xs={12} justify="center" alignItems="center">
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
        }}
        >
          <CV />
        </div>

      </Grid>
    </Grid.Container>
  );
}

export default Header;
