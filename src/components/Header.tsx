import React from 'react';
import { HeaderContainer } from './styles/Header.styled';
import { UserSection } from './styles/Header.styled';
import { Divider } from './styles/Header.styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/icon-cart.svg';

const Header: React.FC = () => {
  return (
    <>
        <HeaderContainer>
            <nav>
                <Logo className="Logo" />
                <p>Collections</p>
                <p>Men</p>
                <p>Women</p>
                <p>About</p>
                <p>Contact</p>
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