import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({ 
  
}))

function Header() {

  const classes = useStyles();

  return (
    <nav align='center'>
      <Typography variant='h1'>Judkins Park</Typography>
      <Link to='/'> Schedule </Link>
      <Link to='/polo'> Polo </Link>
      <Link to='/rollerhockey'> Roller Hockey </Link>
      <Link to='/futsal'> Futsal </Link>
      <Link to='/skating'> Skating </Link>
      <Link to='/history'> History </Link>
      <Link to='/rules'> Rules </Link>
      <Link to='/contact'> Contact </Link>
    </nav>
    
  )
}

export default Header
