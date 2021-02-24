import React from 'react'
import styled, {css} from 'styled-components/macro';

import {Button} from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 4rem 0rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 100%;
    justify-content: flex-start;
}
`;
const Quote = styled.div`
  flex:1;
  padding: 2rem 0rem;

  h3{
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;
const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width:768px){
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;
const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;
const GitHub = styled(FaGithub)`
  ${Icons}
`;



const Footer = () => {
    return (
      <Section>
        <Container>
          <FooterTop>
            <Quote>
              <h3> Let's discover <br /> your voice</h3>

              <FooterBottom>
                <SocialIcons>
                  <a href="//www." rel="noopener noreferrer" target ="_blank">
                    <Instagram />
                  </a>
                  <a href="//www." rel="noopener noreferrer" target ="_blank">
                    <LinkedIn />
                  </a>
                  <a href="//www." rel="noopener noreferrer" target ="_blank">
                    <GitHub />
                  </a>
                </SocialIcons>
                <Contact>
                  <Button to='/books'>Let's Chat <IoMdArrowRoundForward /> </Button>
                </Contact>
              </FooterBottom>
            </Quote>
          </FooterTop>
        </Container>
      </Section>
    )
}

export default Footer
