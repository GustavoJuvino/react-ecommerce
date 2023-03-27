import React, { useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";
import { ButtonsDiv, Counter, CartButton } from "./styles/Buttons.styled";
import { useCounterContext } from "./contexts/useCounterContext";
import { useDisplayCartContext } from './contexts/useDisplayCartContext';

const Buttons: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const { counter, setCounter } = useCounterContext();
  const { setActivate } = useDisplayCartContext();

  useEffect(() => {
    if(disabled) {
      setTimeout(() => {
        setDisabled(false)
      }, 1400)
    }
  }, [disabled])

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
          disabled={disabled}
          onClick={() => {
            setDisabled(true);
            if(counter > 0) setActivate(true);
          }}
        >
          <CartIcon className="cart-icon"/>
          <p className="button-text" >Add to cart</p>
        </CartButton>
    </ButtonsDiv>
  )
}

export default Buttons