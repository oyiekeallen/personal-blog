
import React from "react"
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Typed from 'typed.js';


class Header extends React.Component {

	componentDidMount()
	{
		var typed = new Typed('.animated-intro', {
			// Waits 1000ms after typing "First"
			strings: [
				"Welcome, I'm glad you made it, let me introduce myself.", 
				"How would I describe myself? Well I would like to think I am an inquisitive, energetic and skilled in leadership, with a strong foundation in math, logic and cross-platform programming.", 
				"Keep scrolling there is more to see."],
			typeSpeed: 60,
			backSpeed: 50,
			loop: false,
			loopCount: Infinity,
		});
	}

	componentWillUnmount() 
	{
		this.typed.destroy()
	}


	render() {
		return 	<header className="particles-header one-page" id="section0">
							<div className="container">
								<div className="row">
									<div className=" col-sm-6 col-md-4 text-center user-block animated fadeInUp">
										<img src="" alt="" className="img-responsive"/> 
										<h2>I'm <b>Oyieke Allen </b> </h2>
										<p className="text-uppercase function"><b>Software Engineer &#x00026; Entrepreneur</b></p>
									</div>
									<div className="col-sm-6 col-md-7 user-description">
										<h2><b>Hello!</b></h2> 
										<h2 id="animated-intro" className="animated-intro"></h2> 
										<p></p>
										<a href="https://github.com/oyiekeallen" className="btn text-uppercase"><i className="fa fa-github"></i> View guthub page</a>
									</div>
								</div>
							</div>
							<Particles
								params={{
									"particles": {
											"number": {
													"value": 50
											},
											"size": {
													"value": 3
											}
									},
									"interactivity": {
											"events": {
													"onhover": {
															"enable": true,
															"mode": "repulse"
													}
											}
									}
							}} />
						</header>
	}

}

export default Header;