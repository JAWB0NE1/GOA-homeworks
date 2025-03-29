let playlist = ["Song A", "Song B", "Song C", "Song D"];
function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}
function removeLastSong() {
  playlist.pop();
  return playlist;
}
function moveSongs() {
  playlist.copyWithin(playlist.length - 2, 0, 2); 
  return playlist;
}
function combinePlaylists(secondPlaylist) {
  let combinedPlaylist = playlist.concat(secondPlaylist);
  return combinedPlaylist; 
}
console.log("Initial playlist:", playlist);
console.log("Add song:", addSong("Song E")); 
console.log("Remove last song:", removeLastSong()); 
console.log("Move songs:", moveSongs()); 
console.log("Combine playlists:", combinePlaylists(["Song F", "Song G"])); 