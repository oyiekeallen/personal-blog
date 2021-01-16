import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'

export default function SkillSet() {
return	<section id="skill-set" className="one-page">
					<div className="container">
						
						<div className="row">
							<div className="offset-md-5 col-md-2 text-center">
								<div className="section-bg">
									<p> <FontAwesomeIcon icon={faToolbox} size='2x' color='#bbbdbe' transform={{ rotate:315 }} />  </p>
								</div>
							</div>
						</div>
						
						<div className="row">
							<div className="offset-md-4 col-md-4 text-center section-intro">
								<h2><b>Skills Set</b></h2>
								<span>Right. Let's throw some light on my skills.</span>
							</div>
						</div>

						<div className="row"/>
					</div>
		</section>
}
