import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Add from "../components/Add";
import Header from "../components/Header";
import Watched from "../components/Watched";
import Watchlist from "../components/Watchlist";

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact={true} component={Watchlist} />
				<Route path="/add" component={Add} />
				<Route path="/watched" component={Watched} />
				<Route component={() => <Redirect to="/" />} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
