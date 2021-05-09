import React, { useState } from "react";
import { Link } from "react-router-dom";
import speaker1 from "../../assets/landing/SmallSpeaker1-03.png";
import speaker2 from "../../assets/landing/SmallSpeaker2-03.png";
import { FaStar } from "react-icons/fa";
import "./fifthPage.scss";

export default () => {
	return (
		<div className="fifth_main_container">
			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>
			<div className="top__button">
				<Link to="/pricing">
					<button className="white_button">TRY IT NOW</button>
				</Link>
			</div>

			<div className="fifth_images">
				<img src={speaker1} alt="speaker1" className="fifth_image1" />
				<img src={speaker2} alt="speaker2" className="fifth_image2" />
			</div>

			<div className="fifth_main_content__title">REVIEWS</div>
			<div className="fifth_main_content1">
				<div className="stars">
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
				</div>
				<div className="fifth_main_content1__title">ARTIST</div>
				<div className="fifth_main_content1__desc">
					“Love it, it’s the Best.I can’t live without it!”
				</div>
			</div>
			<div className="fifth_main_content2">
				<div className="stars">
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
				</div>
				<div className="fifth_main_content2__title">PRODUCER</div>
				<div className="fifth_main_content2__desc">
					“Love it, it’s the Best.I can’t live without it!”
				</div>
			</div>
			<div className="fifth_main_content3">
				<div className="stars">
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
					<FaStar className="star" />
				</div>
				<div className="fifth_main_content3__title">MUSIC FAN</div>
				<div className="fifth_main_content3__desc">
					“Love it, it’s the Best.I can’t live without it!”
				</div>
			</div>
		</div>
	);
};
