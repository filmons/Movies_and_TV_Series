import { BrowserRouter as Router,
	Route,
	Switch,
	Redirect, } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "@material-ui/icons/Movie";
import Search from "@material-ui/icons/Search";
import Series from "./Pages/Series/Series";

function App() {
	return (
		<Router>
			<Header />
			<div className="app">
				<container>
					<switch>
          <Route path="/" component={Trending} exact/>
						<Route path="/movies" component={Movies} />
						<Route path="/search" component={Search} />
						<Route path="/series" component={Series} />
					</switch>
				</container>
			</div>

			<SimpleBottomNavigation />
		</Router>
	);
}

export default App;
