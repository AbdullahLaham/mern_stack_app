import React, { useEffect, useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core';

import makeStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
const Form = ({setCurrentId, currentId}) => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [theTags, setTheTags] = useState('');
  const post = useSelector(state => currentId ? state.posts.find(post => post._id === currentId) : null);
  
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [currentId])
  const [postData, setPostData] = useState({
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
      creator: '',
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setPostData({...postData, tags: });
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    }
    else { 
      dispatch(createPost({ ...postData, tags: theTags.split(" ") , name: user?.result?.name, creator: user?.result?._id }));
    }
    clear();
  }
  const clear = () => {
    setCurrentId(null);
    setPostData({
    title: '',
    message: '',
    tags: "",
    selectedFile: '',
  });
  
  }
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align="center">Please SignIn to create your own memories and like other othe's memories</Typography>
      </Paper>
    )
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' onValidate  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6' >Creating a Memory</Typography>
        {/* <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData?.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} /> */}
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData?.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData?.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={theTags} onChange={(e) => setTheTags(e.target.value)} />
        <div className={classes.fileInput}><FileBase style={{display: 'none',}} type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant='outlined'  color='primary ' size='large' type='submit' fullWidth >Submit</Button>
        <Button className={classes.buttonSubmit} variant='contained'  color='secondary ' size='small'onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
