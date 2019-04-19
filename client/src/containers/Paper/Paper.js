import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/SendRounded';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: 500,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class PaperSheet extends Component {

  state = {
    selectedAnswer: '',
    count: 0,
    i: 0,
  }

 

  handleChange = (event) =>{
    this.setState({selectedAnswer: event.target.value});
  }

  handleButton = (e)=>{
    let { answer } = this.props.questions[this.state.i];
    if(this.state.selectedAnswer === answer){
      this.setState((prevState, props)=>({
        count : prevState.count + 1
      }))
    }
    this.setState((prevState, props)=> ({
      i: prevState.i + 1
    }))
    // console.log(this.state.count);
    console.log(this.state.i)
  }


  render(){
    const { classes } = this.props;

    console.log(this.props.questions)
    let quesData = null;
    let options = null;
    let optionsElement = null;
    if(this.state.i < 7){
      quesData = this.props.questions[this.state.i].question;
      options = this.props.questions[this.state.i].options.map( element => {
        return element;
      });
      optionsElement = options.map( (ele,key) => {
        return (
          <FormControlLabel key={key} value={ele.option} control={<Radio />} label={ele.option} />
        )
      })
    } else{
      this.setState({i: 0})
    }
    

    return (
      <div>
      <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: '80vh'}} >
        <Paper className={classes.root} elevation={8}>
          <Typography variant="h5" component="h3">
            {quesData}
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                  className={classes.group}
                  onChange={this.handleChange}>
                {optionsElement}
              </RadioGroup>
              <Fab onClick={this.handleButton} color="secondary" size="large" aria-label="Add">
            <SendIcon />
          </Fab>
          </FormControl>
        </Paper>
        </Grid>
      </div>
    );
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);