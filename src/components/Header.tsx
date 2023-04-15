import React, { useEffect, useRef } from 'react';
import { useDisplayCartContext } from './contexts/useDisplayCartContext';
import { useCounterContext } from "./contexts/useCounterContext";
import useToggle from './hooks/useToggle';
import Cart from "./Cart";
import Mobile from "./Mobile";
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';
import {
  HeaderContainer,
  HeaderContent,
  Divider,
  UserContainer,
  CartDiv
} from './styles/Header.styled';

export const headerElements = [
  "Collections", 
  "Men", 
  "Women", 
  "About", 
  "Contact"
];

const Header: React.FC= () => {
  const { display, setDisplay } = useDisplayCartContext();
  const { counter } = useCounterContext();
  const cartRef = useRef(null);

  const { toggleEffect } = useToggle();  

  useEffect(() => {
    toggleEffect(0, "ul.headerList > li", "underline-effect");
  }, [toggleEffect])

  return (
    <HeaderContainer>
      <HeaderContent>
        <nav>
          <Mobile />
          <Logo className="Logo" />

          <ul className="headerList">
            {headerElements.map((element, index) => 
              <li onClick={() => toggleEffect(index, "ul.headerList > li", "underline-effect")} key={index}>
                {element}
              </li>
            )}
          </ul>
        </nav>

        <UserContainer
          borderColor={ display ? "2px solid orange" : ""}
          fillColor={ display ? "black" : "#69707D"}
        >
          <CartDiv id="cart-div" ref={cartRef}>
            <CartIcon className="Cart" onClick={() => setDisplay(!display)} />
            <Cart cartRef={cartRef} />
            {counter > 0 ? <span className="counter">{counter}</span>: null}
          </CartDiv>
          <img src={require('../assets/image-avatar.png')} alt="user" />
        </UserContainer>
      </HeaderContent>

      <div className="divider-div">
        <Divider />
      </div>
    </HeaderContainer>
  )
}

export default Header