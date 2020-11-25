
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
		if (this.typed){
			this.typed.destroy()
		}
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
												events:
												{
													onhover:
													{
														enable: !0,
														mode: "grab"
													},
													onclick:
													{
														enable: !0,
														mode: "push"
													},
													resize: !0
												},
												modes:
												{
													grab:
													{
														distance: 140,
														line_linked:
														{
															opacity: 1
														}
													},
													bubble:
													{
														distance: 400,
														size: 40,
														duration: 2,
														opacity: 8,
														speed: 3
													},
													repulse:
													{
														distance: 200,
														duration: .4
													},
													push:
													{
														particles_nb: 4
													},
													remove:
													{
														particles_nb: 2
													}
												}
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
												move:
												{
													enable: !0,
													speed: 3,
													direction: "none",
													random: !1,
													straight: !1,
													out_mode: "out",
													bounce: !1,
													attract:
													{
														enable: !1,
														rotateX: 600,
														rotateY: 1200
													}
												},
												number: {
													density: {
														enable: false,
														value_area: 800,
													},
													value: 110,
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
												shape:
												{
													type: "circle",
													stroke:
													{
														width: 0,
														color: "#000000"
													},
													polygon:
													{
														nb_sides: 5
													}
												},
												size:
												{
													value: 3,
													random: !0,
													anim:
													{
														enable: !1,
														speed: 40,
														size_min: .1,
														sync: !1
													}
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