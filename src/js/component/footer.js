import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Demo } from "../views/demo";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<a className="about-button btn-primary btn-lg" href="#" role="button">
			About Us
		</a>

		<div className="ml-auto">
			<Link to={"demo"} className="fal-button btn-primary btn-lg" href="#" role="button">
				Find A Lawyer
			</Link>
		</div>

		<a className="contact-us-button btn-primary btn-lg" href="#" role="button">
			Contact Us
		</a>

		<p>
			<br />
			Made with <i className="fa fa-heart text-danger text-center" /> by E.Puermas, J.Guzman, Abel
		</p>
	</footer>
);
