const reducer = (state = '', action) => {
    switch (action.type) {
        case '1':
            return 1
        case '2':
            return 2
        default:
            return 3
    }
}

export default reducer
