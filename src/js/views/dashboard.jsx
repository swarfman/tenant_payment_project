import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron">
					<h1 className="display-4">Welcome!</h1>
					<p className="lead">
						Pay rent or find help at the click of a button.
					</p>
					<hr className="my-4" />
					<p>For anything else, please contact 561-251-5970</p>
					<a
						className="btn btn-primary btn-lg mr-3"
						href="#"
						role="button">
						Pay now
					</a>
					<a
						className="btn btn-success btn-lg"
						href="#"
						role="button">
						Find help
					</a>
				</div>
			</div>
		);
	}
}
