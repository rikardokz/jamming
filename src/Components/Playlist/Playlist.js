import React from 'react';
import { TrackList } from "../TrackList/TrackList.js";
import "./Playlist.css"

export class Playlist extends React.Component {


    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}/>
                < TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}