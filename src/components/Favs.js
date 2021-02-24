import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import BookOne from '../images/bookOne.jpg';
import BookTwo from '../images/bookTwo.jpg';


const Section = styled.section`
  width: 100%;
  height:100%;
  padding: 10rem calc((100vw - 1300px) / 2 );
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px){
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem 0 rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2{
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px){
    margin-bottom: 1rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #072E6E;
  width: 180px;
  transition: 0.3s;


  &:hover{
    transform: translateY(-3px);
  }
`;


const Favs = () => {
    return (
        <Section>
          <Container>
            <Heading>
              <h1
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-once="true"
                data-aos-ancho-placement='center-bottom'
                >
                View this week's book club picks:
              </h1>
            </Heading>
            <InfoRow>
              <InfoWrap>
                <Image src={BookOne} alt="books"
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-once="true"
                  data-aos-ancho-placement='center-bottom'
                />
                <h2
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-once="true"
                  data-aos-ancho-placement='center-bottom'
                  >Strong female voice</h2>
                <InfoLink to='/books'
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-once="true"
                data-aos-ancho-placement='center-bottom'
                >
                  <p>View Summary</p>
                  <Arrow />
                </InfoLink>
              </InfoWrap>

              <InfoWrap>
                <Image src={BookTwo} alt="books" css={`
                  margin-top:120px;
                  @media screen and (max-width: 768px) {
                    margin-top: 0px;
                  }
                  `}
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-once="true"
                  data-aos-ancho-placement='center-bottom'

                />
                <h2
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-once="true"
                  data-aos-ancho-placement='center-bottom'
                  >Looking for a romance novel?</h2>
                <InfoLink to='/books'
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-once="true"
                data-aos-ancho-placement='center-bottom'
                >
                  <p>View Summary</p>
                  <Arrow />
                </InfoLink>
              </InfoWrap>


            </InfoRow>
          </Container>
        </Section>
    )
}

export default Favs
