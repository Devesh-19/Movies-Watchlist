import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
	const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	const handleChange = (e) => {
		const { value } = e.target;
		setQuery(value);
	};

	useEffect(() => {
		if (query) {
			axios
				.get(
					`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`
				)
				.then((res) => {
					setResults(res.data.results);
				})
				.catch((error) => {
					setResults([]);
				});
		} else {
			setResults([]);
		}
	}, [query, API_KEY]);

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Search for a movie"
							autoFocus
							value={query}
							onChange={handleChange}
						/>
					</div>
					{results.length > 0 && (
						<div className="results">
							{results.map(
								(result) =>
									(result.media_type === "movie" ||
										result.media_type === "tv") && (
										<ResultCard
											key={result.id}
											result={result}
										/>
									)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Add;
