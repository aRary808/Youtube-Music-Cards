import { Plugin } from 'obsidian';

/*
 Planning this out:
 1. Mockup the design of the Music card on Figma
 2. Create a basic HTML structure for the card
 3. Style the card using CSS

*/

export default class YTMusicPlugin extends Plugin {

	musicCard : HTMLElement | null = null;

	async onload() {
		console.log('YTMusicPlugin loaded');

		// Create a music card element
		this.musicCard = document.createElement('div');
		this.musicCard.className = 'yt-music-card';
		this.musicCard.innerHTML = `
			<h2>Now Playing</h2>
			<p>Track: Unknown</p>
			<p>Artist: Unknown</p>
			<button id="play-button">Play</button>
			<button id="pause-button">Pause</button>
		`;
	}

	async onunload() {
		console.log('YTMusicPlugin unloaded');
	}
}