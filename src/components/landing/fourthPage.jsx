import React from "react";
import { Link } from "react-router-dom";

import "./fourthPage.scss";

const FourthComponent = () => {
	return (
		<div className="fourth_main_container">
			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>
			<div className="top__button">
				<Link to="/speer-coop-frontend/pricing">
					<button className="black_bg_button">TRY IT NOW</button>
				</Link>
			</div>

			<div className="fourth_main_content__title">PERKS</div>
			<div className="fourth_main_content1">
				<div className="fourth_main_content1__title">
					Subscription Payment Model
				</div>
				<div className="fourth_main_content1__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
			</div>
			<div className="fourth_main_content2">
				<div className="fourth_main_content2__title">
					No Fee Cancelation Policy
				</div>
				<div className="fourth_main_content2__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
			</div>
			<div className="fourth_main_content3">
				<div className="fourth_main_content3__title">
					Subscription Payment Model
				</div>
				<div className="fourth_main_content3__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
			</div>
		</div>
	);
};

export default FourthComponent;
