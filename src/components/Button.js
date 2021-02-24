import styled from 'styled-components';
import { Link} from 'react-router-dom';



export const Button = styled(Link)`
  background: ${({ primary}) => ( primary ? 'rgb(7,46,110)' :
  '#CD853F')};
  white-space: nowrap;
  outline: none;
  border:none;
  min-width: 100px;
  max-width: 250px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  padding: ${({big}) => (big ? '16px 60px' : '14px 28px')};
  color: ${({primary}) => (primary ? '#fff' : '#fff')};
  font-size: ${({big}) => (big ? '18px' : '14px')};
  border-radius: ${({ round }) => (round ? '50px' : '0px' )};

  &:hover {
    transform: translateY(-4px);
  }
`;
