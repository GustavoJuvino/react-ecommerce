import React, { useEffect, useRef } from 'react';
import { useDisplayCartContext } from './contexts/useDisplayCartContext';
import useToggle from './hooks/useToggle';
import { HeaderContainer, HeaderContent, Divider, UserContainer, CartDiv } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Cart from "./Cart";
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';

const Header: React.FC= () => {
  const { activate, setActivate } = useDisplayCartContext();
  const cartRef = useRef(null);

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
    <HeaderContainer>
      <HeaderContent>
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

        
        <UserContainer
          borderColor={ activate ? "2px solid orange" : ""}
          fillColor={ activate ? "black" : "#69707D"}
        >
          <CartDiv id="cart-div" ref={cartRef}>
                  <CartIcon
                  className="Cart"
                  onClick={() => setActivate(!activate)}
                  />
                  <span>3</span>
          </CartDiv>

          <img src={require('../assets/image-avatar.png')} alt="user" />
        </UserContainer>

      </HeaderContent>

      <div className="test-menu">
        <Divider />
        <Cart cartRef={cartRef} />
      </div>
    </HeaderContainer>
  )
}

export default Header