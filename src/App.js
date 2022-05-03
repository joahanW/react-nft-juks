import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={'Monkey D. Luffy'}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmUAECGfGDuSDcEiwHQZCKHosKvKHwvzMovVbNmV9GTg8u/0.jpg"
      />
    </div>
  );
}

export default App;
