import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import LandingPage from "./components/landing/landingPage";
import PricingPage from "./components/pricing/pricingPage";

function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
		<div className="App">
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/pricing" exact component={PricingPage} />
			</Switch>
		</div>
	);
}

export default App;
