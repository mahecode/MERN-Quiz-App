import React, { Component } from 'react';
import axios from 'axios';

import Paper from '../Paper/Paper';

class Questions extends Component {
    state = {
        data: '',
    }
    componentDidMount(){
        axios.get('http://localhost:4000/question')
            .then( res => {
                const { data } = res;
                this.setState({data});
            })
    }

    render(){
        return(
            <div>
                {this.state.data ? <Paper questions={this.state.data} /> : null}
            </div>
        )
    }
}

export default Questions;
