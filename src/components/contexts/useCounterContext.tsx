import { useContext, createContext } from 'react';

interface Count  {
    counter: number,
    setCounter:(c: number) => void
  }


export const CounterContext = createContext<Count>({
  counter: 0,
  setCounter: () => {}
});


export const useCounterContext = () => useContext(CounterContext);

