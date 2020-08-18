import React from 'react';
import Container from './components/Container';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Wrapper>
        <Main />
        <Aside />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
