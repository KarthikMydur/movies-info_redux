import axios from 'axios'

const APIKey = 'a0861d99'

export const searchMovies = (text) => dispatch => {
    dispatch ({
        type: SEARCH_MOVIES,
        payload: text
    })

}
export const fetchMovies = (text) => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(response => {
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}

export const fetchMovie = (id) => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(response => {
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}