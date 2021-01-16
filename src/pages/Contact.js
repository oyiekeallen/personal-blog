import React from "react"
import { ListGroup }  from 'react-bootstrap' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitterSquare,
	faLinkedin,
	faGitlab,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

export default function Contact() {
return <footer id="contact" className="one-page">
					<div className="container">
						<div className="row">
							<div className="offset-md-5 col-md-2 text-center">
								<div className="section-bg">
									<p> <FontAwesomeIcon icon={faEnvelope} size='2x' color='#bbbdbe' transform={{ rotate:315 }} />  </p>
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
                                    <ListGroup horizontal variant="flush" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>

                                      <ListGroup.Item >
                                        <a href="https://twitter.com/allenoyieke" title="Twitter"> 
                                          <FontAwesomeIcon icon={faTwitterSquare}/>
                                        </a>
                                      </ListGroup.Item>

                                      <ListGroup.Item>
                                        <a href="https://linkedin.com/in/allen-oyieke-88b70215b"> 
                                          <FontAwesomeIcon icon={faLinkedin}/> 
                                        </a>
                                      </ListGroup.Item>

                                      <ListGroup.Item>
                                        <a href="https://github.com/oyiekeallen">
                                          <FontAwesomeIcon icon={faGithub}/>
                                        </a>
                                      </ListGroup.Item>

                                      <ListGroup.Item><a href="https://gitlab.com/heretolearn">
                                        <FontAwesomeIcon icon={faGitlab}/> </a>
                                      </ListGroup.Item>
									</ListGroup>
								</address>
								</div>
								{/* /.contacts */}
						</div>
					</div>
					<div className="arrow-up"></div>
				</footer>
}
