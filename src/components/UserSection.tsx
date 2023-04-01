import React, { useRef } from 'react';
import { useDisplayCartContext } from './contexts/useDisplayCartContext';
import Cart from './Cart';
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';
import { UserContainer, CartDiv } from './styles/UserSection.styled'

// type ExtraStyles = {
//     fillColor: string;
//     borderColor: string;
//   }
  
//   const UserTest = styled.div<ExtraStyles>`
    // display: flex;
    // justify-content: center;
  
//     .Cart {
//       margin-right: 46px;
//       margin-top: 20px;
//       fill: ${props => props.fillColor};
//     }
  
//     img {
//       width: 50px;
//       height: 50px;
//       border-radius: 50%;
//       border:  ${props => props.borderColor};
//     }
//   `

const UserSection: React.FC = () => {
    const { activate, setActivate } = useDisplayCartContext();
    const cartRef = useRef<HTMLDivElement>(null);
    
  return (
    <UserContainer
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


        <Cart cartRef={cartRef} />
    </UserContainer>
  )
}

export default UserSection
