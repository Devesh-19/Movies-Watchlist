import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MediaControls = ({ media, section }) => {
	const {
		removeMediaFromWatchlist,
		addMediaToWatched,
		removeMediaFromWatched,
		moveToWatchlist,
	} = useContext(GlobalContext);

	return (
		<div className="inner-card-controls">
			{section === "watchlist" && (
				<>
					<button
						className="ctrl-btn"
						onClick={() => addMediaToWatched(media)}>
						<i className="fa-fw far fa-eye" /> Watched
					</button>

					<button
						className="ctrl-btn"
						onClick={() => removeMediaFromWatchlist(media.id)}>
						<i className="fa-fw fa fa-times" /> Remove
					</button>
				</>
			)}

			{section === "watched" && (
				<>
					<button
						className="ctrl-btn"
						onClick={() => moveToWatchlist(media)}>
						<i className="fa-fw far fa-eye-slash" /> Watchlist
					</button>

					<button
						className="ctrl-btn"
						onClick={() => removeMediaFromWatched(media.id)}>
						<i className="fa-fw fa fa-times" /> Remove
					</button>
				</>
			)}
		</div>
	);
};

export default MediaControls;
