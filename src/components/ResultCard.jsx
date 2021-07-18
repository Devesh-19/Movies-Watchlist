import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ result }) => {
	const { addMediaToWatchlist, addMediaToWatched, watchlist, watched } =
		useContext(GlobalContext);

	const storedMedia = watchlist.find((media) => media.id === result.id);
	const storedMediaWatched = watched.find((media) => media.id === result.id);

	const watchlistDisabled = storedMedia
		? true
		: storedMediaWatched
		? true
		: false;

	const watchedDisabled = storedMediaWatched ? true : false;

	const resultDate = () => {
		if (result.release_date) {
			return result.release_date;
		} else if (result.first_air_date) {
			return result.first_air_date;
		} else {
			return "-";
		}
	};

	const title = result.title ? result.title : result.name;
	const airDate = resultDate();
	const mediaType = result.media_type;

	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{result.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
						alt={`${title} Poster`}
					/>
				) : (
					<div className="filler-poster" />
				)}
			</div>
			<div className="info">
				<div className="header">
					<h3 className="title">{title}</h3>
					<div className="result-details">
						<h4 className="release-date">
							{airDate.substring(0, 4)}▪
							<span className="result-type">{mediaType}</span>
						</h4>
					</div>
				</div>

				<div className="controls">
					<button
						disabled={watchlistDisabled}
						className="btn"
						onClick={() => addMediaToWatchlist(result)}>
						Add to Watchlist
					</button>

					<button
						disabled={watchedDisabled}
						className="btn"
						onClick={() => addMediaToWatched(result)}>
						Add to Watched
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultCard;
