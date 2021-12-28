import React, { useEffect } from 'react'
import { BlockchainFile } from '../blockchain/BlockchainFile';
import { useStore } from '../context/GlobalState';

export const ConWallet = () => {
    const [{ balance, accounts, web3 }, dispatch] = useStore();



    const handleSubmit = () => {
        // useEffect(() => {
            BlockchainFile(dispatch);
        // }, [])
    }

    return (
        <div>
            <button onClick={handleSubmit()}>Connect Wallet</button>
        </div>
    )
}
