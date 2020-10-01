import { Backdrop } from "@material-ui/core";
import { API } from "aws-amplify";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import ToolCheckout from "../../../components/ToolCheckout/ToolCheckout";
import { UserContext } from "../../../context/user-context";
import { createTransaction } from "../../../graphql-optimized/mutations";
import { listMaterials } from "../../../graphql-optimized/queries";

const BuyMaterials = () => {
	const [materials, setMaterials] = useState({}); //key: {price: somePrice, count: someCount}
	const [myMaterials, setMyMaterials] = useState({});
	const [cartSize, setCartSize] = useState(0);
	const [buyErrors, setBuyErrors] = useState([]);
	const [showModal, setShowModal] = useState(false); //confirming request
	const [totalPrice, setTotalPrice] = useState(0);

	const user = useContext(UserContext);
	const [checkedIn, setCheckedIn] = useState(false);

	useLayoutEffect(() => {
		console.log(user);
		if (user) setCheckedIn(user?.signInStatus);
	}, [user]);

	const fetchMaterials = async () => {
		let materialResults = await API.graphql({
			query: listMaterials,
		});

		const currMaterials = materialResults.data.listMaterials.items;
		let materialsDict = {};
		let mat;
		for (mat of currMaterials) {
			if (mat.name in materialsDict) {
				const currCount = materialsDict[mat.name].count;
				materialsDict[mat.name] = {
					price: mat.price,
					count: currCount + mat.count,
				};
			} else {
				materialsDict[mat.name] = { price: mat.price, count: mat.count };
			}
		}

		console.log(materialsDict);
		setMaterials(materialsDict);

		if (user.signInStatus) setCheckedIn(user.signInStatus);
	};

	const addMyMaterial = (event) => {
		const materialsCart = myMaterials;
		const mat = event.target.value;
		if (mat in materialsCart) {
			const currAmt = materialsCart[mat];
			materialsCart[mat] = currAmt + 1;
		} else {
			materialsCart[mat] = 1;
		}

		console.log(materialsCart);

		console.log(materials[mat].count);
		setTotalPrice(totalPrice + materials[mat].price);
		setMyMaterials(materialsCart);
		setCartSize(cartSize + 1);
	};

	const addMaterial = ([material, amount]) => {
		var myList = myMaterials;
		myList[material] = amount + 1;

		setTotalPrice(totalPrice + materials[material].price);
		setMyMaterials(myList);
		setCartSize(cartSize + 1);
	};

	const removeMaterial = ([material, amount]) => {
		var myList = myMaterials;
		if (amount - 1 === 0) {
			delete myList[material];
		} else {
			myList[material] = amount - 1;
		}

		setTotalPrice(totalPrice - materials[material].price);
		setMyMaterials(myList);
		setCartSize(cartSize - 1);
	};

	const buy = () => {
		let currMaterial;
		const cartMaterials = Object.keys(myMaterials);
		let errs = [];
		console.log(cartMaterials);

		for (currMaterial of cartMaterials) {
			if (myMaterials[currMaterial] > materials[currMaterial]) {
				errs = [...errs, currMaterial];
			}
		}

		if (errs.length) {
			setBuyErrors(errs);
		} else {
			requestMaterial();
		}
		setShowModal(true);
	};

	const requestMaterial = async () => {
		let reqs = [];
		const materialRequests = Object.keys(myMaterials);
		console.log(myMaterials);
		for (let req of materialRequests) {
			for (let i = 0; i < myMaterials[req]; i++) {
				reqs = [...reqs, req];
			}
		}
		console.log(reqs);

		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Student Request",
					staffUserId: "tiw",
					userId: user.eid,
					transactionStatus: "Processing",
					requests: reqs,
				},
			},
		});
	};

	const modalConfirmHandler = () => {
		if (buyErrors.length == 0) {
			setMyMaterials({});
			setCartSize(0);
			setTotalPrice(0);
		}

		setBuyErrors(false);
		setShowModal(false);
	};

	return (
		<div>
			{checkedIn ? (
				<React.Fragment>
					<h3>Please pick the material you'd like to purchase!</h3>
					<select onChange={addMyMaterial} defaultValue="selectMaterial">
						<option value="selectMaterial" disabled>
							Select Material
						</option>
						{Object.entries(materials).map(([material, _]) => (
							<option key={material}>{material}</option>
						))}
					</select>
					{Object.entries(myMaterials).map(([mat, amt]) => (
						<ToolCheckout
							key={mat}
							name={mat}
							amount={amt}
							price={`$${materials[mat].price.toFixed(2)}`}
							onAdd={addMaterial}
							onRemove={removeMaterial}
						/>
					))}
					{Object.entries(myMaterials).length > 0 && (
						<div>
							<h5>Material Total: ${totalPrice.toFixed(2)}</h5>
							<h5>Tax: ${(totalPrice * 0.0825).toFixed(2)}</h5>
							<h5>Total with Tax: ${(totalPrice + totalPrice * 0.0825).toFixed(2)}</h5>
						</div>
					)}
					<button onClick={buy}>Buy</button>
				</React.Fragment>
			) : (
				<h3>
					Please check in to buy a material. Note that in order to check in, you must have a
					reservation
				</h3>
			)}
			{showModal && (
				<React.Fragment>
					<Modal canConfirm confirmText="Okay!" onConfirm={modalConfirmHandler}>
						{buyErrors.length > 0 ? (
							<div>
								<p>We do not have enough of the following material(s) to complete your order:</p>
								<ul>
									{buyErrors.map((mat) => (
										<li>{mat}</li>
									))}
								</ul>
								<p>Please refine your request in order to purchase material!</p>
							</div>
						) : (
							<div>
								<p>You have requested the following materials:</p>
								<ul>
									{Object.entries(myMaterials).map(([material, amount]) => (
										<li>
											{material} ({amount})
										</li>
									))}
								</ul>
								{user.bevoCard ? (
									<label>Someone will bring your materials to you soon</label>
								) : (
									<label>
										Your Bevo card has not been saved to your account; someone will come to your
										location soon to get your card so your materials can be purchased!
									</label>
								)}
							</div>
						)}
					</Modal>
					<Backdrop />
				</React.Fragment>
			)}
		</div>
	);
};

export default BuyMaterials;
