import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// ACTION TYPE
export const Action = {
	addMediaToWatchlist: "ADD_MEDIA_TO_WATCHLIST",
};

// Initial state
const initialState = {
	watchlist: [],
	watched: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

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
