import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="jumbotron-fluid">
			<center className="jumtext">
				<h1 className="display-4">Welcome to DiscoverLaw</h1>
				<p className="lead">Legal help is just a few clicks away.</p>
				<br />
				<div className="ml-auto">
					<Link to="login">
						<a className="get-started btn-primary btn-lg" href="#" role="button">
							Find A Lawyer
						</a>
					</Link>
				</div>
			</center>
		</div>
	);
};
