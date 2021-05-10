import React, { useState } from "react";
import { Link } from "react-router-dom";
import medium17 from "../../assets/landing/medium17.png";
import medium27 from "../../assets/landing/medium27.png";

import "./secondPage.scss";

const SecondComponent = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audio] = useState(
		new Audio(
			"https://ia800701.us.archive.org/17/items/Kalimba.mp3_377/Kalimba.mp3"
		)
	);

	const toggleAudio = () => {
		console.log("audio toggle clicked");
		setIsPlaying(!isPlaying);

		if (isPlaying === false) {
			audio.play();
			console.log("audio played");
		} else {
			audio.pause();
			audio.currentTime = 0;
			console.log("audio stopped");
		}
	};
	return (
		<div className="second_main_container">
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

			<div className="second_main_content">
				<div className="second_main_content__title">SUPERIOR SOUND</div>
				<div className="second_main_content__desc">
					Experience live versions of your favourite songs.
				</div>

				<div className="second_main_content__button">
					<button className="white_button">SEE DEMO</button>
				</div>
			</div>

			<div className="second_images" onClick={toggleAudio}>
				<img
					src={medium17}
					alt="medium17"
					className="second_medium17"
				/>
				<img
					src={medium27}
					alt="medium27"
					className="second_medium27"
				/>
			</div>
		</div>
	);
};

export default SecondComponent;
