import React, { Component } from 'react';
import logo from '../logo.svg';
import NavBar from './NavBar.js';
import PlayLists from './PlayList';
import PlayListForm from './PlayListForm';
import '../styles/App.css';
import '../styles/NavBar.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      value:''
    }

  }



  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='App-Body'>
          <PlayListForm />
          <PlayLists />
        </div>
      </div>
    );
  }
}

export default App;
