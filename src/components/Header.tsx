import React from 'react';
import { HeaderContainer } from './styles/Header.styled';
import { UserSection } from './styles/Header.styled';
import { Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';

const Header: React.FC = () => {
  const liList = document.querySelectorAll("li");

  function liEffect(index: number): void{
    liList.forEach((li) => li.classList.remove("underline-effect"));

    liList[index].classList.add("underline-effect");
  };

  liList.forEach((li, index) => {
    li.addEventListener("click", () => liEffect(index))
  });

  return (
    <>
        <HeaderContainer>
            <nav>
                <Logo className="Logo" />
                <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
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