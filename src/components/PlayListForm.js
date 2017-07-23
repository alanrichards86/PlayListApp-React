import React, { Component } from 'react';
import PlayLists from './PlayList'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state ={
      userName:'',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    }

  }
  handleUserName =(event) => {
      this.setState({userName:event.target.value})
  }

  handleSongTitle =(event) => {
      this.setState({songTitle:event.target.value})
  }

  handleSongArtist =(event) => {
      this.setState({songArtist:event.target.value})
  }

  handleSongNotes =(event) => {
      this.setState({songNotes:event.target.value})
  }

  addToList = (e) => {
      e.preventDefault();
      // this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
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
        <form className='listForm'>
          <div className="form-group">
            <input  onChange={this.handleUserName}
                type="text"
                className="form-control"
                id="user"
                placeholder="Name or User Name"
                value={this.state.userName} />
          </div>

          <div className="form-group">
            <input  onChange={this.handleSongTitle}
                type="text"
                className="form-control"
                id="user"
                placeholder="Song Title"
                value={this.state.songTitle}/>
          </div>

          <div className="form-group">
            <input  onChange={this.handleSongArtist}
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="Artist"
                    value={this.state.songArtist}/>
          </div>
          <div className="form-group">
            <input  onChange={this.handleSongNotes}
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="Notes about the Song"
                    value={this.state.songNotes}/>
          </div>
          <button className="btn btn-primary" type='submit' onClick={this.addToList}>Submit</button>
        </form>
      </div>
    );
  }
}
