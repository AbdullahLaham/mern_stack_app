import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import makeStyles from './styles';
import React, { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { getAuth, signOut, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../utils/firebase'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../actions/auth';
const Auth = () => {
    const classes = makeStyles();
    const [isSignUp, setIsSignUp] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const initialState
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        });
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                dispatch(signUp(formData, navigate))
            } else {
                dispatch(signIn(formData, navigate))
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const googleSignIn =  (provider) => {
        signInWithPopup(auth, provider);
        const {uid, displayName, photoURL, email, accessToken} = auth?.currentUser ? auth?.currentUser : {};
        console.log('user', auth?.currentUser)
        // user details.
        const user = {
          result: {
            _id: uid,
            name: displayName,
            image: photoURL,
            email,
          },
          token: accessToken,
        }

        console.log('user' , user)
        if (user?.token) {
            localStorage.setItem('profile', JSON.stringify(user))
            dispatch({type: 'AUTH', payload: user});
            navigate('/');
        }
      }
      
      const signinWithGoogle = () => {
        try {
          const provider = new GoogleAuthProvider();
           googleSignIn(provider);
            
        }
        catch(err) {
          console.log(err)
        }
      }

      useEffect(() => {
        if (user?.token) {
            navigate('/');
            window.location.reload();
        }
      }, [])
  return (
    <div>
      <Container component='main' maxWidth="xs">
        <Paper className={classes.paper} elevation={3} >
            <Avatar className={classes.avatar} >
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5' className={classes.title} >Sign In</Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input  name='firstName' label='first name' handleChange={handleChange} half autoFocus />
                                <Input name='lastName' label='last name' handleChange={handleChange} half autoFocus/>
                            </>
                        )
                        
                    }
                    <Input name='email' label='Email' handleChange={handleChange} autoFocus type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} autoFocus type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {
                        isSignUp && (
                            <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} autoFocus type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        )
                    }
                </Grid>
                <Button type='submit' fullWidth variant="contained" color="primary" className={classes.buttonSubmit} >{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                <Button onClick={() => signinWithGoogle()}  fullWidth variant="contained" color="primary" className={classes.buttonSubmit} >Sign In With Google</Button>
                <Button onClick={() => setIsSignUp(!isSignUp)} color="primary" className={classes.transfere} fullWidth>{isSignUp ? 'Already have Account ?' : 'Dont have account ? '}</Button>
            </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Auth;
