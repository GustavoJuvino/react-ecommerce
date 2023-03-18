import React from 'react';
import Header from './components/Header';
import "./App.css";
import Images from './components/Images';

const App: React.FC = () => {
  return (
    <section>
      <Header />
      <Images />
    </section>
  )
}

export default App;