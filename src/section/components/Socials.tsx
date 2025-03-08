import type { ReactElement } from 'react';
import React from 'react';
import {
  Button, Grid, Link,
} from '@nextui-org/react';

function Socials(): ReactElement {
  return (
    <Grid.Container style={{
      flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', gap: 8,
    }}
    >
      <Grid>
        <Button
          bordered
          ripple
          auto
          animated
          as={Link}
          href="https://www.instagram.com/annalisefw/?hl=en"
          css={{
            color: 'White',
            borderColor: 'White',
            border: 'transparent',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          )}
        />
      </Grid>
      <Grid>
        <Button
          bordered
          auto
          ripple
          animated
          as={Link}
          href="https://www.tiktok.com/@annalisefw?is_from_webapp=1&sender_device=pc"
          css={{
            color: 'White',
            borderColor: 'White',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
            border: 'transparent',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          )}
        />
      </Grid>
      <Grid>
        <Button
          bordered
          auto
          ripple
          animated
          as={Link}
          href="https://www.youtube.com/channel/UC5ZsjKP0P-LlC044P-efQvA"
          css={{
            color: 'White',
            borderColor: 'White',
            border: 'transparent',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          )}
        />
      </Grid>
      <Grid>
        <Button
          bordered
          auto
          ripple
          animated
          as={Link}
          href="https://annalisefwugcportfolio.my.canva.site/"
          css={{
            color: 'White',
            borderColor: 'White',
            border: 'transparent',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        />
      </Grid>
      <Grid>
        <Button
          bordered
          auto
          ripple
          animated
          as={Link}
          href="https://www.linkedin.com/in/annalise-wheeler-4a909a21b/"
          css={{
            color: 'White',
            borderColor: 'White',
            border: 'transparent',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',

            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          )}
        />
      </Grid>
      <Grid>
        <Button
          bordered
          auto
          ripple
          animated
          as={Link}
          href="https://github.com/annalisefaith"
          css={{
            color: 'White',
            border: 'transparent',
            boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(16px)',
            '&:hover': {
              background: '$blue200',
              color: '$blue600',
            },
            padding: '0 8px 0 8px',
            '@sm': {
              padding: '0 48px 0 48px',
            },
            '@lg': {
              padding: '0 72px 0 72px',
            },
          }}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          )}
        />
      </Grid>

    </Grid.Container>

  );
}

export default Socials;
