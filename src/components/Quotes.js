import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import BookThree from '../images/bookThree.jpg';


const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;
const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;
const Content = styled.div`
  flex: 0 0 50%;


  @media screen and (max-width:768px){
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1{
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p{
    margin-bottom: 1rem;
    line-height: 1.8;
    text-align: justify;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width:45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px){
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;



const Quotes = () => {
    return (
        <Section>
          <Container>
            <Wrap>
              <ColumnLeft>
                <Content>
                  <h1
                    data-aos='fade-down'
                    data-aos-duration='1000'
                    data-aos-ancho-placement='center-bottom'
                    >
                    - Glennon Doyle
                  </h1>
                  <p
                    data-aos='fade-down'
                    data-aos-duration='1000'
                    data-aos-ancho-placement='center-bottom'
                    data-aos-delay='200'
                    >
                    " I watched Tabitha gnawing that steak in the zoo dirt and thought: day after day this wild animal chases dirty pink bunnies down the well-worn, narrow path they cleared for her. Never looking left or right. Never catching that damn bunny, settling instead for a store bought steak and the distracted approval of sweaty strangers. Obeying the zookeeper's every command, just like Minnie, the Lab she's been trained to believe she is. Unaware that if she remembered her wildness __ just for a moment __ she could tear those zookeepers to shreds. "

                  </p>
                  <Button to="/books"
                  data-aos='fade-down'
                  data-aos-duration='1000'
                  data-aos-ancho-placement='center-bottom'
                  data-aos-delay='400'
                  >Learn More</Button>
                </Content>
              </ColumnLeft>
              <ColumnRight>
                <Image src={BookThree}
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-once="true"
                  data-aos-ancho-placement='center-bottom'

                />
              </ColumnRight>
            </Wrap>
          </Container>
        </Section>
    )
}

export default Quotes;
