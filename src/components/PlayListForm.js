import React, { Component } from 'react';
import PlayLists from './PlayList'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.setState ={
      userName:'',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    }

  }
  handleInputChange(event) {
      this.setState({value:event.target.value})

    }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }
  render() {
    return(
      <div className='PlayListFormDiv'>
        <input  onChange={this.handleUserName}
                type="text"
                className="form-control"
                id="user"
                placeholder="Name or User Name"
                value={this.userName}/>
      </div>
    );
  }
}
