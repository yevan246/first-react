export const addCounterAction = () => ({
    type: 'ADD_COUNTER'
})

export const minusCounterAction = () => ({
    type: 'MINUS_COUNTER'
})

export const resetCounterAction = () => {
    return {
        type: 'RESET_COUNTER'
    }
}