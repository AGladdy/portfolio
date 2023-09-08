import type { ReactElement } from 'react';
import React from 'react';
// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { Card, Text } from '@nextui-org/react';

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
      <Text h1 weight="bold" css={{ color: '#FAF9F6', letterSpacing: '$wider' }}>
        Annalise Faith
      </Text>
    </Card>

  );
}
export default Title;
