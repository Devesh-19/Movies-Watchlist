import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// ACTION TYPE
export const Actions = {
	addMediaToWatchlist: "ADD_MEDIA_TO_WATCHLIST",
	removeMediaFromWatchlist: "REMOVE_MEDIA_FROM_WATCHLIST",
	addMediaToWatched: "ADD_MEDIA_TO_WATCHED",
	moveToWatchlist: "MOVE_TO_WATCHLIST",
	removeMediaFromWatched: "REMOVE_MEDIA_FROM_WATCHED",
};

// Initial state
const initialState = {
	watchlist: localStorage.getItem("watchlist")
		? JSON.parse(localStorage.getItem("watchlist"))
		: [],
	watched: localStorage.getItem("watched")
		? JSON.parse(localStorage.getItem("watched"))
		: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
		localStorage.setItem("watched", JSON.stringify(state.watched));
	}, [state]);

	// actions
	const addMediaToWatchlist = (media) => {
		dispatch({ type: Actions.addMediaToWatchlist, payload: media });
	};

	const removeMediaFromWatchlist = (id) => {
		dispatch({ type: Actions.removeMediaFromWatchlist, payload: id });
	};

	const addMediaToWatched = (media) => {
		dispatch({ type: Actions.addMediaToWatched, payload: media });
	};

	const moveToWatchlist = (media) => {
		dispatch({ type: Actions.moveToWatchlist, payload: media });
	};

	const removeMediaFromWatched = (id) => {
		dispatch({ type: Actions.removeMediaFromWatched, payload: id });
	};

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMediaToWatchlist,
				removeMediaFromWatchlist,
				addMediaToWatched,
				moveToWatchlist,
				removeMediaFromWatched,
			}}>
			{props.children}
		</GlobalContext.Provider>
	);
};
