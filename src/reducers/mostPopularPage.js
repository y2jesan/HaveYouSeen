const mostPopularPageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SET_PAGE_NAME':
            return state = action.payload;
        default:
            return state;
    }
}
export default mostPopularPageReducer;