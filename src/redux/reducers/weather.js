const initialState = {
    currentInput: '',
    item: {},
    loading: false,
}




const weather = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CURRENT_INPUT':
            return {
                ...state,
                currentInput: action.payload
            }
        case 'SET_CURRENT_ITEM':
            return {
                ...state,
                item: action.payload,

            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }

        default: return state
    }

}



export default weather;