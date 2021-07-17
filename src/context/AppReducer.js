import { Action } from "./GlobalState";

const AppReducer = (state, action) => {
	switch (action.type) {
		case Action.addMediaToWatchlist:
			return {
				...state,
				watchlist: [action.payload, ...state.watchlist],
			};

		default:
			return state;
	}
};

export default AppReducer;
