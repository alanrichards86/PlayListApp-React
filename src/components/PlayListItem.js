import React, { Component } from 'react';
import '../styles/playListItem.css';



export default class PlayListItems extends Component {
  render(){
    return(
      <div className='PlayListItemsDiv'>
        <span><strong>User Name</strong>:  {this.props.song.userName}</span>

        <span><strong>Title</strong>:  {this.props.song.songTitle}</span>

        <span><strong>Artist</strong>:  {this.props.song.songArtist}</span>

        <span><strong>Notes</strong>:  {this.props.song.songNotes}</span>
      </div>
    );
  }
}
