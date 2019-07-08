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

	render() {
		return (
			<form>
				<div className="container-fluid">
					<div className="form-group text-white">
						<label htmlFor="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
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
							id="exampleInputPassword1"
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
