// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import './App.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/styles';

// Navigation
import NavBar from './NavBar';

// Footer
import Footer from '../components/Footer';

//Content
import Background from '../media/pexels-photo-241544.jpeg'
import EarnIcon from '../components/Icons/EarnIcon'
import ImproveIcon from '../components/Icons/ImproveIcon'
import LearnIcon from '../components/Icons/LearnIcon'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heroContainer: {
    padding: '150px 0 150px 0',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    color: '#feffff',
    fontSize: '50px',
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
    }   
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Grid container>
          <Grid container item>
            <Grid item xs={12}><NavBar/></Grid>
            <Grid item xs={12} className={ classes.heroContainer} align='center'><h1 className={classes.title}>TradingSchool</h1></Grid>
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
          <Grid item xs={12} align='center' className={classes.footer}><Footer/></Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App)
