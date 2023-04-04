import React, { useRef, useEffect } from "react";
import { useCounterContext } from "./contexts/useCounterContext";
import { useDisplayCartContext } from "./contexts/useDisplayCartContext";
import { CartMenu, Item } from "./styles/Cart.styled";
import { ReactComponent as Delete } from "../assets/icon-delete.svg";

type DisplayProps = {
  cartRef?: React.RefObject<HTMLDivElement>;
};

const Cart: React.FC<DisplayProps> = ({ cartRef }) => {
  const cartMenu = useRef<HTMLDivElement>(null);
  const { activate, setActivate } = useDisplayCartContext();
  const { counter } = useCounterContext();

  useEffect(() => {
  
    let handler = (e: MouseEvent) => {
      if (
        !cartMenu.current?.contains(e.target as Node) &&
        !cartRef?.current?.contains(e.target as Node)
      ) {
        if (setActivate) setActivate(false);
      }
    };

    document.addEventListener("mousedown", (e: MouseEvent) => handler(e));

    return () =>
      document.removeEventListener("mousedown", (e: MouseEvent) => handler(e));
  });

  return (
    <>
      {activate ? (
        <CartMenu className={activate ? "open" : "closed"} ref={cartMenu}>
          <h3>Cart</h3>

          {counter > 0 ? (
            <Item>
              <img
                alt="cart-item"
                src={require("../assets/image-product-1-thumbnail.jpg")}
              />
              
              <div className="item-texts">
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {counter}
                    <span>{"$" + (125 * counter).toFixed(2)}</span>
                  </p>
                </div>

                <Delete className="delete" />
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
