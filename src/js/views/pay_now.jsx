import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class PayNow extends React.Component {
	onPaymentFunction = e => {
		e.preventDefault();

		let firstName = e.target.inputNamePayment.value;
		if (firstName === "") {
			e.target.inputNamePayment.style.background = "red";
			return false;
		}

		let lastName = e.target.inputLastNamePayment.value;
		if (lastName === "") {
			e.target.inputLastNamePayment.style.background = "red";
			return false;
		}

		let email = e.target.inputEmailPayment.value;
		if (email === "") {
			e.target.inputEmailPayment.style.background = "red";
			return false;
		}

		let ccNumber = e.target.inputCC.value;
		if (ccNumber === "") {
			e.target.inputCC.style.background = "red";
			return false;
		}

		let cvc = e.target.inputCVC.value;
		if (cvc === "") {
			e.target.inputCVC.style.background = "red";
			return false;
		}

		let expDate = e.target.inputExpDate.value;
		if (expDate === "") {
			e.target.inputExpDate.style.background = "red";
			return false;
		}

		let billingAddress = e.target.inputBillingAddress.value;
		if (billingAddress === "") {
			e.target.inputBillingAddress.style.background = "red";
			return false;
		} else {
			return true;
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row pt-5 mt-1 mb-5">
					<h3 className="payNowForm text-white">Rent Owed: $600</h3>
				</div>
				<div className="row">
					<div className="col-10 payNowForm border text-white p-2">
						<form className="ml-5">
							<div className="text-center mt-3">
								<h1>Payment Information</h1>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputAddress4">
										First Name
									</label>
									<input
										type="text"
										className="form-control"
										id="inputNamePayment"
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputPassword4">
										Last Name
									</label>
									<input
										type="text"
										className="form-control"
										id="inputLastNamePayment"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-12">
									<label htmlFor="inputEmail4">
										Your Email
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmailPayment"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										Your Credit Card Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCC"
									/>
								</div>
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										Expiration Date
									</label>
									<input
										type="text"
										className="form-control"
										id="inputExpDate"
									/>
								</div>
								<div className="form-group col-md-2 col-lg-4">
									<label htmlFor="inputAddress">
										CVC Number
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCVC"
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-12">
									<label htmlFor="inputAddress">
										Billing Address
									</label>
									<input
										type="text"
										className="form-control"
										id="inputBillingAddress"
									/>
								</div>
							</div>
							<div className="d-lg-flex justify-content-between">
								<button
									type="submit"
									className="btn btn-danger login col-md-12 col-lg-3 p-2 mb-1">
									<span>
										<i className="far fa-window-close border-right pr-1" />
									</span>
									<span className="pl-1">Go Back</span>
								</button>
								<button
									type="submit"
									className="btn btn-success login col-md-12 col-lg-3 mb-1">
									<span>
										<i className="fas fa-check-square border-right pr-1" />
									</span>
									<span className="pl-1">
										Complete Purchase!
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
PayNow.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
