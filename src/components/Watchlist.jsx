import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MediaCard from "./MediaCard";

const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);

	return (
		<div className="media-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">My Watchlist</h1>
				</div>

				{watchlist.length ? (
					<div className="media-grid">
						{watchlist.map((media) => (
							<MediaCard
								key={media.id}
								media={media}
								section="watchlist"
							/>
						))}
					</div>
				) : (
					<h2 className="no-movies">
						You're all caught up with your watchlist!
					</h2>
				)}
			</div>
		</div>
	);
};

export default Watchlist;
