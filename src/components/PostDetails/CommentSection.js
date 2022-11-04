import React, {useState, useRef, useEffect} from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles'
import {commentPost, getPost} from '../../actions/posts'
import { useParams, useNavigate } from 'react-router-dom';
const CommentSection = () => {
  const navigate = useNavigate();
    console.log('comment section');
    const dispatch = useDispatch();
    const {post} = useSelector((state) => state.posts);
    const [comments, setComments] = useState();
    // const [comment, setComment] = useState({creator: JSON.parse(localStorage.getItem('profile'))?.result?._id, text: '', postId: post?._id,});
    const [value, setValue] = useState('');
    const { id } = useParams();
    // styles
    const classes = useStyles();

    const handleClick = async (e) => {
      // console.log('commentwwwwwwwwwwwwwwwwwwwwwwwwwwww', comment)
      const newComments = await dispatch(commentPost(post?._id, value));
      setComments(newComments);
      console.log(newComments, 'newComments');
      setValue('');
    }

    useEffect(() => {
      dispatch(getPost(id));
      setComments(post?.comments);
    }, [dispatch, navigate]);
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <Typography gutterBottom variant='h6' >Comments</Typography>
        {comments?.length ? (comments.map((comment, i) => {
            return (
                <Typography key={i} gutterBottom variant='subtitle1'>
                    {comment}
                </Typography>
            )
        })) : (
          <Typography gutterBottom variant='h6'>There is no comments yet</Typography>
        )}

      </div>
      <div style={{ width: '70%', }}>
        <Typography gutterBottom variant='h6'>
            Write a comment
        </Typography>
        <TextField 
            fullWidth
            rows={4}
            variant='outlined'
            label='Comment'
            multiline
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <Button style={{marginTop: '10px',}} fullWidth disabled={!value} variant='contained' onClick={handleClick} color='primary' >Comment</Button>
      </div>
    </div>
  )
}

export default CommentSection
