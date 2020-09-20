
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CodingExperience() {

return	<section id="section4" className="one-page">
					<div className="container">
						<div className="row">
							<div className="col-md-offset-5 col-md-2 text-center">
								<div className="section-bg">
									<p> <i data-icon="&#xe053;"></i> </p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-offset-4 col-md-4 text-center section-intro">
								<h2><b>Experience</b></h2>
								<span>Time trail through my budding career</span>
							</div>
						</div>
						{/* horizontal timeline with carousel animation */}
						<div id="timeline" className="row wow slideInUp" data-wow-duration="1s">
							<div className="timelinebar"></div>
							<ul id="dates"> 
								<li><a href="#job1">February 2018 - August 2019</a></li>
								<li><a href="#job2">September 2019 - Present</a></li>                  
							</ul>
							<ul id="issues" className="text-center">
								<li id="job1"> 
									<h1><b> French Maiden Limited </b></h1> <b className="text-uppercase"> Full-stack && Mobile developer </b> 
									<p className="description">  
										Spearheaded the development of a core technology platform for the company. This included
										a client facing android application as well as web application to serve both clients and employees.
										This increased the company's sales by 60%, reduced the workload overhead by 40%.
									</p>

								</li>   
								<li id="job2"> 
									<h1><b> Odyssey Capital Limited </b></h1> <b className="text-uppercase"> Full-stack developer </b> 
									<p className="description">  Ruby on Rails  </p>
								</li>            
							</ul>
							<a href="#" id="next-issue">+</a>
							<a href="#" id="prev-issue">-</a>
						</div>
							{/* /. horizontal timeline with carousel animation */}
					</div>
				</section>
}