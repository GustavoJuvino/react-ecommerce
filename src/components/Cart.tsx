import React, { useRef, useState, useEffect } from 'react';
import { useOnClickOutside  } from 'usehooks-ts';
import { CartMenu } from './styles/Cart.styled';

type DisplayProps = {
  activate: boolean;
  setActivate:  React.Dispatch<React.SetStateAction<boolean>>;
  cartRef: React.RefObject<HTMLDivElement>;
}

const Cart: React.FC<DisplayProps> = ({ activate, setActivate, cartRef }) => {

  const cartMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent)=>{
      if(!cartRef.current?.contains(e.target as Node) && !cartMenu.current?.contains(e.target as Node)){
        setActivate(false);
      }
    };

    document.addEventListener("mousedown", (e: MouseEvent) => handler(e));
    

    return() =>{
      document.removeEventListener("mousedown", (e: MouseEvent) => handler(e));
    }

  });

  return (
    <>
      {activate ? (
        <CartMenu ref={cartMenu}> 
          <h3>Cart</h3>
          <p>Your cart is empty</p>
        </CartMenu>
      ) : null}
    </>

  )
}

export default Cart;