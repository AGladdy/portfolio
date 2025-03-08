import type { ReactElement } from 'react';
import React from 'react';
import {
  Card, Image, Grid, Text,
  Spacer,
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
        <Grid css={{ alignContent: 'center' }} xs={12} md={6}>
          <Image
            src={logo}
            css={{
              width: '12vh',
              height: '12vh',

            }}
          />
        </Grid>
        <Spacer x={2} />
        <Grid css={{ '@xs': { display: 'flex-end', marginLeft: '-4px' } }} xs={12} md={8}>
          <Text
            h5
            weight="bold"
            css={{
              color: 'white',
              letterSpacing: '$wide',
            }}
          >
            &nbsp;&nbsp;Graphic Designer + Digital Marketer
          </Text>
        </Grid>
      </Grid.Container>
    </Card>

  );
}
export default Title;
