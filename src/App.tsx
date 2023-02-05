import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Likebutton />
      </header>
    </div>
  );
}

function Likebutton(){
  const [count, setCont] = useState(999);
  return <span className='likeButton'>♥ {count}</span>;
}

export default App;
