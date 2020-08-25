import React from "react";
import styled from "styled-components";
import behance from "../assets/images/behance_white.png";
import github from "../assets/images/github_white.png";
import linkedin from "../assets/images/linkedin_white.png";

//footer is another component that will be used in all screens - it will imported by DefaultTemplate

const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--black);
  color: var(--lg-color);

  @media (max-width: 800px) {
    display: block;
  }
`;

const ContentItem = styled.div`
  flex: 1 0 350px;
  margin: 5px;

  & h5 {
    letter-spacing: 2px;
  }

  & p {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;

    & p {
      font-weight: 300;
    }
  }
`;

const Icon = styled.img`
  width: 24px;
  height: auto;
  margin: 0;
`;

const Copyright = styled.p`

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <ContentItem>
        <h5>WHO IS THAT GIRL?</h5>
        <p>Jennifer Magpantay</p>
        <p>
          IT graduated, lifelong learner, food lover & crazy cat lady. And
          proud.
        </p>
        <p>Currently based in Dublin, IRL</p>
      </ContentItem>
      <ContentItem>
        <h5>RESOURCES</h5>
        <p>
          <a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ">
            Clever Programmer
          </a>
        </p>
        <p>
          <a href="https://firebase.google.com/">Firebase</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://flatuicolors.com/">Flat UI Colors</a>
        </p>
        <p>
          <a href="https://www.canva.com/">Canva</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://www.themoviedb.org/">TMDb</a>
        </p>
      </ContentItem>

      <ContentItem>
        <h5>LET'S STAY CONNECTED</h5>
        <p>
          <a href="mailto:jennifer.magpantay@gmail.com">popme@message.com</a>
        </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jennifermagpantay/">
              <Icon src={linkedin} alt="Linkedin Profile" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jennifer-magpantay">
              <Icon src={github} alt="Github Repositories" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/jennifer_magpantay">
              <Icon src={behance} alt="Behance Projects" />
            </a>
          </li>
        </ul>
      </ContentItem>
      <hr />
      <ContentItem>
        <Copyright>
          Copyright &copy; 2020 Developed by Jennifer Magpantay using HTML5,
          CSS3 & React&nbsp;&nbsp;|&nbsp;&nbsp;Clever Programmer
        </Copyright>
      </ContentItem>
    </FooterWrapper>
  );
}

export default Footer;
