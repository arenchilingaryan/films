function addData(dataState) {
    return {
        type: 'ADD_DATA',
        payload: dataState
    }
}

function addLikedFilm(item) {
    return {
        type: 'ON_ADD_LIKED_FILM',
        payload: item
    }
}

function addSearch(item) {
    return {
        type: 'ADD_TO_SEARCH',
        payload: item
    }
}

function deleteLikedFilms(item) {
    return {
        type: 'ON_DELETE_LIKED_FILM',
        payload: item
    }
}
export {
    addData,
    addLikedFilm,
    addSearch,
    deleteLikedFilms
}