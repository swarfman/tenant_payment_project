import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Dashboard } from "./views/dashboard.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Login } from "./views/login.jsx";
import { PayNow } from "./views/pay_now.jsx";
import { SignUp } from "./views/sign_up.jsx";
import Store from "./store/appContext.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/" component={Login} />
						<Route exact path="/pay_now" component={PayNow} />
						<Route exact path="/sign_up" component={SignUp} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
