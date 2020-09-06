import React, { useState, useEffect } from "react";
import { Tool } from "../../../components";
import { API } from "aws-amplify";
import { listTools } from "../../../graphql-optimized/queries";
import { updateTool } from "../../../graphql-optimized/mutations";

// import style from "./ToolTools.module.css";

const CheckedOutTools = () => {
	const [tools, setTools] = useState(["loading"]);

	useEffect(() => {
		fetchTools();
	}, []);

	const fetchTools = async () => {
		let results = await API.graphql({
			query: listTools,
			variables: { filter: { toolStatus: { eq: "Checked Out" } } },
		});
		console.log(results.data.listTools.items);
		setTools(results.data.listTools.items);
	};

	return (
		<div className="left-view">
			{tools.length
				? tools[0] !== "loading"
					? tools.map((tool, index) => (
							<Tool
								id={tool.id}
								name={tool.name}
								workstation={tool.currentWorkstation}
								member={tool.currentHolder}
								date={tool.updatedAt}
								key={index}
							/>
					  ))
					: "Loading..."
				: "No Checked Out Tools"}
		</div>
	);
};

export default CheckedOutTools;
