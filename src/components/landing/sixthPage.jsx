import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

import "./sixthPage.scss";

export default () => {
	return (
		<div className="sixth_main_container">
			<div className="hamburgerMenu">
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>
			{/* <div className="top__button">
				<button className="white_button">TRY IT NOW</button>
			</div> */}

			<div className="sixth_main_content">
				<div className="sixth_main_content__title">GET EXP|CON NOW</div>
				<div className="sixth_main_content__desc">
					Purchase and download the app.
				</div>
			</div>
			<div className="sixth_main_content__button">
				<Link to="/pricing">
					<button className="black_bg_button">TRY IT NOW</button>
				</Link>
			</div>

			<div className="sixth_footer">
				<MdEmail className="email_icon" />
				<div className="sixth_footer__contact_email">
					support@experienceconcerts.co
				</div>
				<div className="sixth_footer__logo">EXP|CON</div>
				<div className="sixth_footer__terms">
					2019 © All Rights Reserved | Speer Technologies Incorporated
				</div>
			</div>
		</div>
	);
};
