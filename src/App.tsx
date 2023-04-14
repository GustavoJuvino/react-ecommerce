import React from 'react';
import Header from './components/Header';
import "./App.css";
import Main from './components/Main';
import { CounterContext } from './components/contexts/useCounterContext';
import { DisplayCartContext } from './components/contexts/useDisplayCartContext';

const App: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  const [display, setDisplay] = React.useState(false);

  return (
    <section>
      <CounterContext.Provider  value= {{ counter, setCounter }}>
        <DisplayCartContext.Provider value={{ display, setDisplay}}>
          <Header/>
          <Main />
        </DisplayCartContext.Provider>
      </CounterContext.Provider>
    </section>
  )
}

export default App;