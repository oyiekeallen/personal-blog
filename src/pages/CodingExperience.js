
import React from "react"
import { Chrono } from 'react-chrono'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

export default function CoingExperience(){
	const items = [
		{
			title: "May 2018",
			cardTitle: "The French Maiden Limited",
			cardSubtitle:"Full-stack Laravel & Mobile Application Developer",
			cardDetailedText: "...",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg"
				}
			}
		},
		{
			title: "September 2019",
			cardTitle: "Odyssey Capital Limited",
			cardSubtitle:"Software Engineer",
			cardDetailedText: "...",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg"
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
