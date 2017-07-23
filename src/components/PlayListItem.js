import React, { Component } from 'react';
import '../styles/playListItem.css';



export default class PlayListItems extends Component {
  render(){
    return(
      <div className='PlayListItemsDiv'>
        <span>User Name:{this.props.song.userName}</span>

        <span>Title:{this.props.song.songTitle}</span>

        <span>Artist:{this.props.song.songArtist}</span>

        <span>Notes:{this.props.song.songNotes}</span>
      </div>
    );
  }
}
