import { Actions } from "./GlobalState";

const AppReducer = (state, action) => {
	switch (action.type) {
		case Actions.addMediaToWatchlist:
			return {
				...state,
				watchlist: [action.payload, ...state.watchlist],
			};
		case Actions.removeMediaFromWatchlist:
			return {
				...state,
				watchlist: state.watchlist.filter(
					(media) => media.id !== action.payload
				),
			};

		default:
			return state;
	}
};

export default AppReducer;
