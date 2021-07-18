import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MediaControls = ({ media, section }) => {
	const { removeMediaFromWatchlist } = useContext(GlobalContext);

	return (
		<div className="inner-card-controls">
			{section === "watchlist" && (
				<>
					<button
						className="ctrl-btn"
						onClick={() => removeMediaFromWatchlist(media.id)}>
						<i className="fa-fw fa fa-times" /> Remove
					</button>

					<button className="ctrl-btn">
						<i className="fa-fw far fa-eye" /> Watched
					</button>
				</>
			)}
		</div>
	);
};

export default MediaControls;
