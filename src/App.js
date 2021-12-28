import './App.css';
import { BalanceOf } from './components/BalanceOf';
import { ConnectedAccount } from './components/ConnectedAccount';
import { ConWallet } from './components/ConWallet';
import { Disconnect } from './components/Disconnect'
// import { MaxSupply } from './components/MaxSupply';
import { MintNFT } from './components/MintNFT';
import { useStore } from './context/GlobalState';
function App() {
  const [{ balance, contract, accounts, active, web3 }, dispatch] = useStore();
  console.log("ACtive : ", active);
  console.log("contract", contract)

  return (
    <div className="App">
      <header className="App-header">
        SAGA Coin
      </header>
      {active ?
        <div className="App-body">
          Status : Connected
          <ConnectedAccount />
          <br />
          {/* <MaxSupply /> */}
          <MintNFT />
          <BalanceOf />
          <Disconnect />
        </div> : <div className="App-body">
          Status : Disconnected
          <ConWallet />
        </div>
      }
    </div>
  );
}



export default App;
