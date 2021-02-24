import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { MdClear } from "react-icons/md";

const DropdownContainer = styled.div`
  position:fixed;
  z-index:999;
  width:100%;
  height:100%;
  background: #cd853f;
  display:grid;
  align-items:center;
  left:0;
  transition:0.3s ease-in-out;
  opacity:${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor:pointer;
  outline: none;
`;
const CloseIcon = styled(MdClear)`
  color:rgb(7,46,110);
  z-index: 20;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,80px);
  justify-content: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4,60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  color:#fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color:#fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color:rgb(7,46,110);
    transform: translateY(-4px);
  }
`;
const BtnWrap = styled.div`
display:flex;
justify-content:center;
`;





const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item,index) => (
            <DropdownLink to={item.link} key={index}> {item.title}
            </DropdownLink>
          ))}

        </DropdownMenu>
        <BtnWrap>
          <Button primary='true' round='true' big='true' to='/contact'>Recommend a book
        </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>

  );
};

export default Dropdown;
