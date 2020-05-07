export class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    async checkApi() {
        const url = await fetch (`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);

        const resp = await url.json();

        return {
            resp
        }
    }
}