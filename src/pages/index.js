import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyleComponent from '../styles/GlobalStyleComponent';

import Navbar from './navbar'

import Header from './Header'
import CodingExperience from './CodingExperience'
import SkillSet from './SkillSet'
import Footer from './Footer'

export default function Home() {
return  <div>
					<GlobalStyleComponent />

					{/* <div id="overlay">
						<div class="loader"></div>
						<h1 class="animated pulse text-right"><b>loading ... </b></h1>
					</div> */}
					
					<div className="fixed-left-contact"> </div>

					<div className="fixed-right-socials">
						<ul>
								<li><a href="https://twitter.com/allenoyieke" title="Twitter"><i className="fa fa-twitter-square fa-2x"></i></a></li>
								<li><a href="https://linkedin.com/in/allen-oyieke-88b70215b"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="https://gitlab.com/oyiekeallen"><i className="fa fa-github"></i></a></li> 
								<li><a href="https://gitlab.com/heretolearn"><i className="fa fa-gitlab"></i></a></li> 
						</ul>
					</div>

					<Navbar/>

					<div id="page-content">
							<Header/>

							<SkillSet/>
							
							<CodingExperience/>

							<Footer/>
					</div>

				</div>

}
