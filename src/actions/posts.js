import * as api from '../api'
import { FETCH_ALL, CREATE, SEARCH, UPDATE, ADD_LIKE, DELETE, START_LOADING, END_LOADING, FETCH_ONE, COMMENT } from '../constants/actionTypes'

export const getPost = (id) => async (dispatch) => { // now we created a function that returns another function to use async await capabilities
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.getPost(id);
        console.log('dataaaaaaaaaaa', data);
        dispatch({type: FETCH_ONE, payload: data});
        dispatch({type: END_LOADING})
    } catch (error) {
        console.log(error.message);
    }
}


export const getPosts = (page) => async (dispatch) => { // now we created a function that returns another function to use async await capabilities
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.getPosts(page);
        console.log('dataaaaaaaaaaa', data);
        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING})
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.createPost(post);
        console.log('postpostpostpostpostpostpost');
        dispatch({ type: CREATE, payload: data });
        dispatch({type: END_LOADING})
    }
    catch (error) {
        console.log(error);
    }
}
export const commentPost = (id, value) => async (dispatch) => {
    try {
        // dispatch({type: START_LOADING})
        const {data} = await api.commentPost(id, value);
        dispatch({type: COMMENT, payload: data});
        // dispatch({type: END_LOADING})
        console.log('oppo', data);
        return data?.comments;
    }
    catch (error) {
        console.log(error);
    }
}
export const getSearchedPost = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data: { data }} = await api.searchPost(searchQuery);
        console.log('dd', data);
        dispatch({ type: SEARCH, payload: data });
        dispatch({type: END_LOADING})
    }
    catch (error) {
        console.log(error)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
        dispatch({type: END_LOADING})
    }
    catch(error) {
        console.log(error)
        }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id} );
        dispatch({type: END_LOADING})
    }
    catch (error) {
        console.log(error)
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data} = await api.likePost(id)
        dispatch({type: ADD_LIKE, payload: data});
        dispatch({type: END_LOADING})
    }
    catch (error) {
        console.log(error)
    }
}
