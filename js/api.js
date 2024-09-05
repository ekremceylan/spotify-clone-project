import { renderSongs } from "./ui.js";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&listId=ip-country-chart-TR";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8e83daff9dmsh6dcb0945f67d5eep10afb4jsn8fdf795302d8",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();
    //    console.log(data)

    this.songs = data.tracks;
    // console.log(this.songs)

    renderSongs(this.songs);
  }
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );

    const data = await res.json();

    const newData = data.tracks.hits.map((song) => ({ ...song.track }));
    console.log(newData);

    renderSongs(newData);
  }
}
