import React, { useState, useEffect } from 'react';
import useToggle from './hooks/useToggle';
import { HeaderContainer, Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';
import styled from 'styled-components';

type ExtraStyles = {
  fillColor: string;
  borderColor: string;
}

export const UserSection = styled.div<ExtraStyles>`
  display: flex;
  justify-content: center;

  .Cart {
    margin-right: 46px;
    margin-top: 20px;
    fill: ${props => props.fillColor};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:  ${props => props.borderColor};
  }
`

const Header: React.FC= () => {
  const [ativo, setAtivo] = useState(false);
  const liElements = [
    "Collections", 
    "Men", 
    "Women", 
    "About", 
    "Contact"
  ];
  const { toggleEffect } = useToggle();  

  useEffect(() => {
    toggleEffect(0, "li", "underline-effect");
  }, [toggleEffect])

  return (
    <>
      <HeaderContainer>
        <nav>
          <Logo className="Logo" />
          <ul>
            {liElements.map((element, index) => 
              <li onClick={() => toggleEffect(index, "li", "underline-effect")} key={index}>
                {element}
              </li>
            )}
          </ul>
        </nav>

        <UserSection 
          borderColor={ ativo ? "2px solid orange" : ""}
          fillColor={ ativo ? "black" : "#69707D"}
        >
          <Cart
            onClick={() => ativo ? setAtivo(false) : setAtivo(true)}
            className="Cart"
          />
          <img 
            onClick={() => ativo ? setAtivo(false) : setAtivo(true)}
            src={require('../assets/image-avatar.png')} alt="user"
          />
        </UserSection>
      </HeaderContainer>
      <Divider />
    </>
  )
}

export default Header