import React from "react";
import "./Modal.css";

// https://youtu.be/2rXtTi0Pn9E

const modal = (props) => {
	return (
		<div>
			<header>{props.title}</header>
			<section className="modal_content">{props.children}</section>
			<section className="modal_actions">
				{props.canCancel && <button className="btn">Cancel</button>}
				{props.canConfirm && <button className="btn">Confirm</button>}
			</section>
		</div>
	);
};

export default modal;
