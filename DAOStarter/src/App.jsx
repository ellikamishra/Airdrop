

import { useEffect,useMemo,useSate } from "react";

//import thirdweb
import {useWeb3} from "@3rdweb/hooks";

import { ThirdwebSDK } from "@3rdweb/sdk";

const App = () => {


  const{connectWallet,address,error,provider}=useWeb3();
  console.log("Address:",address)

  //Address of wallet unknown
  if(!address){
    return(<div className="landing">
    <h1>Welcome to DAO Chai Ki Tapri</h1>
    <button onClick={()=>connectWallet("injected")} className="btn-hero">

      Connect your wallet
    </button>
  </div>);
    
  }

  //Address of user known
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
};

export default App;
