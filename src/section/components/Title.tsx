import type { ReactElement } from 'react';
import React from 'react';
// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import {
  Card, Text, Image, Grid,
} from '@nextui-org/react';

import logo from '../../assets/AFlogoW.png';

function Title(): ReactElement {
  return (
    <Card
      css={{
        textAlign: 'center',
        width: 'fit-content',
        padding: '0 12px',
        margin: '0 auto', // Center horizontally using margin
        background: 'transparent',
        '@lg': {
          margin: 'auto',
        },
      }}
    >
      <Grid.Container css={{ display: 'flex', flexDirection: 'column', '@md': { flexDirection: 'row' } }}>
        <Grid css={{ alignContent: 'center', paddingTop: '14px' }}>
          <Image
            src={logo}
            css={{
              width: '128px',
              height: '128px',
              '@md': {
                width: '48px',
                height: '48px',
              },
            }}
          />
        </Grid>
        <Grid>
          <Text
            h1
            weight="bold"
            css={{
              color: '#FAF9F6', letterSpacing: '$wider', fontFamily: 'Afronaut Regular',
            }}
          >
            Annalise Faith
          </Text>
        </Grid>
      </Grid.Container>
    </Card>

  );
}
export default Title;
