import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './ABI';
import { loadAccounts, loadContract, loadState, loadWeb3 } from '../context/Action';

export const BlockchainFile = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            let web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            const accounts = await web3.eth.getAccounts();

                dispatch(loadWeb3(web3));
                dispatch(loadState(true));
                dispatch(loadContract(contract));
                dispatch(loadAccounts(accounts));
        }

    } catch (error) {
        console.log("Error : ", error)
    }
}