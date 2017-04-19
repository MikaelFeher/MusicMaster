import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
	constructor(){
		super();

		this.state = {
			isPlaying: false,
			preview: null,
			playingUrl: ''
		}
	}

	playPreview(previewUrl) {
		let preview = new Audio(previewUrl);

		if (!this.state.isPlaying) {
			preview.play()
			this.setState({
				isPlaying: true,
				playingUrl: previewUrl,
				preview
			})
		} else {
			if(this.state.playingUrl === previewUrl) {
				this.state.preview.pause();
				this.setState({
					isPlaying: false
				});
			} else {
				this.state.preview.pause();
				preview.play()
				this.setState({
					isPlaying: true,
					playingUrl: previewUrl,
					preview
				});

			}
		}
	}


	render(){
		const { tracks } = this.props;

		return(
			<div>
				{
					tracks.map((track, k) => {
						const trackImg = track.album.images[0].url
						return(
							<div
								key={k}
								className="Track"
								onClick={() => this.playPreview(track.preview_url)}
							>
								<img
									src={trackImg}
									className="Track-img"
									alt="track"
								/>

								<div className="Track-play">
									<div className="Track-play-inner">
										{
											this.state.playingUrl === track.preview_url
											? <span>| |</span>
											: <span>&#9654;</span>
										}
									</div>
								</div>
								<p className="Track-text">
									{track.name}
								</p>

							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;
