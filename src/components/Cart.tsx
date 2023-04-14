import React, { useRef, useEffect } from "react";
import useClickOutside from "./hooks/useClickOutside";
import { useCounterContext } from "./contexts/useCounterContext";
import { useDisplayCartContext } from "./contexts/useDisplayCartContext";
import { CartMenu, Item } from "./styles/Cart.styled";
import { ReactComponent as Delete } from "../assets/icon-delete.svg";

type DisplayProps = {
  cartRef?: React.RefObject<HTMLDivElement>;
};

const Cart: React.FC<DisplayProps> = ({ cartRef }) => {
  const cartMenu = useRef<HTMLDivElement>(null);
  const { display, setDisplay } = useDisplayCartContext();
  const { counter, setCounter } = useCounterContext();
  const { clickOutside } = useClickOutside();

  useEffect(() => {
    if(cartRef) clickOutside(cartRef, setDisplay) ;
  },[cartRef, clickOutside, setDisplay]);

  return (
    <>
      {display ? (
        <CartMenu ref={cartMenu}>
          <h3>Cart</h3>
      
          {counter > 0 ? (
            <Item>
              <img 
                alt="cart-item"
                src={require("../assets/image-product-0-thumbnail.jpg")}
              />
                      
              <div className="item-texts">
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {counter}
                    <span>{"$" + (125 * counter).toFixed(2)}</span>
                  </p>
                </div>
                <Delete className="delete" onClick={() => setCounter(0)}/>
              </div>
            </Item>
          ) : (
            <p className="empty-cart">Your cart is empty</p>
          )}
      
          {counter > 0 ? <button>Checkout</button> : null}
        </CartMenu>
      ) : null}
    </>
  );
};

export default Cart;
