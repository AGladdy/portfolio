import type { ReactElement } from 'react';
import React from 'react';
// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import {
  Card, Image, Grid,
} from '@nextui-org/react';

import logo from '../../assets/AF logo.png';

function Title(): ReactElement {
  return (
    <Card
      css={{
        textAlign: 'center',
        width: 'fit-content',
        background: 'transparent',

      }}
    >
      <Grid.Container css={{ display: 'flex', flexDirection: 'column', '@md': { flexDirection: 'row' } }}>
        <Grid css={{ alignContent: 'center', paddingTop: '14px' }}>
          <Image
            src={logo}
            css={{
              width: '128px',
              height: '128px',

            }}
          />
        </Grid>
        {/* <Grid>
          <Text
            h2
            weight="bold"
            css={{
              color: '#FAF9F6', letterSpacing: '$wide', fontFamily: 'Afronaut Regular',
            }}
          >
            Annalise Faith
          </Text>
        </Grid> */}
      </Grid.Container>
    </Card>

  );
}
export default Title;
