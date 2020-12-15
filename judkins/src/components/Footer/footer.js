import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  copyright: {
    marginTop: 10
  }

}))

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body2"
        color="textSecondary"
        align="center" 
        className={classes.copyright}> Designed by <a href="" target="blank">Jake Levin</a></Typography>
      <Typography
        className={classes.copyright}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="mailto:christopherhamersly@gmail.com">
          Chris Hamersly
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  )
}

export default Footer
