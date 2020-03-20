const initialState = {
    searchData: []
}

export default function addDataReducer (store = initialState, action) {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                searchData: action.payload
            }
        default:
            return store
    }
}