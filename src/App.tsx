import React from 'react';
import Header from './components/Header';
import "./App.css";
import Main from './components/Main';
import { CounterContext } from './components/useCounterContext';

const App: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <section>
      <CounterContext.Provider  value= {{ counter, setCounter }}>
        <Header />
        <Main />
      </CounterContext.Provider>
    </section>
  )
}

export default App;