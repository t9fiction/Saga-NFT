import React from 'react'
import { loadState } from '../context/Action';
import { useStore } from '../context/GlobalState';

export const Disconnect = () => {
    const [{ active}, dispatch] = useStore();
    const disconnetWallet = () => {
        console.log("activea",active);
        dispatch(loadState(false));
    }
    return (
        <div>
            <button onClick={disconnetWallet}>Disconnect</button>
        </div>
    )
}
