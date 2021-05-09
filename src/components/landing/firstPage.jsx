import React from "react";
import { Link } from "react-router-dom";

import BackgroundSlider from "react-background-slider";
import image1 from "../../assets/landing/Image1.png";
import image2 from "../../assets/landing/Image2.png";
import image3 from "../../assets/landing/Image3.png";
import "./firstPage.scss";

export default () => {
	return (
		<div className="first_main_container">
			<BackgroundSlider
				images={[image1, image2, image3]}
				duration={10}
				transition={1.5}
			/>
			{/* <h2>First Component</h2> */}

			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>

			<div className="first_main_content">
				<div className="first_main_content__title">
					INTERACTIVE CONCERT EXPERIENCE
				</div>
				<div className="first_main_content__desc">
					Experience your favourite artists like never before and from
					the comfort of your own home.
				</div>

				<div className="first_main_content__button">
					{/* <a href="#" class="btn-mix-noborder" data-text="TRY IT NOW">
						TRY IT NOW
					</a> */}
					<Link to="/pricing">
						<button className="btn-grad">TRY IT NOW</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
