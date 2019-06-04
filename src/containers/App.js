import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Background from '../media/pexels-photo-241544.jpeg'
import Footer from './Footer';

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
  whiteText: {
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
      <div className="App">
        <Grid container>
          <Grid container item>
            <Grid item xs={12}><NavBar/></Grid>
            <Grid item xs={12} className={ classes.heroContainer} align='center'><h1 className={classes.whiteText}>Hero Section</h1></Grid>
          </Grid>
          <Grid container item justify='center' className={classes.about}>
              <Grid item xs={12} sm={4} align='center'>"What feels good is often the wrong thing to do" - William Eckhardt</Grid>
              <Grid className={classes.ml4} item xs={12} sm={4} align='center'>"I don't trade for excitement; I trade to win" - Larry Hite</Grid>
              <Grid className={classes.ml4} item xs={12} sm={4} align='center'>"The trick is to differentiate between what you WANT to happen and what you KNOW will happen" - Zen and the Art of Trading</Grid>
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
