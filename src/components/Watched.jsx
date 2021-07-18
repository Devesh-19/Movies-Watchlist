import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MediaCard from "./MediaCard";

const Watched = () => {
	const { watched } = useContext(GlobalContext);

	return (
		<div className="media-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">Watched Movies/TV Shows</h1>
				</div>

				{watched.length ? (
					<div className="media-grid">
						{watched.map((media) => (
							<MediaCard
								key={media.id}
								media={media}
								section="watched"
							/>
						))}
					</div>
				) : (
					<h2 className="no-movies">
						There is nothing in your watched list.
					</h2>
				)}
			</div>
		</div>
	);
};

export default Watched;
