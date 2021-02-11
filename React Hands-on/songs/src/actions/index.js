
export const selectSong = (selectedSong) => {
    return {
        type: "SELECTED_SONG",
        payload: selectedSong
    }
}