
import {combineReducers} from 'redux';
// SongList

export const SongListReducers = () => {
    return [
        {
            "name": "Alai payuthe",
            "duration": "4:05"
        },
        {
            "name": "Manasa maine",
            "duration": "4:35"
        },
        {
            "name": "Thechille Penne",
            "duration": "4:45"
        },
        {
            "name": "kaduvaye kiduva pidikkunno",
            "duration": "5:25"
        }
    ]
}


//SelectSong

export const SelectSongReducers = (songSelected = null, action) => {
    if(action.type === "SELECTED_SONG") {
        return action.payload;
    }
    return songSelected;
}

export default combineReducers( {
    songs: SongListReducers,
    selectSong: SelectSongReducers
})