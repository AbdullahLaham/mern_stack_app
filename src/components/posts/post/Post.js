import React, { useEffect, useState } from 'react'
import makeStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getPost } from '../../../actions/posts';
const Post = ({post, setCurrentId}) => {
  // navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [likes, setLikes] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // console.log(user?.result?._id)
  useEffect(() => {
    setLikes(post?.likes?.length);
  }, [likes, post]);
  // useEffect(() => {

  // }, [post])
  return (
    // raised elevation={6} for boxShadow
    <Card className={classes.card} raised elevation={6}> 
      <Card onClick={() => {navigate(`/posts/${post?._id}`)}}>
        <CardMedia className={classes?.media} image={post?.selectedFile} title={post.title} />
        <div className={classes?.overlay} >
          <Typography variant='h5' >
            {post?.name}
          </Typography>
          <Typography variant='h6' >
            {moment(post?.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes?.overlay2} >
          {user?.result?._id == post?.creator && <Button style={{color: 'white',}} size='small' onClick={() => {setCurrentId(post?._id); console.log('clicked')}}><MoreHorizIcon fontSize='default' /></Button>}
        </div>        
        <div className={classes.details} >
          <Typography variant='body2' color="textSecondary" >{post?.tags.map((tag) => {
            return `#${tag} `
          })}</Typography>
        </div>
          <CardContent>
            <Typography  color="" variant="h4"  >{post?.title}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant='h6' className={classes.message} component='p' color="textSecondary" gutterBottom>{post?.message}</Typography>
          </CardContent>
        </Card>
        <CardActions className={classes.cardActions} >
          <Button size='small' color='primary' onClick={() => {dispatch(likePost(post?._id))}} disabled={!user}>
            <ThumbUpAltIcon fontSize="small" /> Like {likes}
          </Button>
          {user?.result?._id == post?.creator && <Button size='small' color='primary' onClick={() => {dispatch(deletePost(post?._id))}}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>}
        </CardActions>
    </Card>
  )
}

export default Post
