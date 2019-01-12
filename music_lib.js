/**
 * Create instances of one library and then add new tracks and playlists to the library.
 */

// Lib has many playlists and starts with an empty array 
class Library {
    constructor(name, creator) {
        this.name = name
        this.creator = creator
        this.playlists = []  // playlist objects can be added to an instance of a library
    }

    // add playlists
    addPlaylist(playlist){
        this.playlists.push(playlist)
    }
}

// Track has a title and rating and length, all which is required when creating a new track.
class Track {
    constructor(title, rating, length) {
        this.title = title // title
        this.rating = rating // an int from 1 to 5
        this.length = length // int in seconds
    }
    
}

// Each playlist has a name which is required upon creation
// A playlist has many tracks
// Each playlist has an overallRating func
// Each playlist has a totalDuration func
class Playlist{
    constructor(name) {
        this.name = name // playlist has a name
        this.tracks = [] // playlist has many tracks
    }

    get overallRating() {
        let scoreArray = []
        let ratingSum
        let ratingAvg
        let numOftracks
        this.tracks.forEach( (track, i) => {
            scoreArray.push(track.rating)
            numOftracks = i + 1
        })

        function getSum(total, num) {
            return total + num;
        }

        ratingSum = scoreArray.reduce(getSum)
        ratingAvg = ratingSum / numOftracks

        return ratingAvg
    }

    get totalDuration() {
        let lengthArray = []
        let lengthSum

        this.tracks.forEach( (track) => {
            lengthArray.push( track.length )
            console.log('track', track)
        })

        function getSum(total, num) {
            return total + num;
        }

        lengthSum = lengthArray.reduce(getSum)

        return lengthSum
    }

    // add track
    addTrack(track){
        this.tracks.push(track)
    }
}

const library1 = new Library('My first lib', 'awesome_catz')
const playlist1 = new Playlist('My first playlist')

const track1 = new Track('awesome beats', 10, 60)
const track2 = new Track('not so awesome beats', 1, 5)

playlist1.addTrack(track1)
playlist1.addTrack(track2)
library1.addPlaylist(playlist1)
