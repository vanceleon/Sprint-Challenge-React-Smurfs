import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import axios from 'axios';
import {Route} from 'react-router-dom';

const url = "http://localhost:3333/smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs:[],
      url: url,
    };
  }

  componentDidMount () {
    axios.get(this.state.url).then(response => {
      this.setState({
        smurfs: response.data
      });
    });
  }




  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          component={Header}
          />
        <Route
        path="/smurfs"
        render={props => {
          return <SmurfForm />
        }}
        />       
        <Route
          path="/smurfs"
          render={props => {
            return <Smurfs 
          smurfs={this.state.smurfs} />
          }}
          />
        
      </div>
    );
  }
}

export default App;
