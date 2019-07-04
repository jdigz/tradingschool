// React
import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Home.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/styles';
//Content
import Background from '../../media/pexels-photo-241544.jpeg'
import EarnIcon from '../Icons/EarnIcon'
import ImproveIcon from '../Icons/ImproveIcon'
import LearnIcon from '../Icons/LearnIcon'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heroContainer: {
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title : {
    padding: '40vh',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    color: '#fff',
  },
  about: {
    width: '80%',
    marginLeft: '10%', //(100%-80%)/2 = 10%
    padding: '10rem 0',
    textAlign: 'center',
  },
  ml4: {
    marginLeft: '4%',
  }
})

function Home(props) {
  const { classes } = props
  return (
    <Grid container>
      <Grid container item>
        <Grid item xs={12} className={ classes.heroContainer} align='center'>
          <Typography className={classes.title} variant='h1'>TradingSchool</Typography>
        </Grid>
      </Grid>
      <Grid container justify='center' className='gray-font hookline-container'>
        <Grid item xs={12} align='center'><div ><h1 className='hookline gray-font'>Start Learning Today</h1></div></Grid>
        <Grid item xs={4} align='center'>
          <LearnIcon width={100} fill={'#3a3a3a'}/>
          <h2>Learn</h2>
          <p>Learn directly from experts!</p>
        </Grid>
        <Grid item xs={4} align='center'>
          <ImproveIcon width={100} fill={'#3a3a3a'}/>
          <h2>Improve</h2>
          <p>Imrpove your trading results fast!</p>
        </Grid>
        <Grid item xs={4} align='center'>
          <EarnIcon width={100} fill={'#3a3a3a'}/>
          <h2>Earn</h2>
          <p>Earn more money than you thought possible!</p>
        </Grid>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)
