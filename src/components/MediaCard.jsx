import React from "react";
import MediaControls from "./MediaControls";

const MediaCard = ({ media, section }) => {
	const title = media.title ? media.title : media.name;

	return (
		<div className="media-card">
			<div className="overlay"></div>

			{media.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
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
