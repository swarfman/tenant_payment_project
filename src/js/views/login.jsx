import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	onLoginFunction = e => {
		e.preventDefault();

		let email = e.target.emailInput.value;
		if (email === "") {
			e.target.emailInput.style.background = "red";
			return false;
		}

		let password = e.target.passwordInput.value;
		if (password === "") {
			e.target.passwordInput.style.background = "red";
			return false;
		} else {
			return true;
		}
	};

	render() {
		return (
			<form
				onSubmit={e => {
					this.onLoginFunction(e);
				}}>
				<div className="container-fluid">
					<div className="row justify-content-center">
						<h3 className="text-white">Welcome!</h3>
					</div>
					<div className="form-group text-white">
						<label htmlFor="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="emailInput"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group text-white">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="passwordInput"
							placeholder="Password"
						/>
					</div>
					<div className="form-group form-check" />
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		);
	}
}
