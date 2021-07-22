import React from "react";
import MediaControls from "./MediaControls";

const MediaCard = ({ media, section }) => {
	const title = media.title ? media.title : media.name;
	const mediaType = media.media_type.toUpperCase();

	return (
		<div className="media-card" title={`${title} - ${mediaType}`}>
			<div className="overlay"></div>

			{media.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w780${media.poster_path}`}
					alt={`${title} Poster`}
				/>
			) : (
				<div className="filler-poster" />
			)}

			<MediaControls media={media} section={section} />
		</div>
	);
};

export default MediaCard;
