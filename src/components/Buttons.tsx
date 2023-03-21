import React from "react";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";
import { ButtonsDiv, Counter, CartButton } from "./styles/Buttons.styled";

const Buttons: React.FC = () => {
  function testEvent(event: React.MouseEvent){
    console.log(event)
  }

  return (
    <ButtonsDiv>
        <Counter>
            <button>-</button>
            <p>0</p>
            <button>+</button>
        </Counter>

        <CartButton onMouseDown={(e) => testEvent(e)}>
          <CartIcon className="cart-icon"/> <p>Add to cart</p>
        </CartButton>
    </ButtonsDiv>
  )
}

export default Buttons