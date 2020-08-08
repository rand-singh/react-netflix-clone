import React from 'react';
import Row from './components/Row';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>React Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" />     
      <Row title="Trending Now" />     
    </div>
  );
}

export default App;
