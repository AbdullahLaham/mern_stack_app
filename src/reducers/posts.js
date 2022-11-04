import { FETCH_ALL, CREATE, ADD_LIKE, UPDATE, DELETE, SEARCH, START_LOADING, END_LOADING, FETCH_ONE, COMMENT } from '../constants/actionTypes'
const reducer = (state = {isLoading: false, posts: [], post: {}}, action) => {
    switch(action.type) {
        case FETCH_ALL :
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
                
            };
        case START_LOADING:
            return { ...state, isLoading: true,}
        case END_LOADING:
            return { ...state, isLoading: false,}
        case CREATE :
            return {...state, posts: [...state?.posts, action?.payload]};
        case FETCH_ONE:
            return {...state, post: action?.payload}
        case ADD_LIKE:
        case UPDATE:
            return {...state, posts: state?.posts?.map((item) => item._id === action.payload._id ? action.payload : item)}
        case SEARCH:
            return {...state, posts: action.payload};
        case DELETE:
            return {...state, posts: state?.posts?.filter(post => post?._id !== action.payload)}
        default:
            return state;
        case COMMENT:
            return {...state, posts: state.posts.map((post) => {
                if (post?._id == action.payload?._id) {
                    return action.payload;
                } else return post;
               
            }), post: {...state.post, comments: action.payload.comments}}
    }
}
export default reducer;
