import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import JuksList from './components/JuksList';
import Main from './components/Main';

// npm install axios

function App() {
  const [juksData, setJuksListData] = useState([]);
  const [selectedJuks, setSelectedJuks] = useState(0);
  useEffect(() => {
    const getMyNft = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xc4c8AA393eceefC11b576F9321380Ce64282b396&order_direction=asc'
      );
      let data = openseaData.data.assets.sort(
        (a, b) => a.token_id - b.token_id
      );
      console.log(data, '🐼');
      setJuksListData(data);
    };
    getMyNft();
  }, []);
  return (
    <div className="app">
      <Header />
      {juksData.length > 0 && (
        <>
          <Main selectedJuks={selectedJuks} juksListData={juksData} />
          <JuksList juksListData={juksData} setSelectedJuks={setSelectedJuks} />
        </>
      )}

      {/* <CollectionCard
        id={0}
        name={'Monkey D. Luffy'}
        traits={[
          {
            value: 7,
          },
        ]}
        image="https://ipfs.thirdweb.com/ipfs/QmUAECGfGDuSDcEiwHQZCKHosKvKHwvzMovVbNmV9GTg8u/0.jpg"
      /> */}
    </div>
  );
}

export default App;
