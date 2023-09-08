import React from 'react';
import './App.css';
import { Container, Spacer } from '@nextui-org/react';
import Header from './section/Header';
import Projects from './section/Projects';
import Skills from './section/Skills';
import Contact from './section/Contact';
import Footer from './section/Footer';

function App() {
  return (

    <Container gap={2} css={{ fontFamily: ' -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <Header />
      <Projects />
      <Spacer y={0.2} />
      <Skills />
      <Spacer y={0.2} />
      <Contact />
      <Footer />
      <Spacer y={0.2} />
    </Container>

  );
}

export default App;
