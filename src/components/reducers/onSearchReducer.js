const initialState = {
    search: []
}

export default function onSearchReducer(store = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_SEARCH':
            return {
                search: [...store.search, action.payload]
            }
        default:
            return store
    }
}