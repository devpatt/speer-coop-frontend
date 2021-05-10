import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import FirstComponent from "./firstPage";
import SecondComponent from "./secondPage";

import "./pricingPage.scss";

function PricingPage() {
	const [currentPage, setCurrentPage] = useState(() => 0);

	return (
		<ReactPageScroller
			pageOnChange={(pageNum) => {
				setCurrentPage(pageNum);
			}}
			customPageNumber={currentPage}
		>
			<FirstComponent />
			<SecondComponent />
		</ReactPageScroller>
	);
}

export default PricingPage;
