import React, { Component } from 'react';
import PlayListItems from './PlayListItem.js';


export default class PlayLists extends Component{
  constructor(props){
    super(props);

    this.state={
      songs:[]
    }
  }


    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
    }
    renderSongs = () =>{
        return this.state.songs.map(song => (
          <PlayListItems key={song._id} song={song} />
        )
      );
    }

  render(){

    return(
      <div className='PlayListDiv'>
        <div className="songs">{this.renderSongs()}</div>
        {console.log(this.state.songs)}
        <button onClick={this.fetchData}>Get Playlists</button>
      </div>
    )
  }
  componentDidMount(){
    console.log('hey');
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  };
}


// renderSongs = () =>{
//     return this.state.songs.map(e => (
//       <div className="song">{e.id}</div>
//     )
//   );
// }
