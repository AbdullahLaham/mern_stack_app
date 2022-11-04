import React, { useEffect, useState } from 'react'
import makeStyles from './styles'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Post from './post/Post';
const Posts = ({setCurrentId}) => {
    //styles
  const classes = makeStyles();
  const {posts, isLoading} = useSelector( (state) => state?.posts);
  console.log('posts', posts);
  if (!posts?.length && !isLoading) {
    return 'No posts'
  }
  return (
    !isLoading ? (
      <CircularProgress />
    ) : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3} >
        {posts.map((post) => {
          return (
            <Grid item key={post._id} xs={12} sm={12}  md={12} lg={4}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          )
        })}
      </Grid>

    )
  )
}

export default Posts
