import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
return <footer id="section6" className="one-page">
					<div className="container">
						<div className="row">
							<div className="col-md-offset-5 col-md-2 text-center">
								<div className="section-bg">
									<p> <i data-icon="&#xe028;"></i> </p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-offset-4 col-md-4 text-center section-intro">
								<h2><b>Contact Me</b></h2>
								<span>Agree - it's time to get in touch</span><span className="coma">semeiotic</span>
							</div>
						</div>
						<div className="row">
							{/* contact form */}
							{/* contacts */}
							<div className="col-md-offset-4 col-sm-4 col-md-4 contact-details">
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
										<li><a href="https://twitter.com/allenoyieke" title="Twitter"><i className="fa fa-twitter-square"></i></a></li>
										<li><a href="https://linkedin.com/in/allen-oyieke-88b70215b"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="https://gitlab.com/oyiekeallen"><i className="fa fa-github"></i></a></li> 
										<li><a href="https://gitlab.com/heretolearn"><i className="fa fa-gitlab"></i></a></li>                               
									</ul>
								</address>
								</div>
								{/* /.contacts */}
						</div>
					</div>
					<div className="arrow-up"></div>
				</footer>
}