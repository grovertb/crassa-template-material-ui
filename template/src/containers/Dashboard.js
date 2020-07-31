import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import { Menu as MenuIcon } from '@material-ui/icons'

export default (props) =>(
  <>
    <AppBar position='static'>
      <Toolbar>
        <IconButton aria-label='Menu' color='inherit'>
          <MenuIcon />
        </IconButton>
        <Typography color='inherit' variant='h5'>
          crassa-material-ui
        </Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </>
)
