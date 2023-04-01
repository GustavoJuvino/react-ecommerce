import React, { useEffect } from 'react';
import UserSection from "./UserSection";
import useToggle from './hooks/useToggle';
import { HeaderContainer, Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header: React.FC= () => {

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

        {/* <UserSection 
            borderColor={ activate ? "2px solid orange" : ""}
            fillColor={ activate ? "black" : "#69707D"}
          >

          <CartDiv ref={cartRef}>
            <CartIcon
              className="Cart"
              onClick={() => setActivate(!activate)}
            />
            <span>3</span>
          </CartDiv>

          <img src={require('../assets/image-avatar.png')} alt="user" />

        </UserSection> */}
        <UserSection />
      </HeaderContainer>

      <Divider />
    </>
  )
}

export default Header