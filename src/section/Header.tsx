import type { ReactElement } from 'react';
import React from 'react';
import { Grid } from '@nextui-org/react';
// import Socials from './components/Socials';
import Title from './components/Title';
// import AboutMe from './components/AboutMe';
import CV from './components/CV';

function Header(): ReactElement {
  return (
    <Grid.Container justify="space-between">
      <Grid xs={12} sm={6} alignItems="flex-start">
        <Title />
      </Grid>
      <Grid xs={12} sm={6} alignItems="flex-end">
        <CV />
      </Grid>
    </Grid.Container>
  );
}

export default Header;
