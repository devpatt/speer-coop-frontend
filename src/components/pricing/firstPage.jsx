import React, { useState } from "react";

import "./firstPage.scss";

export default () => {
	return (
		<div className="pricing_first_main_container">
			<div className="hamburgerMenu" onClick={console.log("hi")}>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
				<div className="hamburgerMenuLine"></div>
			</div>

			<div className="title">EXP|CON</div>

			<div className="pricing_first_main_content__title">PRICING</div>
			<div className="pricing_first_main_content1">
				<div className="pricing_first_main_content1__title">
					MONTHLY
				</div>
				<div className="pricing_first_main_content1__desc">
					Very good
				</div>
				<div className="pricing_first_main_content1__desc">Amazing</div>
				<div className="pricing_first_main_content1__desc">
					Perfect job
				</div>
				<div className="pricing_first_main_content1__desc">
					Love this
				</div>
				<div className="pricing_first_main_content1__desc">
					It's so good
				</div>
			</div>
			<div className="pricing_first_main_content2">
				<div className="pricing_first_main_content2__title">YEARLY</div>
				<div className="pricing_first_main_content2__desc">
					Very very good
				</div>
				<div className="pricing_first_main_content2__desc">Amazing</div>
				<div className="pricing_first_main_content2__desc">
					Perfect job
				</div>
				<div className="pricing_first_main_content2__desc">
					Love this
				</div>
				<div className="pricing_first_main_content2__desc">
					It's so good
				</div>
			</div>
			<div className="pricing_first_main_content3">
				<div className="pricing_first_main_content3__title">YEARLY</div>
				<div className="pricing_first_main_content3__desc">
					Very very good
				</div>
				<div className="pricing_first_main_content3__desc">Amazing</div>
				<div className="pricing_first_main_content3__desc">
					Perfect job
				</div>
				<div className="pricing_first_main_content3__desc">
					Love this
				</div>
				<div className="pricing_first_main_content3__desc">
					It's so good
				</div>
			</div>
		</div>
	);
};
