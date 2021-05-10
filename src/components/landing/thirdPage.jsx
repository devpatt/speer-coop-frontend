import React from "react";
import { Link } from "react-router-dom";
// import image4 from "../../assets/landing/Image4.png";

import "./thirdPage.scss";

const ThirdComponent = () => {
	return (
		<div className="third_main_container">
			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>
			<div className="top__button">
				<Link to="/speer-coop-frontend/pricing">
					<button className="white_button">TRY IT NOW</button>
				</Link>
			</div>

			<div className="third_main_content">
				<div className="third_main_content__title">FRONT ROW SEATS</div>
				<div className="third_main_content__desc">
					Experience concerts up close and personal.{" "}
				</div>

				<div className="third_main_content__button">
					<button className="white_button">SEE DEMO</button>
				</div>
			</div>
			<div className="third_image1"></div>
			<div className="third_image2"></div>
		</div>
	);
};

export default ThirdComponent;
