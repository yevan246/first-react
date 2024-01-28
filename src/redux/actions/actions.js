import axios from "axios"

export const addTodoAction = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}

export const deleteToDoAction = (data) => {

    return {
        type: 'DELETE_TODO',
        payload: data
    }
}

export const doneToDoAction = (data) => {
    return {
        type: 'DONE_TODO',
        payload: data
    }
}


export const fetchQuotesAction = () => async (dispatch) => {
    const res = await axios.get('https://dummyjson.com/quotes')

    dispatch({
        type: 'SET_QUOTES',
        payload: res.data.quotes
    })

}

// export const fetchQuoteesAction = () => {
//     return async (dispatch) => {

//     }
    
// }