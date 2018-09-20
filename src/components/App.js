import React from 'react';
import PlaylistCollection from './PlaylistCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="small-6 columns">
          <PlaylistCollection
            playlists={this.props.data.playlists}/>
        </div>
        <div className="small-6 columns">
          {this.props.data.songs[0].name}
        </div>
      </div>
    );
  }
}

export default App;
