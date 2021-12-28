export default (state, action) => {
    switch (action.type) {
        case 'LOAD_WEB3':
            return {
                ...state,
                web3: action.payload
            }

        case 'LOAD_CONTRACT':
            return {
                ...state,
                contract: action.payload
            }

        case 'LOAD_ACCOUNTS':
            return {
                ...state,
                accounts: action.payload
            }
        case 'LOAD_STATE':
            return {
                active: action.payload
            }
    }
}