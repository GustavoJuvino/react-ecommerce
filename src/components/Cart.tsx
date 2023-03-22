import React, { useRef } from 'react';
import { useOnClickOutside  } from 'usehooks-ts';
import { CartMenu } from './styles/Cart.styled';

type DisplayProps = {
  visibility: string;
}


const Cart: React.FC<DisplayProps> = ({ visibility }) => {
  const cart = useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    console.log(visibility)
  } , [visibility])

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')
  }


  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(cart, handleClickOutside);

  return (
    <CartMenu
      ref={ cart }
      style={{ display: visibility }}
      onClick={handleClickInside}
    >
      <h3>Cart</h3>
      <p>Your cart is empty</p>
    </CartMenu>
  )
}

export default Cart;