import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitterSquare,
	faLinkedin,
	faGitlab
} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
return <footer id="contact" className="one-page">
					<div className="container">
						<div className="row">
							<div className="offset-md-5 col-md-2 text-center">
								<div className="section-bg">
									<p> <i data-icon="&#xe028;"></i> </p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="offset-md-4 col-md-4 text-center section-intro">
								<h2><b>Contact Me</b></h2>
								<span>Agree - it's time to get in touch</span><span className="coma">semeiotic</span>
							</div>
						</div>
						<div className="row">
							{/* contact form */}
							{/* contacts */}
							<div className="offset-md-4 col-sm-4 col-md-4 contact-details">
								<address className="text-center"> 
									<b className="text-uppercase">Address</b> <br/> <span>Nairobi, Kenya</span> 
								</address>
								<address className="text-center"> 
									<b className="text-uppercase">Phone Number</b> <br/> <a href="tel:254705316792">+(254) 705 - 316 - 792</a>
								</address>
								<address className="text-center">
									<b className="text-uppercase">Email</b> <br/> <a href="mailto:email@gmail.com">oyiekeallen@gmail.com</a>
								</address>
								<address className="text-center">
									<b className="text-uppercase">social</b> <br/> 
									<ul className="list-inline">
										<li><a href="https://twitter.com/allenoyieke" title="Twitter"> <FontAwesomeIcon icon={faTwitterSquare}/></a></li>
										<li><a href="https://linkedin.com/in/allen-oyieke-88b70215b"> <FontAwesomeIcon icon={faLinkedin}/> </a></li>
										<li><a href="https://gitlab.com/oyiekeallen"><FontAwesomeIcon icon={faGitlab}/> </a></li> 
										<li><a href="https://gitlab.com/heretolearn"><FontAwesomeIcon icon={faGitlab}/> </a></li>                               
									</ul>
								</address>
								</div>
								{/* /.contacts */}
						</div>
					</div>
					<div className="arrow-up"></div>
				</footer>
}