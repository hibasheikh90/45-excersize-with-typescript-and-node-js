// Defin the make_album function 
function make_albumm(artist_name: string, album_title: string, tracks? : number){
 let album: {artist: string, title: string, tracks?: number} = {
   artist: artist_name,
   title: album_title,
 };

if (tracks !== undefined){ 
    album.tracks = tracks;
}

return album;
}
// calling three functions and creating three variables with different values

let album1 = make_albumm("Hiba", "Album title 1");
let album2 = make_albumm("Haya", "Album title 2");

//third parameter
let album3 = make_albumm("Ayat", "Album title 3", 10);

// print values

console.log(album1);

console.log(album2);

console.log(album3);

