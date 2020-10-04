import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyleComponent from '../styles/GlobalStyleComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faTwitterSquare,
	faLinkedin,
	faGitlab
} from '@fortawesome/free-brands-svg-icons'


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
					
					<div className="fixed-left-contact"> 
					</div>

					<div className="fixed-right-socials">
						<ul>
								<li><a href="https://twitter.com/allenoyieke"> <FontAwesomeIcon icon={faTwitterSquare} size='sm' color='white'/> </a></li>
								<li><a href="https://linkedin.com/in/allen-oyieke-88b70215b"> <FontAwesomeIcon icon={faLinkedin} size='sm' color='white'/> </a></li>
								<li><a href="https://gitlab.com/oyiekeallen"> <FontAwesomeIcon icon={faGithub} size='sm' color='white'/></a></li> 
								<li><a href="https://gitlab.com/heretolearn"> <FontAwesomeIcon icon={faGitlab} size='sm' color='white'/></a></li> 
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
