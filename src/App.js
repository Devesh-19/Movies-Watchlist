import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<GlobalProvider>
			<AppRouter />
		</GlobalProvider>
	);
}

export default App;
