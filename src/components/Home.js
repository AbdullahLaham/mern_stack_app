import { AppBar, Button, Container, Grid, Grow, Paper, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Form from './form/Form'
import Posts from './posts/Posts'
import makeStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getSearchedPost } from '../actions/posts';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import Pagination from './Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search); // search params like this "?term=pizza&location=Bangalore"
}

const Home = () => {
  // const {currentPage} = useSelector((state) => state.posts)
  const [currentPage, setCurrentPage] = useState(1);
  const {posts} = useSelector((state) => state.posts)
  console.log('poooooooos', posts)
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get('searchQuery');
  const [tags, setTags] = useState([]);
  // handleKeyPress function
  const handleKeyPress = (e) => {
    if (e.charCode == 13) {
      searchPost();
    }
  }
  // Search on a Post function

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getSearchedPost({search: search && search?.trim(), tags: tags.join(',')}))
    }
  }
  const handleAdd = (tag) => {
    setTags([...tags, tag])
  }
  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }
  useEffect(() => {
    dispatch(getPosts(currentPage));
  }, [dispatch, currentId, posts]);
  return (
    <Grow in >
        <Container maxWidth='xl'>
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.mainContainer}>
            <Grid item xs={12} sm={7} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.AppbarSearch} position="static" color="inherit">
                <TextField name="search" variant='outlined' label='Search Memories' fullWidth value={search} onKeyPress={handleKeyPress} onChange={(e) => {setSearch(e?.target?.value)}}  />
                <ChipInput style={{ margin: '10px 0'}} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Tags" variant="outlined" 
                 />
                 <Button onClick={searchPost}  className={classes.searchButton} color='primary' variant="contained">Search</Button>
              </AppBar>
              <Form currentId = {currentId} setCurrentId={setCurrentId} />
              {(!searchQuery && !tags?.length) && (
                <Paper elevation={6}>
                  <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home
