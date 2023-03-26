import React, { useRef } from "react";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";
import { ButtonsDiv, Counter, CartButton } from "./styles/Buttons.styled";
import { useCounterContext } from "./useCounterContext";

const Buttons: React.FC = () => {
  const cartButton = useRef<HTMLButtonElement>(null);
  const { counter, setCounter } = useCounterContext();

  function clickEffect(event: React.MouseEvent){
    if(event.type === "mousedown"){
      cartButton.current?.classList.add("button-clicked");
    } else if(event.type === "mouseup") {
      setTimeout(() => {
        cartButton.current?.classList.remove("button-clicked");
      }, 1500)
    }
  }

  return (
    <ButtonsDiv>
        <Counter>
            <button onClick={() => counter > 0 ? setCounter( counter - 1 ) : null}> 
              - 
            </button>
            <span>{counter}</span>
            <button onClick={() => setCounter( counter + 1 )}> + </button>
        </Counter>

        <CartButton 
          ref={cartButton}
          onMouseDown={(e) => clickEffect(e)}
          onMouseUp={(e) => clickEffect(e)}
        >
          <CartIcon className="cart-icon"/>
          <p className="button-text" >Add to cart</p>
        </CartButton>
    </ButtonsDiv>
  )
}

export default Buttons