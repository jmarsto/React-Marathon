import React from 'react';
import Playlist from './Playlist'
class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedId: null
    }
    this.selectedPlaylist = this.selectedPlaylist.bind(this)
  }
  selectedPlaylist(playlistId) {
    this.setState({
      selectedId: playlistId
    })
  }

  render() {
    console.log(this.state.selectedId)
    let mappedPlaylists = this.props.playlists.map(playlist => {
      let className;

      let handleClick= () =>{
        this.selectedPlaylist(playlist.id)
      }

      if(this.state.selectedId === playlist.id) {
        className="selected"
      }

      return(
        <Playlist
          key={playlist.id}
          name={playlist.name}
          handleClick={handleClick}
          className={className}
          />
      )
    }

    )
    return(
      <div>
       {mappedPlaylists}
       </div>
    )
  }
}

export default PlaylistCollection;
