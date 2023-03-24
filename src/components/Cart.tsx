import React, { useRef } from 'react';
import { useOnClickOutside  } from 'usehooks-ts';
import { CartMenu } from './styles/Cart.styled';

type DisplayProps = {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}


const Cart: React.FC<DisplayProps> = ({ display, setDisplay }) => {
  const cart = useRef<HTMLDivElement>(null);

  useOnClickOutside(cart, () => display ? setDisplay(false) : null);

  return (
    <>
      {display ? (
        <CartMenu ref={ cart }>
          <h3>Cart</h3>
          <p>Your cart is empty</p>
        </CartMenu>
      ): null}
    </>

  )
}

export default Cart;