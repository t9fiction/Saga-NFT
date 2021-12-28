import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';

export const MaxSupply = () => {
    const [{ accounts, contract }, dispatch] = useStore();

    const [maxSupply, setmaxSupply] = useState(0)
    
    const setSupply = async () => {
        setmaxSupply(await contract.methods.MAX_SUPPLY().call());
    }

    setSupply()

    return (
        <div>
            Total Mintable NFT : {maxSupply}
        </div>
    )
}
