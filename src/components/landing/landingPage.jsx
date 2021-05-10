import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import FirstComponent from "./firstPage";
import SecondComponent from "./secondPage";
import ThirdComponent from "./thirdPage";
import FourthComponent from "./fourthPage";
import FifthComponent from "./fifthPage";
import SixthComponent from "./sixthPage";

import "./landingPage.scss";

function LandingPage() {
	const [currentPage, setCurrentPage] = useState(() => 0);

	return (
		// <div className="Landing">
		//   <h1>landing page</h1>
		// </div>
		<ReactPageScroller
			pageOnChange={(pageNum) => {
				setCurrentPage(pageNum);
			}}
			customPageNumber={currentPage}
		>
			<FirstComponent />
			<SecondComponent />
			<ThirdComponent />
			<FourthComponent />
			<FifthComponent />
			<SixthComponent />
		</ReactPageScroller>
	);
}

export default LandingPage;
