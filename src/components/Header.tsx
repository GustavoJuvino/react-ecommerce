import React from 'react';
import { HeaderContainer } from './styles/Header.styled';
import { UserSection } from './styles/Header.styled';
import { Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';

const Header: React.FC = () => {
  const liElements = ["Collections", "Men", "Women", "About", "Contact"];

  function liEffect(index: number): void{
    const liList = document.querySelectorAll("li");

    if(liList.length) {
      liList.forEach((li) => li.classList.remove("underline-effect"));
      liList[index].classList.add("underline-effect");
    }
  };

  // liEffect(0);


  return (
    <>
        <HeaderContainer>
            <nav>
                <Logo className="Logo" />
                <ul>
                  {liElements.map((element, index) => 
                    <li onClick={() => liEffect(index)} key={index}>{element}</li>
                  )}
                </ul>
            </nav>

            <UserSection>
                <Cart className="Cart" />
                <img src={require('../assets/image-avatar.png')} alt="user"/>
            </UserSection>
        </HeaderContainer>
        <Divider></Divider>
    </>
  )
}

export default Header