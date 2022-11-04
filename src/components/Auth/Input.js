import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff, VisibilityOffOutlined } from '@material-ui/icons'
const Input = ({name, half, autoFocus, type, label, required, handleChange, handleShowPassword}) => {
    
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField name={name} required variant='outlined' fullWidth label={label} autoFocus={autoFocus} type={type} InputProps={name === "password" && {
            endAdornment: (
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <VisibilityOffOutlined /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }} onChange={handleChange} xs={6} />
    </Grid>
  )
}

export default Input





