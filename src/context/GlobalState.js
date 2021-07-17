import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// ACTION TYPE
export const Action = {
	addMediaToWatchlist: "ADD_MEDIA_TO_WATCHLIST",
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
		dispatch({ type: Action.addMediaToWatchlist, payload: media });
	};

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMediaToWatchlist,
			}}>
			{props.children}
		</GlobalContext.Provider>
	);
};
