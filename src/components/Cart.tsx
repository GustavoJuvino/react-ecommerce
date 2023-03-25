import React, { useRef, useState } from 'react';
import { useOnClickOutside  } from 'usehooks-ts';
import { CartMenu } from './styles/Cart.styled';

type DisplayProps = {
  cartDisplay: string;
}


const Cart: React.FC<DisplayProps> = ({ cartDisplay }) => {
  const [cart, setCart] = useState(true);
  const cartMenu = useRef<HTMLDivElement>(null);

  useOnClickOutside(cartMenu, () => setCart(false))

  return (
    <>
      {cart || cartDisplay==="block" ? (
        <CartMenu ref={cartMenu}> 
          <h3>Cart</h3>
          <p>Your cart is empty</p>
        </CartMenu>
      ) : null}
    </>

  )
}

export default Cart;