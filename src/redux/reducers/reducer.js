const initialData = {
    todos: [],
    asd: [],
    isLoggedIn: false
}

// action = {
//     type: 'ADD_TODO',
//     payload: {
//         title: 'asda',
//         id: '123123'
//     }
// }

export const reducer = (data = initialData, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...data,
                todos: [...data.todos, action.payload]
            }

        case 'DELETE_TODO':
            return {
                ...data,
                todos: data.todos.filter((todo) => todo.id !== action.payload)
            }

        case 'DONE_TODO':
            return {
                ...data,
                todos: data.todos.map((todo) => {
                    if(todo.id == action.payload.id) {
                        todo.done = action.payload.checked
                    }
                    return todo;
                })
            }

        default: 
            return data
    }
    // if(action.type === 'ADD_TODO'){
    //     // ...
    // }else if (action.type === 'DELETE_TODO') {
    //     // ....
    // } else {
    //     // ...
    // }

}