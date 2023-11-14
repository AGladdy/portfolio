import React, { ReactElement } from 'react';
import { Grid, Tooltip } from '@nextui-org/react';
// eslint-disable-next-line import/no-named-as-default
import ProjectCard from './components/ProjectCard';
import dc from '../assets/dc.pdf';
import dcPic from '../assets/dcPic.jpeg';
import tc from '../assets/tc.pdf';
import tcPic from '../assets/tcPic.gif';
import matesPic from '../assets/matesPic.jpeg';
import mates from '../assets/mates.pdf';
import maxPic from '../assets/maxPic.jpeg';
import max from '../assets/max.pdf';
import moaa from '../assets/moaa.jpeg';
import moaaPdf from '../assets/MoaaPortfolio.pdf';
import todayPdf from '../assets/Today_Portfolio.pdf';
import today from '../assets/today2.gif';

function Projects(): ReactElement {
  return (
    <Grid.Container id="test" css={{ marginTop: '-12px' }}>
      <Tooltip shadow content="Click to view" placement="top">
        <Grid>
          <Grid.Container gap={2} alignItems="center" justify="space-evenly">
            <Grid md={6}>

              <ProjectCard text="Trend Cycle" pdf={tc} hasVideo video="DxJ3OQ84Uk8" postPic={tcPic} hasWebsite website="https://annalisefaith.github.io/Trend-Cycle/about.html" />

            </Grid>
            <Grid md={6}>
              <ProjectCard text="Drop Culture" pdf={dc} hasVideo video="ZJKary_rEsw" postPic={dcPic} hasWebsite website="https://annalisefaith.github.io/Drop-Culture/" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Mates" pdf={mates} hasVideo video="UTGxgB4pazI" postPic={matesPic} hasWebsite website="https://www.figma.com/proto/gMLNEZkVFqgYNtswSZnclB/Mates-Protoype?type=design&t=l1RHxF2c84zyCjjp-1&scaling=scale-down&page-id=0%3A1&node-id=1-2" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Max Conference" pdf={max} hasVideo video="q_ZR6oV61OU" postPic={maxPic} hasWebsite={false} website="" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Military Officers Association of America" hasVideo={false} video="" pdf={moaaPdf} postPic={moaa} hasWebsite={false} website="" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Today" hasVideo={false} video="" pdf={todayPdf} postPic={today} hasWebsite={false} website="" />
            </Grid>
          </Grid.Container>
        </Grid>
      </Tooltip>
    </Grid.Container>

  );
}

export default Projects;
