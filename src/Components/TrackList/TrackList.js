import React from 'react';
import "./TrackList.css";

const tracks = [
    { 
        name: "Tiny Dancer",
        album: "Elton John | Madman Across The Water"
    },
    { 
        name: "Tiny Dancer",
        album: "Tim McGraw | Love Story"
    },
    { 
        name: "Tiny Dancer",
        album: "Ben Folds | Ben Folds Live"
    }
]

export class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div classList="TrackList">
                { tracks.map(track => {
                    return (
                        <div>
                            <h3>{track.name}</h3>
                            <p>{track.album}</p>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}