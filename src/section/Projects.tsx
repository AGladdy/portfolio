import React, { ReactElement } from 'react';
import { Grid } from '@nextui-org/react';
// eslint-disable-next-line import/no-named-as-default
import ProjectCard from './components/ProjectCard';
import dc from '../assets/dc.pdf';
import dcPic from '../assets/DCigpost.png';
import tc from '../assets/tc.pdf';
import tcPic from '../assets/tcPic.png';
import matesPic from '../assets/matesPic.png';
import mates from '../assets/mates.pdf';
import maxPic from '../assets/maxPic.png';
import max from '../assets/max.pdf';

function Projects(): ReactElement {
  return (
    <Grid.Container id="test" css={{ marginTop: '-12px' }}>
      <Grid>
        <Grid.Container gap={2} alignItems="center" justify="space-evenly">
          <Grid md={6}>

            <ProjectCard text="Trend Cycle" pdf={tc} hasVideo video="DxJ3OQ84Uk8" postPic={tcPic} />

          </Grid>
          <Grid md={6}>
            <ProjectCard text="Drop Culture" pdf={dc} hasVideo video="ZJKary_rEsw" postPic={dcPic} />
          </Grid>
          <Grid md={6}>
            <ProjectCard text="Mates" pdf={mates} hasVideo video="UTGxgB4pazI" postPic={matesPic} />
          </Grid>
          <Grid md={6}>
            <ProjectCard text="Max Conference" pdf={max} hasVideo video="q_ZR6oV61OU" postPic={maxPic} />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>

  );
}

export default Projects;
