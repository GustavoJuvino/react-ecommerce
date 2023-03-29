import { useContext, createContext } from 'react';

interface CartDisplay  {
    activate: boolean,
    setActivate:(c: boolean) => void
  }


export const DisplayCartContext = createContext<CartDisplay>({
  activate: false,
  setActivate: () => {}
});


export const useDisplayCartContext = () => useContext(DisplayCartContext);

