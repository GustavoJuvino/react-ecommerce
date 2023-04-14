import { useContext, createContext } from 'react';

interface CartDisplay  {
    display: boolean,
    setDisplay:(cart: boolean) => void
  }


export const DisplayCartContext = createContext<CartDisplay>({
  display: false,
  setDisplay: () => {}
});


export const useDisplayCartContext = () => useContext(DisplayCartContext);

