import React, {useState} from "react";
import styles from "..\App\App.module.css";

function App () {
  const  [searchResults,setSearchResults] = useState([{
    name: "Example Playlist Name 1",
    artist: "Example Artist Name 1",
    album: "Example Album Name 1", 
    id: 1
  },
  {
    name: "Example Playlist Name 2",
    artist: "Example Artist Name 2",
    album: "Example Album Name 2", 
    id: 2
  },
  {
    name: "Example Playlist Name 3",
    artist: "Example Artist Name 3",
    album: "Example Album Name 3", 
    id: 3
  }
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name")
  const [playlistTracks,setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Artist Name 1",
      album: "Example Album Name 1", 
      id: 1
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Artist Name 2",
      album: "Example Album Name 2", 
      id: 2
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Artist Name 3",
      album: "Example Album Name 3", 
      id: 3
    }
  ])
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles["App-playlist"]}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={searchResults}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;