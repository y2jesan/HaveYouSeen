export const logIn = () => {
    return {
        type: 'LOGIN'
    };
};
export const logOut = () => {
    return {
        type: 'LOGOUT'
    };
};
export const setMostPopularPage = (pageNo) => {
    return {
        type: 'SET_PAGE_NAME',
        payload: pageNo
    };
};