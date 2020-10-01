import React, { useState } from "react";

import QRCode from "qrcode.react";

let initiatlState = {
	buyer: "djfgbsjgbuo",
	vendor: "sdfgibdfgboi",
	weight: 100,
};

const CodeGenerator = () => {
	const [code, setCode] = useState(initiatlState);
	return (
		<div classsName="left">
			<div className="tool_expanded-view-right">
				<QRCode value={code["buyer"] + code["vendor"] + code["weight"]} size={100} />
			</div>
			<div
				style={{
					width: "60vw",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}>
				<form>
					<h2>Buyer</h2>
					<div>
						<label className="selector-label" htmlFor="userId">
							id:
							<input
								type="string"
								value={code.buyer}
								onChange={(event) => setCode({ ...code, buyer: event.target.value })}
							/>
						</label>
					</div>
				</form>
				<form>
					<h2>Weight</h2>
					<div>
						<label className="selector-label" htmlFor="userId">
							id:
							<input
								type="string"
								value={code.weight}
								onChange={(event) => setCode({ ...code, weight: event.target.value })}
							/>
							Kg
						</label>
					</div>
				</form>
				<form>
					<h2>Vendor</h2>
					<div>
						<label className="selector-label" htmlFor="userId">
							id:
							<input
								type="string"
								value={code.vendor}
								onChange={(event) => setCode({ ...code, vendor: event.target.value })}
							/>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CodeGenerator;
