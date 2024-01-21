const initialData = {
    counter: 0
}

export const counterReducer = (data = initialData, action) => {
    switch(action.type) {
        case 'ADD_COUNTER':
            return {
                ...data,
                counter: data.counter + 1 
            }
        case 'MINUS_COUNTER':
            return {
                ...data,
                counter: data.counter - 1 
            }
        case 'RESET_COUNTER':
            return {
                ...data,
                counter: 0 
            }

        default:
            return data
    }
}