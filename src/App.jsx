import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landing/landingPage";
import PricingPage from "./components/pricing/pricingPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route
					path="/speer-coop-frontend"
					exact
					component={LandingPage}
				/>
				<Route
					path="/speer-coop-frontend/pricing"
					exact
					component={PricingPage}
				/>
			</Switch>
		</div>
	);
}

export default App;
