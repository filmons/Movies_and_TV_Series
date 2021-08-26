import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="app">
				<container>
					<Switch>
          <Route  path="/" component={Trending} exact/>
						<Route path="/movies" component={Movies} />
						<Route path="/search" component={Search} />
						<Route path="/series" component={Series} />
					</Switch>
				</container>
			</div>

			<SimpleBottomNavigation />
		</BrowserRouter>
	);
}

export default App;
