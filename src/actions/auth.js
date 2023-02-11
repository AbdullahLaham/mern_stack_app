import * as api from '../api'
import {AUTH} from '../constants/actionTypes'
export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        // console.log('signup')
        const { data } = await api.signIn(formData);
        localStorage.setItem('profile', JSON.stringify(data));
        console.log(data)
        dispatch({type: AUTH, payload: data});
        navigate('/')
    }
    catch (error) {
        console.log(error);
    }
}
export const signUp = (formData, navigate) => async (dispatch) => {
    console.log('signup');
    try {
        const { data } = await api.signUp(formData);
        localStorage.setItem('profile', JSON.stringify(data))
        dispatch({type: AUTH, payload: data});
        navigate('/')
    }
    catch (error) {
        console.log(error)
    }
}
// {type: 'signup', payload: {formData, navigate}}
// {type: 'signin', payload: {formData, navigate}}