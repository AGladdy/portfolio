import React, { ReactElement } from 'react';
import { Grid, Tooltip } from '@nextui-org/react';
// eslint-disable-next-line import/no-named-as-default
import ProjectCard from './components/ProjectCard';
import dc from '../assets/dc.pdf';
import dcPic from '../assets/dcPic.jpeg';
import dcVid from '../assets/DropCultureWebsiteWheeler.MP4';
import tc from '../assets/tc.pdf';
import tcPic from '../assets/tcPic.gif';
import matesPic from '../assets/matesPic.jpeg';
import mates from '../assets/mates.pdf';
import matesVideo from '../assets/matesVid.mp4';
import maxPic from '../assets/maxPic.jpeg';
import maxVid from '../assets/maxVid.mp4';

import max from '../assets/max.pdf';
import moaa from '../assets/moaa.jpeg';
import moaaPdf from '../assets/MoaaPortfolio.pdf';
import songPdf from '../assets/sos.pdf';
import songPic from '../assets/SOS.gif';
import tcVid from '../assets/tcVid.mp4';
import tsPic from '../assets/time.png';
import tsPdf from '../assets/social.pdf';
import sPic from '../assets/printcover.png';
import sPdf from '../assets/printportfolio.pdf';

function Projects(): ReactElement {
  return (
    <Grid.Container id="test" css={{ marginTop: '-12px' }}>
      <Tooltip shadow content="Click to view" placement="top">
        <Grid>
          <Grid.Container gap={2} alignItems="center" justify="space-evenly">
            <Grid md={6}>

              <ProjectCard text="(RED) Song of Summer ft. Fiat and Chart Data" pdf={songPdf} postPic={songPic} hasWebsite website="https://www.red.org/reditorial/partnership/the-song-of-the-summer-fiat/" />

            </Grid>
            <Grid md={6}>

              <ProjectCard text="(RED) Social Media" pdf={tsPdf} postPic={tsPic} hasWebsite website="https://www.red.org/reditorial/learn/4-reasons-iron-deficiency-can-be-dangerous-for-people-living-with-hiv/" />

            </Grid>
            <Grid md={6}>

              <ProjectCard text="(RED) Print and Events" pdf={sPdf} postPic={sPic} />

            </Grid>
            <Grid md={6}>

              <ProjectCard text="Trend Cycle" pdf={tc} hasVideo video={tcVid} postPic={tcPic} hasWebsite website="https://annalisefaith.github.io/Trend-Cycle/about.html" />

            </Grid>
            <Grid md={6}>
              <ProjectCard text="Drop Culture" pdf={dc} hasVideo video={dcVid} postPic={dcPic} hasWebsite website="https://annalisefaith.github.io/Drop-Culture/" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Mates" pdf={mates} hasVideo video={matesVideo} postPic={matesPic} hasWebsite website="https://www.figma.com/proto/gMLNEZkVFqgYNtswSZnclB/Mates-Protoype?type=design&t=l1RHxF2c84zyCjjp-1&scaling=scale-down&page-id=0%3A1&node-id=1-2" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Max Conference" pdf={max} hasVideo video={maxVid} postPic={maxPic} hasWebsite={false} website="" />
            </Grid>
            <Grid md={6}>
              <ProjectCard text="Military Officers Association of America" hasVideo={false} video="" pdf={moaaPdf} postPic={moaa} hasWebsite={false} website="" />
            </Grid>
          </Grid.Container>
        </Grid>
      </Tooltip>
    </Grid.Container>

  );
}

export default Projects;
