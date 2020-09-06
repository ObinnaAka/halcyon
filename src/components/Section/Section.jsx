import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Section = (props) => {
	return <Scrollbars className="section">{props.children}</Scrollbars>;
};

export default Section;
