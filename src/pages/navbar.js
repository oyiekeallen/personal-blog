import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {
return  <nav className="navbar navbar-default animated fadeInDown">
					<div className="container-fluid">
							{/* Brand and toggle get grouped for better mobile display */}
							<div className="navbar-header">
									<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu" aria-expanded="false">
											<span className="sr-only">Toggle navigation</span> </button>
									<a className="navbar-brand" > <b className="logo-text"> Oyieke Allen </b> </a>
							</div>
							{/* Collect the nav links, forms, and other content for toggling */}
							<div className="collapse navbar-collapse pull-right" id="top-menu">
									<ul className="nav navbar-nav text-uppercase text-center">
											<li>
													<a href="#section0" className="inset-lnk hvr-underline-from-left">About</a>
											</li>
											<li>
													<a href="#section1" className="inset-lnk hvr-underline-from-left">Skills</a>
											</li>
											<li>
													<a href="#section2" className="inset-lnk hvr-underline-from-left">Portfolio</a>
											</li>
											
											<li>
													<a href="#section4" className="inset-lnk hvr-underline-from-left">Experience</a>
											</li>
											<li>
													<a href="#section6" className="inset-lnk hvr-underline-from-left">contact</a>
											</li>
									</ul>
							</div>
							{/* /.navbar-collapse */}
					</div>
					{/* /.container-fluid */}
				</nav>

}