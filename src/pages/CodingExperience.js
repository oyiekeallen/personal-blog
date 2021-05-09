
import React from "react"
import { Chrono } from 'react-chrono'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { FMLogoImage } from '../images/the_french_maiden_logo.png'

export default function CoingExperience(){
	const items = [
		{
			title: "May 2018",
			cardTitle: "The French Maiden Limited",
			cardSubtitle:"Full Stack Laravel & Mobile Application Developer",
			cardDetailedText: "I was contracted to help the company launch its online presence in the home services space. I worked on developing a web application as well as a mobile application on the Android Platform.",
			media: {
				type: "IMAGE",
				source: {
					url: "/images/the_french_maiden_logo.png"
				}
			}
		},
		{
			title: "September 2019",
			cardTitle: "Odyssey Capital Limited   ",
			cardSubtitle:"Full Stack Software Developer",
			cardDetailedText: "I worked as a full-stack developer, primarily developing software in Ruby and Angular.",
			media: {
				type: "IMAGE",
				source: {
					url: "/images/odyssey_capital_logo_blue.png"
				}
			}
		}
	];
	return (

		<section id="coding-experience" className="one-page">
			<div className="container">
				<br/>
				<div className="row">
					<div className="offset-md-4 col-md-4 text-center section-intro">
						<h2>
							<b>Experience</b>
						</h2>
						<span> Some intro into my past life.</span>
					</div>
					<br/> <br/>
					<div className="row">
						<div className="offset-md-3" style={{ width: "950px", height: "800px" }}>
							<Chrono items={items} />
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
