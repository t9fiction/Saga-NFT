import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';

export const ConnectedAccount = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();
    const [connected, setconnected] = useState(false);

    return (
        <div>
            {active ?
                <div>
                    <h4>Account : </h4>{accounts}
                </div> : <div>
                    Status : Disconnected
                </div>
            }
        </div>
    )
}
