import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';

export const MintNFT = () => {
    const [{ contract, accounts }, dispatch] = useStore();
    const [ethValue, setethValue] = useState(0)
    const [nfts, setNfts] = useState(0)

    const mint = async () => {
        // const mintNFTs = await contract.methods._mintNFTs(nfts).send({ from: accounts[0], value: 10000000000000000 });
        const mintNFTs = await contract.methods._mintNFTs(nfts).send({ from: accounts[0], value: (1000000000000000000*(ethValue)) });
    }
    return (
        <div>
            <h4>
            BUY NFT @ 0.01/Matic
            </h4>
            Matic : <input type="number" onChange={(e) => setethValue(e.target.value)} /> <br />
            NFTs : <input type="number" onChange={(e) => setNfts(e.target.value)} />
            <br />
            <button onClick={mint}>Mint NFT</button>
        </div>
    )
}