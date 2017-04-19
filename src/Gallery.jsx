import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
	constructor(){
		super();

		this.state = {
			isPlaying: false
		}
	}
	

	playPreview(previewUrl) {
		let preview = new Audio(previewUrl);

		if (this.state.isPlaying) {
			preview.pause();
			this.setState({isPlaying: false});		
		} else {
			preview.play()
			this.setState({isPlaying: true});
		}
	}


	render(){
		console.log('gallery props', this.props);
		const { tracks } = this.props;


		return(
			<div>
				{
					tracks.map((track, k) => {
						console.log('track', track);
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