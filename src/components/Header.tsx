import React, { useState, useCallback, useEffect } from 'react';
import { HeaderContainer, Divider, UserSection } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';

const Header: React.FC= () => {
  const [ativo, setAtivo] = useState(false);

  const liElements = ["Collections", "Men", "Women", "About", "Contact"];

  const liEffect = useCallback((index: number) => {
    const liList = document.querySelectorAll("li");
    if(liList.length) {
      liList.forEach((li) => li.classList.remove("underline-effect"));
      liList[index].classList.add("underline-effect");
    }
  }, []);

  useEffect(() => {
    liEffect(0);
  }, [liEffect])

  return (
    <>
        <HeaderContainer>
            <nav>
                <Logo className="Logo" />
                <ul>
                  {liElements.map((element, index) => 
                    <li 
                      onClick={() => liEffect(index)}
                      key={index}
                    >
                      {element}
                    </li>
                  )}
                </ul>
            </nav>

            <UserSection>
                <Cart
                  style={{ fill: ativo ? "black" : "#69707D" }}
                  onClick={() => ativo ? setAtivo(false) : setAtivo(true)}
                  className="Cart"
                />
                <img 
                  style={{ border: ativo ? "2px solid orange" : "0px" }}
                  onClick={() => ativo ? setAtivo(false) : setAtivo(true)}
                  src={require('../assets/image-avatar.png')} alt="user"
                />
            </UserSection>
        </HeaderContainer>
        <Divider></Divider>
    </>
  )
}

export default Header