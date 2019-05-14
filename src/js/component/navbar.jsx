import React from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedDropDown: false
		};
	}

	render() {
		return (
			<nav className="navbar navbar-light bg-dark pb-1 mb-3">
				<a className="navbar-brand text-white" href="#">
					<img
						src="/docs/4.3/assets/brand/bootstrap-solid.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
					/>
					Warf Properties
				</a>
			</nav>
		);
	}
}
