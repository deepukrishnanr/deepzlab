import React from 'react';

import {connect} from 'react-redux';

const SongDetail = ({selectedSong}) => {


    if (!selectedSong){
        return <div>Please select a song </div>;
    }
        return (
            <div>
                <h2>Song details</h2>
                <div>Title: {selectedSong.name} </div>
                <div>Duration: {selectedSong.duration}</div>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectSong};
}
export default connect(mapStateToProps)(SongDetail);