import React from "react";
import { MdEmail } from "react-icons/md";

import "./secondPage.scss";

const SecondComponent = () => {
	return (
		<div className="pricing_second_main_container">
			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>

			<div className="pricing_second_main_content__title">PERKS</div>
			<div className="pricing_second_main_content1">
				<div className="pricing_second_main_content1__title">
					Subscription Payment Model
				</div>
				<div className="pricing_second_main_content1__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
			</div>
			<div className="pricing_second_main_content2">
				<div className="pricing_second_main_content2__title">
					No Fee Cancelation Policy
				</div>
				<div className="pricing_second_main_content2__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
			</div>
			<div className="pricing_second_main_content3">
				<div className="pricing_second_main_content3__title">
					Subscription Payment Model
				</div>
				<div className="pricing_second_main_content3__desc">
					No commitment, cancel anytime. Never worry about forgetting
					a payment again!
				</div>
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

export default SecondComponent;
