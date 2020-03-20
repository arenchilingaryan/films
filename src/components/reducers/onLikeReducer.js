const initialState = {
    onLike: []
}

export default function onLikeReducer (store = initialState, action) {
    switch (action.type) {
        case 'ON_ADD_LIKED_FILM':
            return {
                onLike: [...store.onLike, action.payload]
            }
        case 'ON_DELETE_LIKED_FILM':
            const before = store.onLike.slice(0, action.payload)
            const after = store.onLike.slice(action.payload + 1)
            const arr = [...before, ...after]
            return {
                onLike: arr
            }
        default:
            return store
    }
};