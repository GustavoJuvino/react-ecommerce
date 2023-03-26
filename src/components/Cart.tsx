import React, { useRef, useEffect } from 'react';
import { CartMenu } from './styles/Cart.styled';

type DisplayProps = {
  activate?: boolean;
  setActivate?:  React.Dispatch<React.SetStateAction<boolean>>;
  cartRef?: React.RefObject<HTMLDivElement>;
}

const Cart: React.FC<DisplayProps> = ({ activate, setActivate, cartRef }) => {
  const cartMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if(!cartRef?.current?.contains(e.target as Node) 
      && !cartMenu.current?.contains(e.target as Node)) {
        if(setActivate) setActivate(false);
      }
    };

    document.addEventListener("mousedown", (e: MouseEvent) => handler(e));
    
    return() => document.removeEventListener("mousedown", (e: MouseEvent) => handler(e));
    
  });

  return (
    <>
      {activate ? (
        <CartMenu className={ activate ? "open" : "closed" } ref={cartMenu}> 
          <h3>Cart</h3>
          <p>Your cart is empty</p>
        </CartMenu>
      ) : null}
    </>

  )
}

export default Cart;