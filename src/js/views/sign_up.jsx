import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
//import ls from "local-storage";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			business_name: "",
			website_url: "",
			business_username: "",
			business_password: "",
			phone: ""
		};
	}

	onSignUpFunction = e => {
		e.preventDefault();

		let email = e.target.emailSignUp.value;
		if (email === "") {
			e.target.emailSignUp.style.background = "red";
		}

		let password = e.target.passwordSignUp.value;
		if (password === "") {
			e.target.passwordSignUp.style.background = "red";
		}

		let firstName = e.target.firstName.value;
		if (firstName === "") {
			e.target.firstName.style.background = "red";
		}

		let lastName = e.target.lastName.value;
		if (lastName === "") {
			e.target.lastName.style.background = "red";
		}

		let businessName = e.target.businessName.value;
		if (businessName === "") {
			e.target.businessName.style.background = "red";
		}

		let businessURL = e.target.businessURL.value;
		if (businessURL === "") {
			e.target.businessURL.style.background = "red";
		}

		let businessURLUsername = e.target.businessURLUsername.value;
		if (businessURLUsername === "") {
			e.target.businessURLUsername.style.background = "red";
		}

		let businessURLPassword = e.target.businessURLPassword.value;
		if (businessURLPassword === "") {
			e.target.businessURLPassword.style.background = "red";
		}

		let phone = e.target.phoneSignUp.value;
		if (phone === "") {
			e.target.phoneSignUp.style.background = "red";
		}

		if (e.target.style !== "red") {
			return true;
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row mb-5">
					<div className="col-10 payNowForm text-white border p-2">
						<form
							onSubmit={e => {
								this.onSignUpFunction(e);
							}}>
							<div className="text-center mt-3">
								<h1>Sign Up in One Click!</h1>
								<p className="text-muted">
									Pay Rent, Find Handymen, and More!
								</p>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputName">
										First Name
									</label>
									<input
										type="text"
										className="form-control"
										id="firstName"
										placeholder="First Name"
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputEmail5">
										Last Name
									</label>
									<input
										type="text"
										className="form-control"
										id="lastName"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-6">
									<label htmlFor="inputAddress">
										Your Email
									</label>
									<input
										type="text"
										className="form-control"
										id="emailSignUp"
										placeholder="Your Email Here"
									/>
								</div>
								<div className="form-group col-6">
									<label htmlFor="inputPassword6">
										Create Password
									</label>
									<input
										type="password"
										className="form-control"
										id="passwordSignUp"
										placeholder="Create Password"
									/>
								</div>
							</div>
							<div className="form-group col-12">
								<label htmlFor="inputPhone4">
									Phone Number
								</label>
								<input
									type="text"
									className="form-control"
									id="phoneSignUp"
									placeholder="Phone Number"
								/>
							</div>
							<div className="row justify-content-center">
								<button
									type="submit"
									className="btn btn-success login col-md-12 col-lg-3 col-sm-12 mb-1">
									Get Started Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
SignUp.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
