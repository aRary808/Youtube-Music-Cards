import { Plugin } from 'obsidian';
import { Innertube, UniversalCache } from 'youtubei.js';

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
		this.musicCard.className = 'music-card';
		this.musicCard.innerHTML = `
			<h2>Now Playing</h2>
			<p>Track: Unknown</p>
			<p>Artist: Unknown</p>
			<button id="play-button">Play</button>
			<button id="pause-button">Pause</button>
		`;
		this.registerObsidianProtocolHandler("youtube-fetch", this.loadMusicData.bind(this));
		//window.open = )
	}

	async onunload() {
		console.log('YTMusicPlugin unloaded');
	}

	async loadMusicData(vidId : string) {
		const yt = await Innertube.create({ cache: new UniversalCache(true) });
		const videoInfo = await yt.actions.execute('/player', {
			vidId,
			client: 'YTMUSIC',
			parse: true			
	});
	return videoInfo;
	}
}