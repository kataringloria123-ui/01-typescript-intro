
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'new Song';

const{song: anothersong, 
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details;


//console.log('Song:', anothersong);
//console.log('Duration',duration);
//console.log('Author', author);
//console.log('Song:', audioPlayer.song);
//console.log('Duration:', audioPlayer.songDuration);
//console.log('Author:', audioPlayer.details.author);

const [p1,p2,trunks = 'Not found']: string[] = ['Goku','Vegeta','Trunk'];

console.log('Personaje 3:', trunks)


export{};