import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import useToggle from './hooks/useToggle';
import { HeaderContainer, Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';
import styled from 'styled-components';

type ExtraStyles = {
  fillColor: string;
  borderColor: string;
}

const UserSection = styled.div<ExtraStyles>`
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
  const [activate, setActivate] = useState(false);
  const liElements = [
    "Collections", 
    "Men", 
    "Women", 
    "About", 
    "Contact"
  ];
  const { toggleEffect } = useToggle();  

  useEffect(() => {
    toggleEffect(0, "ul.headerList > li", "underline-effect");
  }, [toggleEffect])

  return (
    <>
      <HeaderContainer>
        <nav>
          <Logo className="Logo" />
          <ul className="headerList">
            {liElements.map((element, index) => 
              <li onClick={() => toggleEffect(index, "ul.headerList > li", "underline-effect")} key={index}>
                {element}
              </li>
            )}
          </ul>
        </nav>

        <UserSection 
          borderColor={ activate ? "2px solid orange" : ""}
          fillColor={ activate ? "black" : "#69707D"}
        >
          <CartIcon
            onClick={() => activate ? setActivate(false) : setActivate(true)}
            className="Cart"
          />
          <img 
            onClick={() => activate ? setActivate(false) : setActivate(true)}
            src={require('../assets/image-avatar.png')} alt="user"
          />
        </UserSection>
      </HeaderContainer>
      <Divider />
      <Cart />
    </>
  )
}

export default Header