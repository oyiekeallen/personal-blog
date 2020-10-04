
import React from "react"
import Particles from "react-tsparticles";
import 'bootstrap/dist/css/bootstrap.min.css' 
import Typed from 'typed.js';
import ownerImage from '../images/owner-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub
} from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {

	componentDidMount()
	{
		var typed = new Typed('.animated-intro', {
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
										<img src={ownerImage} alt="" className="img-responsive"/> 
										<h2>I'm <b>Oyieke Allen </b> </h2>
										<p className="text-uppercase function"><b>Software Engineer &#x00026; Entrepreneur</b>
										</p>
									</div>
									<div className="col-sm-6 col-md-7 user-description">
										<h2><b>Hello!</b></h2> 
										<h2 id="animated-intro" className="animated-intro"></h2> 
										<p></p>
										<a href="https://github.com/oyiekeallen" className="btn text-uppercase">  
										<FontAwesomeIcon icon={faGithub} /> View guthub page
										</a>
									</div>
									<Particles
										className='particles-js'
										id="tsparticles"
										options={{
											background: {
												color: {
													value: "#8d979b",
												},
											},
											fpsLimit: 60,
											interactivity: {
												detectsOn: "canvas",
												events: {
													onClick: {
														enable: true,
														mode: "push",
													},
													onHover: {
														enable: true,
														mode: "grab",
													},
													resize: true,
												},
												modes: {
													bubble: {
														distance: 400,
														duration: 2,
														opacity: 0.8,
														size: 40,
													},
													push: {
														quantity: 4,
													},
													repulse: {
														distance: 200,
														duration: 0.4,
													},
												},
											},
											particles: {
												color: {
													value: "#ffffff",
												},
												links: {
													color: "#ffffff",
													distance: 150,
													enable: true,
													opacity: 0.5,
													width: 1,
												},
												collisions: {
													enable: true,
												},
												move: {
													direction: "none",
													enable: true,
													outMode: "bounce",
													random: false,
													speed: 6,
													straight: false,
												},
												number: {
													density: {
														enable: true,
														value_area: 800,
													},
													value: 80,
												},
												opacity:
												{
													value: .5,
													random: !1,
													anim:
													{
														enable: !1,
														speed: 1,
														opacity_min: .1,
														sync: !1
													}
												},
												shape: {
													type: "circle",
												},
												size: {
													random: true,
													value: 5,
												},
											},
											detectRetina: true,
										}}/>
								</div>
							</div>
						</header>

	}

}

export default Header;