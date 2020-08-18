import React from "react";
import Footer from "./Footer";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Main from "./Main";
import Aside from "./Aside";

function Template() {
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

export default Template;
