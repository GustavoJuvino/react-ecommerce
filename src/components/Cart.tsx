import React, { useRef, useEffect } from 'react';
import { CartMenu, Item } from './styles/Cart.styled';
import { useCounterContext } from "./useCounterContext";
import { ReactComponent as Delete} from "../assets/icon-delete.svg"

type DisplayProps = {
  activate?: boolean;
  setActivate?:  React.Dispatch<React.SetStateAction<boolean>>;
  cartRef?: React.RefObject<HTMLDivElement>;
}

const Cart: React.FC<DisplayProps> = ({ activate, setActivate, cartRef }) => {
  const cartMenu = useRef<HTMLDivElement>(null);
  const { counter } = useCounterContext();
  
  useEffect(() => {
    console.log(counter)
  }, [counter])

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
          {/* <p>Your cart is empty</p> */}
          <Item>
            <img alt="cart-item" src={require("../assets/image-product-1-thumbnail.jpg")} />
            <div className="item-texts">
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {counter}
                  <span> $375.00 </span>
                </p>
              </div>
              <Delete className="delete"/>
            </div>
          </Item>

          <button>Checkout</button>
        </CartMenu>
      ) : null}
    </>

  )
}

export default Cart;