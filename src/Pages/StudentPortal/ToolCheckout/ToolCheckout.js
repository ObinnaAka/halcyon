import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Redirect, Route } from "react-router-dom";
import ToolSectionButton from "../../../components/ToolSectionButton/ToolSectionButton";
import Checkout from "./Checkout/Checkout";
import MyTools from "./MyTools/MyTools";
import "./ToolCheckout.css";

const ToolCheckout = () => {
	const sections = {
		"My Tools": "/student/tools/myTools",
		"Check Out Tools": "/student/tools/checkout",
	};

	return (
		<div>
			<div className="page">
				<div className="main">
					<div className="sections">
						{Object.entries(sections).map(([section, route]) => (
							<ToolSectionButton key={section} sectionName={section} route={route} />
						))}
					</div>
					<Scrollbars>
						<div>
							<Redirect path="/student/tools" to="/student/tools/myTools" exact />
							<Route path="/student/tools/myTools" component={MyTools} />
							<Route path="/student/tools/checkout" component={Checkout} />
						</div>
					</Scrollbars>
				</div>
			</div>
		</div>
	);
};

export default ToolCheckout;
