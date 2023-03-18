import React from 'react';
import Header from './components/Header';
import "./App.css";
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <section>
      <Header />
      <Main />
    </section>
  )
}

export default App;