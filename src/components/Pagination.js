import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import makeStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
const Paginate = ( { setCurrentPage, currentPage }) => {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const { numberOfPages } = useSelector((state) => state?.posts);

  return (
    
      <Pagination
        classes={classes.ul}
        count={Number(numberOfPages)}
        page={Number(currentPage) || 1}
        variant='outlined'
        color='primary'
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={ Link }
            to={`/posts?page=${item?.page}`}
            onClick={() => {setCurrentPage(item.page)}}
          />
        )}
    />   
  )
}

export default Paginate;
