import decode  from 'jwt-decode';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState();
    // dispatch
    const dispatch = useDispatch();
    // navigate 
    const navigate = useNavigate();
    // location
    const location = useLocation();
    
    // logout function 
    const handleLogout = () => {
      signOut(auth);
      console.log('loggedOut successfully');
      localStorage.clear();
      dispatch({type: 'LOGOUT'})
      navigate('/auth');
      setUser(null);
      localStorage.clear();
    }
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
      const token = user?.token;
      // JWT
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < (new Date).getTime()) {
          handleLogout();
        }
      }
    }, [location])
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer} >
            <img className={classes.image} src='/images/memories.png' alt="icon" height="60" />
            <Typography component={Link} to="/"  className={classes.heading} variant="h2" align="center">Memories</Typography>
                
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.userName} src={user?.image}>
                  {user?.result?.name?.charAt(0)}
                </Avatar>
                <Typography variant="h6" className={classes.userName}>{user?.result?.name}</Typography>
                <Button variant='contained' className={classes.logout} color="secondary" onClick={handleLogout}>Logout</Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant='contained' color="primary">
                Sign in
              </Button>
            )}
        </Toolbar>
        </AppBar>
  )
}

export default Navbar
