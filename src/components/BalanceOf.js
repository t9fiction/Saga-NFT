import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';

export const BalanceOf = () => {

    const [{ contract, accounts }, dispatch] = useStore();
    const [nfts, setNfts] = useState(null)

    const balance = async () => {
        // const mintNFTs = await contract.methods._mintNFTs(nfts).send({ from: accounts[0], value: 10000000000000000 });
        const _balance = await contract.methods.balanceOf(nfts).send({ from: accounts[0] });
    }

    return (
        <div>
            Account NFT Check : <input type="byte" onChange={(e) => setNfts(e.target.value)} />
            <button onClick={balance}>Check NFT Balance</button>
        </div>
    )
}
