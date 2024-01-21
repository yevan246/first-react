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

