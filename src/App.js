import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import AppRouter from "./router/AppRouter";
import "./lib/font-awesome/css/all.min.css";

function App() {
	return (
		<GlobalProvider>
			<AppRouter />
		</GlobalProvider>
	);
}

export default App;
