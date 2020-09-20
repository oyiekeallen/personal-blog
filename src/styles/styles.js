import { css } from '@nfront/global-styles';

const styles= css`

	@charset "UTF-8";

	body {
		margin: 0;
		padding: 0;
		width: 100%;
		font-family: 'Source Sans Pro',sans-serif;
		font-size: 100%;
		background: #fff;
		position: relative;
	}

	section {
		padding: 8% 0 90px 0;
	}

	#page-content {
		overflow-x: hidden;
	}

	.front-name,.front-tags {
		font-size: 14px;
	}

	.about-author a,.blog-header small,.category-menu a,.comment span,.contact-form button[type=submit],.content-404 span,.fixed-right-socials .fa,.instagram-block a,.navbar-default a,.portofolio-menu button,.price-plan li:first-child,.process-head b,.section-bg .fa,.slide b.text-uppercase,.tags-menu a,.twitter-block a {
		font-size: 16px;
	}

	#issues i,.clients-testimonials i,.contact-details,.contact-form,.description,.fixed-left-contact p,.meter p,.post-content,.posts-list b,.price-plan ul,.progress-bars small,.progress-name b,.twitter-block p,.user-block p,p#month {
		font-size: 18px;
	}

	.navbar-brand b,.section-intro span,header p {
		font-size: 22px;
	}

	.price-plan ul b {
		font-size: 33px;
	}

	p#date {
		font-size: 72px;
		font-weight: 100;
	}

	.process-head h1,h3#todayDay {
		font-weight: 100;
	}

	.contact-details span {
		font-weight: 400;
	}

	.contact-form button[type=submit],.price-plan a,.progress-bars p,p#month {
		font-weight: 700;
	}

	#clients .section-intro span,#section1 .section-intro span,#section3 .section-intro span,#section4 .section-intro span,#section5 .section-intro span,#section6 .section-intro span,#section8 .section-intro span,.clients-testimonials b.text-uppercase,.clients-testimonials i,.contact-details span,.instagram-block a,.post-content,.section-bg .fa,.tags-menu a,.twitter-block a,footer .section-intro span {
		color: #666;
	}

	.category-menu a,.contact-details a,.post-content h2,.post-content h3,.post-content h4,.progress-bars p,.user-block b {
		color: #333;
	}

	#section2 .section-intro,#section7 .section-intro,#section9 .section-intro,.blog-header,.blog-header .section-bg .fa,.navbar-brand b,.navbar-collapse a,.price-plan li:nth-child(2),.process-head b,.user-description h2,.user-description p,h3#todayDay,p#date {
		color: #fff!important;
	}

	#issues .fa,.comment a,.comment span,.user-block h2 {
		color: #999;
	}

	.clients-testimonials i.fa,.fixed-left-contact p,.fixed-right-socials .fa,.front-name,.front-tags,.posts-list span {
		color: #ccc;
	}

	.clients-testimonials b {
		color: #283235;
	}

	.price-plan ul {
		color: #8d979b;
	}

	::-webkit-input-placeholder {
		color: #333;
	}

	:-moz-placeholder {
		color: #333;
	}

	::-moz-placeholder {
		color: #333;
	}

	:-ms-input-placeholder {
		color: #333;
	}

	.bottom-br,.left-br,.right-br,.top-br {
		position: fixed;
		background: #fff;
		z-index: 9;
	}

	.top-br {
		top: 0;
		left: 0;
		width: 100%;
		height: 30px;
	}

	.right-br {
		top: 0;
		right: 0;
		width: 30px;
		height: 100%;
	}

	.bottom-br {
		bottom: 0;
		left: 0;
		width: 100%;
		height: 30px;
	}

	.left-br {
		top: 0;
		left: 0;
		width: 30px;
		height: 100%;
	}

	.fixed-left-contact {
		position: fixed;
		left: 0;
		z-index: 100;
		width: 30px;
		height: 100%;
	}

	.fixed-left-contact p {
		position: absolute;
		left: -38px;
		top: 52%;
		letter-spacing: 2px;
		-ms-transform: rotate(-90deg);
		-webkit-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}

	.fixed-left-contact p a {
		color: #ccc;
		text-decoration: none;
	}

	.fixed-left-contact p a:hover {
		color: #333;
	}

	.fixed-right-socials {
		position: fixed;
		right: 30px;
		top: 45%;
		z-index: 20;
	}

	.fixed-right-socials ul {
		list-style: none;
		padding: 10;
	}

	.fixed-right-socials li {
		margin: 0;
		font-size: 10em;
		line-height: .2em;
	}

	.navbar-default {
		padding: 30px 30px 0 30px;
		border: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: 0 0;
		z-index: 9;
		-webkit-animation-delay: 1.7s;
		-o-animation-delay: 1.7s;
		animation-delay: 1.7s;
	}

	.navbar-brand {
		border: 1px solid #fff;
		width: 170px;
		height: 31px;
		padding: 9px 0;
		line-height: 11px;
		margin-left: 15px!important;
		margin-top: 30px;
		position: relative;
		text-indent: 35px;
		background: url(../images/logo.png) no-repeat 10px 50%;
	}

	.navbar-brand:before {
		content: "";
		position: absolute;
		top: 0;
		left: 35px;
		width: 2px;
		height: 100%;
		border-right: 1px solid #fff;
	}

	.navbar-header img {
		float: left;
		margin-right: 9px;
	}

	.logo-text {
		margin-left: 9px;
	}

	.navbar-nav>li>a {
		padding: 7px 15px;
		margin: 0 5px;
		line-height: 1.45;
	}

	.navbar-nav {
		margin-top: 30px;
		-webkit-transition: all .3s linear;
		-o-transition: all .3s linear;
		transition: all .3s linear;
	}

	.navbar-nav a {
		-webkit-transition: all .3s linear;
		transition: all .3s linear;
	}

	header {
		position: relative;
	}

	header:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(46,61,86,.6);
	}

	html {
		overflow: auto;
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
	}

	::-webkit-scrollbar {
		width: 0;
		background: 0 0;
		display: none;
	}

	.user-block {
		padding: 30px;
		background: #fff;
		margin-bottom: 140px;
		box-shadow: 0 0 10px -3px #2e3d42;
		margin-top: 170px;
		-webkit-animation-duration: 2s;
		animation-duration: 2s;
		-webkit-animation-delay: 1.5s;
		-o-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.user-block img {
		margin: auto;
		width: 100%;
	}

	.user-block h2 {
		margin: 30px 0;
	}

	.user-block .function {
		background: #d8e0e4;
		padding: 26px 36px;
		margin: 0 auto;
		letter-spacing: 2px;
	}

	.user-description {
		padding-left: 30px;
		padding-right: 0;
		margin-top: 150px;
	}

	.user-description h2:first-child {
		background: #333;
		text-align: center;
		width: 134px;
		padding: 25px 0;
		margin: 50px 0 50px 0;
	}

	.user-description h2:nth-child(2) {
		line-height: 1.4;
		margin-bottom: 50px;
	}

	.user-description a {
		width: 268px;
		height: 58px;
		margin-top: 50px;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 0;
		line-height: 3.3;
		-webkit-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
	}

	.user-description a i.fa {
		margin-right: 15px;
	}

	.animated-intro {
		height: 90px;
	}

	.typed-cursor {
		display: none;
	}

	.particles-header .user-block,.particles-header .user-description {
		z-index: 2;
	}

	#particles-js {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #8d979b;
		background-image: url("");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
		top: 0;
		left: 0;
	}

	#video-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	}

	#section1 hr {
		border-top: 1px solid #ccc;
		margin: 24px 0 25px 0;
	}

	#section1 h2 {
		margin: 15px 0 5px 0;
	}

	.section-bg {
		position: relative;
		border: 1px solid #bbbdbe;
		width: 58px;
		height: 59px;
		padding: 7px;
		margin: 0 auto 15px auto;
		line-height: 44px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.section-bg:before {
		content: "";
		position: absolute;
		width: 1px;
		height: 10px;
		border-left: 1px solid #bbbdbe;
		top: -20px;
		left: 50%;
		opacity: 0;
	}

	.section-bg:after {
		content: "";
		position: absolute;
		width: 1px;
		height: 10px;
		border-left: 1px solid #bbbdbe;
		top: 20px;
		right: -18px;
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
		opacity: 0;
	}

	.section-bg p {
		width: 36px;
		height: 30px;
		margin: 5px auto;
	}

	.section-bg p:before {
		content: "";
		position: absolute;
		width: 1px;
		height: 10px;
		border-left: 1px solid #bbbdbe;
		top: 67px;
		left: 50%;
		opacity: 0;
	}

	.section-bg p:after {
		content: "";
		position: absolute;
		width: 1px;
		height: 10px;
		border-left: 1px solid #bbbdbe;
		top: 23px;
		left: -16px;
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
		opacity: 0;
	}

	.section-bg i {
		-webkit-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 30px;
		color: #bbbdbe;
		opacity: 0;
	}

	.active.section-bg i {
		position: relative;
		opacity: 1;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		-webkit-animation: moveUp 1s ease-in-out;
		-o-animation: moveUp 1s ease-in-out;
		animation: moveUp 1s ease-in-out;
	}

	.active.section-bg p:after {
		-webkit-animation: light2 1s linear;
		-o-animation: light2 1s linear;
		animation: light2 1s linear;
		opacity: 1;
	}

	.active.section-bg p:before {
		-webkit-animation: light3 1s linear;
		-o-animation: light3 1s linear;
		animation: light3 1s linear;
		opacity: 1;
	}

	.active.section-bg:after {
		-webkit-animation: light4 1s linear;
		-o-animation: light4 1s linear;
		animation: light4 1s linear;
		opacity: 1;
	}

	.active.section-bg:before {
		-webkit-animation: light1 1s linear;
		-o-animation: light1 1s linear;
		animation: light1 1s linear;
		opacity: 1;
	}

	.progress-bars {
		width: 100%;
		margin: 0 auto -10px;
		float: left;
		text-align: center;
	}

	.meter,.meter-test {
		width: 140px;
		height: 350px;
		position: relative;
		margin: auto;
		display: inline-block;
		margin-left: -5px;
	}

	.meter-test {
		width: 0;
		overflow: hidden;
		opacity: 0;
	}

	.meter span.meter-level,.meter-test span.meter-level {
		font-size: 14px;
		width: 140px;
		text-align: center;
		float: left;
		text-transform: uppercase;
		font-weight: 700;
		position: relative;
	}

	.meter span.meter-level b {
		margin-top: -10px;
		position: absolute;
		margin-left: -40px;
	}

	.meter span.meter-title,.meter-test span.meter-title {
		font-size: 14px;
		width: 140px;
		text-align: center;
		float: left;
		text-transform: uppercase;
		font-weight: 700;
		margin-top: 30px;
		padding-top: 30px;
		border-top: solid 1px #ccc;
	}

	.meter-test>span.meter-bar,.meter>span.meter-bar {
		display: inline-block;
		height: 300px;
		position: relative;
		overflow: hidden;
		width: 140px;
	}

	.meter-test>span.meter-bar {
		height: 300px!important;
	}

	.meter>span.meter-bar:before {
		content: "";
		background-color: #000;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		width: 1px;
	}

	.meter>span.meter-bar {
		animation: move 1ms linear infinite;
	}

	.meter>p {
		position: absolute;
		top: -30px;
		margin-left: -15px;
		display: inline-block;
		-webkit-animation: move2 1ms linear;
		-o-animation: move2 1ms linear;
		animation: move2 1ms linear;
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.progress-name ul {
		width: 15%;
		height: 105px;
		margin: 0 24%;
		text-align: right;
		float: left;
		-webkit-transform: rotate(-90deg);
		-moz-transform: rotate(-90deg);
		-ms-transform: rotate(-90deg);
		-o-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}

	.progress-name ul li {
		margin: 90% 0;
	}

	#section2 i {
		color: #fff;
	}

	#section2 .section-bg,#section2 .section-bg:after,#section2 .section-bg:before {
		border: 1px solid #fff;
	}

	#section2 .section-bg p:after,#section2 .section-bg p:before {
		border-color: #fff;
	}

	#section2 h2 {
		margin: 15px 0 5px 0;
	}

	.portofolio-menu ul {
		margin: 55px 0 0 0;
		padding: 0;
	}

	.portofolio-menu li button {
		color: #fff;
		padding: 10px 30px;
		border: 1px solid #fff;
		margin: 0 9px;
		display: block;
		letter-spacing: 2px;
		background: 0 0;
		text-transform: uppercase;
		-webkit-transition: background .2s linear;
		-o-transition: background .2s linear;
		transition: background .2s linear;
	}

	.portofolio-wrapp .dribble-shot {
		position: relative;
		background: #fff;
		margin-top: 30px;
		padding: 30px;
		cursor: pointer;
		overflow: hidden;
	}

	.portofolio-wrapp .dribble-shot img {
		margin-left: auto;
		margin-right: auto;
	}

	#section3 h2 {
		margin: 15px 0 5px 0;
	}

	.process-head {
		margin-top: 55px;
		margin-bottom: 25px;
		background: #333;
		height: 60px;
	}

	.process-head h1 {
		width: 88px;
		height: 58px;
		text-align: center;
		margin: 1px;
		line-height: 1.6;
		background-color: #fff;
		float: left;
	}

	.process-head b {
		line-height: 5;
		letter-spacing: 2px;
	}

	.process-list li {
		position: relative;
		height: 15px;
		margin: 15px 0;
		background-color: transparent;
		box-shadow: none;
	}

	.process-list span {
		height: 1px;
		margin-top: 5px;
		position: relative;
		overflow: hidden;
		display: block;
		background-color: #333;
	}

	.process-list b {
		position: absolute;
		top: -1px;
		background: #ecf1f4;
		padding: 0 8px;
		left: 3%;
		z-index: 2;
	}

	#section4 h2 {
		margin: 15px 0 5px 0;
	}

	#timeline {
		width: 100%;
		overflow: hidden;
		margin: 30px auto 0 auto;
		padding-top: 30px;
		position: relative;
	}

	#timeline:before {
		content: "";
		position: absolute;
		width: 90%;
		left: 58px;
		top: 30px;
		border-top: 1px solid #ccc;
	}

	#dates {
		width: 800px;
	}

	#dates:before {
		content: "";
		position: absolute;
		right: 0;
		top: 31px;
		width: 100px;
		height: 60px;
		background: #fff;
		z-index: 2;
	}

	#dates:after {
		content: "";
		position: absolute;
		left: 0;
		top: 31px;
		width: 100px;
		height: 60px;
		background: #fff;
		z-index: 2;
	}

	#dates li {
		list-style: none;
		float: left;
		width: 135px;
		height: 50px;
		text-align: center;
		margin-left: -35px;
		margin-right: 35px;
		position: relative;
		top: 20px;
	}

	#dates a {
		line-height: 38px;
		padding-bottom: 10px;
		font-size: 12px;
		display: inline-block;
		color: #666;
	}

	#dates a:before {
		content: '';
		position: absolute;
		top: -34px;
		left: 39%;
		width: 28px;
		height: 28px;
		border: 1px solid #333;
		border-radius: 50%;
		z-index: 2;
		background: #fff;
	}

	#dates a.selected:before {
		content: '';
		position: absolute;
		top: -34px;
		left: 39%;
		width: 28px;
		height: 28px;
		border: 1px solid #333;
		border-radius: 50%;
		z-index: 2;
		background: #fff;
	}

	#dates a.selected:after {
		content: "";
		position: absolute;
		top: -28px;
		left: 59px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #333;
		z-index: 2;
	}

	#dates li~li a:before {
		border-color: #333;
	}

	#dates li.selected~li a:before {
		border-color: #ccc;
	}

	#issues {
		overflow: hidden;
		position: relative;
		left: 11%;
	}

	#issues li {
		width: 800px;
		list-style: none;
		float: left;
	}

	#issues h1 {
		margin-bottom: 25px;
		margin-top: 45px;
	}

	#issues b.text-uppercase {
		font-size: 14px;
		background: #d8e0e4;
		padding: 15px 30px;
	}

	#issues li p {
		margin-top: 30px;
		margin-bottom: 0;
		line-height: 1.7;
		color: #999;
	}

	#issues .center-dot,#issues li i {
		color: #999;
	}

	#issues .center-dot {
		font-size: 14px;
	}

	#next-issue,#prev-issue {
		position: absolute;
		top: 2px;
		border: 1px solid #333;
		border-radius: 50%;
		height: 58px;
		width: 58px;
		background: #fff;
		text-indent: -9999px;
		overflow: hidden;
		z-index: 2;
	}

	#next-issue {
		right: 0;
	}

	#prev-issue {
		left: 0;
	}

	#next-issue:before,#prev-issue:before {
		content: "";
		position: absolute;
		top: 20px;
		width: 15px;
		height: 15px;
		border-right: 1px solid #333;
		border-top: 1px solid #333;
	}

	#prev-issue:before {
		right: 17px;
		-webkit-transform: rotate(-135deg);
		-moz-transform: rotate(-135deg);
		-ms-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
		transform: rotate(-135deg);
	}

	#next-issue:before {
		left: 17px;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#next-issue:hover,#prev-issue:hover {
		border: 1px solid #ccc;
		background: #fff;
	}

	#next-issue:hover:before,#prev-issue:hover:before {
		border-right: 1px solid #ccc;
		border-top: 1px solid #ccc;
		background: #fff;
	}

	.timelinebar {
		width: 100%;
		height: 1px;
		background-color: #333;
		float: left;
		position: absolute;
		z-index: 1;
		transition: width 150ms ease-in-out 0s;
		margin-left: 58px;
	}

	.faded-btn {
		display: block!important;
		opacity: .2;
	}

	#section5 h2 {
		margin: 15px 0 5px 0;
	}

	.cbp_tmtimeline {
		margin: 26px 0 140px 0;
		padding: 0;
		list-style: none;
		position: relative;
	}

	.cbp_tmtimeline:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background: #ccc;
		left: 50%;
		height: 160%;
	}

	.cbp_tmtimeline>li {
		position: relative;
		clear: both;
	}

	.cbp_tmtimeline>li .cbp_tmtime {
		display: inline-block;
		width: 50%;
		position: absolute;
		top: 22px;
		left: -30px;
	}

	.cbp_tmtimeline li i {
		font-size: 14px;
	}

	.cbp_tmtimeline>li .cbp_tmlabel {
		color: #333;
		padding: 15px 0;
		font-size: 14px;
		line-height: 1.4;
		position: relative;
		top: 8px;
		left: 30px;
		width: 50%;
		display: block;
		float: right;
		clear: both;
	}

	.cbp_tmtimeline>li .cbp_tmicon {
		width: 5px;
		height: 5px;
		position: absolute;
		background: #ccc;
		border-radius: 50%;
		left: 49.8%;
		top: 31px;
	}

	.clients-carousel {
		width: 90%!important;
		margin: 70px auto 30px;
	}

	.clients-carousel .owl-carousel .owl-stage-outer {
		margin-bottom: 30px;
	}

	#section6 h2 {
		margin: 15px 0 5px 0;
	}

	.clients-testimonials {
		padding-bottom: 3%;
	}

	.slide {
		margin-bottom: 8px;
	}

	.slide h3 {
		margin-top: 30px;
		margin-bottom: 4px;
	}

	.slide-content {
		background: #ecf1f4;
		width: 48.29%;
		margin: 0 auto;
		padding: 30px;
		position: relative;
	}

	.slide-content:after {
		content: "";
		position: absolute;
		width: 20px;
		height: 20px;
		background: #ecf1f4;
		bottom: -10px;
		left: 48%;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.slide-content p {
		margin: 20px 0;
	}

	.clients-testimonials b.text-uppercase {
		letter-spacing: 2px;
	}

	#section8 h2 {
		margin: 15px 0 5px 0;
	}

	.blog-intro {
		position: relative;
		margin-top: 30px;
		background: #fff;
		cursor: pointer;
		padding: 30px 30px 26px;
		overflow: hidden;
		transition: background .2s ease-in-out;
	}

	.blog-intro img {
		margin: 0 auto 24px auto;
		width: 100%;
	}

	.blog-intro hr {
		margin: 25px auto 27px;
	}

	.blog-intro b {
		text-transform: capitalize;
		height: 40px;
		display: block;
	}

	.blog-intro a {
		position: absolute;
		bottom: 30px;
		left: 30px;
		width: 77.03%;
		height: 37px;
		border: 1px solid #fff;
		border-radius: 0;
		background: #333;
		color: #ccc;
		font-weight: 700;
		transform: translateY(200px);
		transition: .1s transform .2s ease-in-out;
	}

	.blog-intro:hover {
		background: #333;
		color: #fff;
	}

	.blog-intro:hover hr,.blog-intro:hover span {
		visibility: hidden;
	}

	.blog-intro:hover a {
		transform: translateY(0);
	}

	.blog-header {
		padding: 150px 0 120px 0;
	}

	.blog-header .section-bg {
		line-height: 38px;
	}

	.blog-header .section-bg,.blog-header .section-bg i,.blog-header .section-bg p,.blog-header .section-bg p:after,.blog-header .section-bg p:before,.blog-header .section-bg:after,.blog-header .section-bg:before {
		opacity: 1;
	}

	.posts-list {
		margin-top: 25px;
	}

	.categories h3 {
		margin: 56px 0 25px 0;
	}

	.category-menu a {
		display: block;
		margin: 15px 0 15px 0;
		padding-bottom: 10px;
	}

	.category-menu a.hvr-underline-from-left:before {
		background: #333!important;
	}

	.tags h3 {
		margin: 60px 0 25px 0;
	}

	.tags-menu a {
		display: inline-block;
		padding: 10px 16px;
		background: #fff;
		margin-bottom: 10px;
		-webkit-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
	}

	.twitter-block h3 {
		margin: 50px 0 25px 0;
	}

	.twitter-block p {
		margin-bottom: 15px;
	}

	.twitter-block a {
		padding-bottom: 5px;
	}

	.twitter-block a.hvr-underline-from-left:before {
		background: #333!important;
	}

	.instagram-block {
		width: 107%;
	}

	.instagram-block h3 {
		margin: 55px 0 25px 0;
	}

	.insta-photo li {
		margin: 0 20px 25px 0;
	}

	.insta-photo a {
		display: block;
		position: relative;
	}

	.instagram-block a.hvr-underline-from-left {
		padding-bottom: 5px;
	}

	.instagram-block a.hvr-underline-from-left:before {
		background: #333!important;
	}

	.insta-photo a:before {
		content: "\f16d";
		font: normal normal normal 14px/1 FontAwesome;
		font-size: 16px;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #333;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(255,255,255,.3);
		transform: scale(0);
		transform-origin: center;
		transition: transform .2s ease-in-out;
	}

	.pagination {
		margin: 30px 0 70px 0;
	}

	.pagination li a {
		padding: 20px 25px;
		background: 0 0;
		color: #333;
		border: none;
		border-radius: 50%;
		font-size: 12px;
		margin-right: 10px;
	}

	.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover {
		background-color: transparent;
		border: 1px solid #333;
		border-radius: 50%;
		color: #333;
		z-index: 0;
	}

	.pagination li:first-child a,.pagination li:last-child a {
		position: absolute;
		width: 58px;
		height: 58px;
		border: 1px solid #333;
		border-radius: 50%;
	}

	.pagination li:first-child a {
		left: 15px;
	}

	.pagination li:last-child a {
		right: 0;
	}

	.pagination li:first-child a:before,.pagination li:last-child a:before {
		content: "";
		position: absolute;
		left: 17px;
		top: 22px;
		width: 15px;
		height: 15px;
		border-top: 1px solid #333;
		border-right: 1px solid #333;
	}

	.pagination li:last-child a:before {
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.pagination li:first-child a:before {
		-webkit-transform: rotate(-135deg);
		-ms-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
		transform: rotate(-135deg);
	}

	.post-header h2,.post-header p {
		margin-bottom: 27px;
	}

	.post-content {
		padding: 30px;
		margin: 60px 0;
		letter-spacing: 1.2px;
		line-height: 1.6;
	}

	.post-content .col-md-9 {
		padding: 0 0 0 45px;
	}

	.post-content h3 {
		margin-bottom: 30px;
	}

	.post-content img.img-responsive {
		width: 100%;
		margin: 20px 0 30px 0;
	}

	.post-content .cited {
		padding: 50px;
		margin: 0 auto 30px auto;
		width: 96%;
		border-left: 6px solid #ccc;
	}

	.post-content .content {
		margin-bottom: 70px;
		position: relative;
	}

	.post-content .content:before {
		content: "";
		position: absolute;
		left: -15px;
		bottom: -50px;
		width: 104%;
		height: 1px;
		border-top: 1px solid #ecf1f4;
	}

	.post-content .content ul {
		margin: 20px 0 30px 0;
	}

	.post-content .about-author {
		position: relative;
	}

	.post-content .about-author img {
		padding: 30px;
		background: #ecf1f4;
		margin-top: 5px;
	}

	.post-content .about-author h3 {
		margin: 0 0 5px 0;
	}

	.post-content .about-author p {
		margin: 10px 0;
	}

	.post-content .about-author a {
		padding: 6px 20px;
		border: 1px solid #999;
		color: #999;
		-webkit-transition: background .3s ease-in-out;
		-moz-transition: background .3s ease-in-out;
		-ms-transition: background .3s ease-in-out;
		-o-transition: background .3s ease-in-out;
		transition: background .3s ease-in-out;
	}

	.post-content .about-author i.fa {
		margin: 0 3px 0 -3px;
	}

	.post-content .about-author:before {
		content: "";
		position: absolute;
		left: -15px;
		bottom: -30px;
		width: 104%;
		height: 1px;
		border-top: 1px solid #ecf1f4;
	}

	.post-content .comments-count h2 {
		margin: 60px 0 30px 0;
	}

	.post-content .comment {
		width: 96%;
		margin: 0 auto;
		padding: 30px;
	}

	.post-content .comment dt {
		width: 15%;
	}

	.post-content .author-comment h4 {
		margin: 0 0 20px 0;
	}

	.post-content dt span {
		float: right;
	}

	.post-content dd p {
		margin: 0;
	}

	.post-content .comment-contain {
		margin-left: 18.5%;
	}

	.post-content .guest-comment h4 {
		margin: 30px 0 20px 0;
	}

	.guest-comment .comment-contain {
		padding: 30px;
		width: 85.5%;
	}

	.guest-comment .replyLink {
		margin-bottom: 25px;
		display: block;
		width: 45px;
	}

	.comment-form {
		position: relative;
	}

	.comment-form:before {
		content: "";
		position: absolute;
		bottom: 30px;
		left: -15px;
		width: 105%;
		height: 1px;
		border-bottom: 1px solid #ecf1f4;
	}

	.comment-form .col-md-10 {
		padding-left: 45px;
	}

	.comment-form .mess-form {
		padding-right: 30px;
	}

	.comment-form h3 {
		margin: 0 0 10px 0;
	}

	.comment-form input[type=email],.comment-form input[type=text],.comment-form textarea {
		width: 100%;
		height: 50px;
		border: none;
		border-bottom: 1px solid #ecf1f4;
		resize: none;
	}

	.comment-form textarea {
		padding-top: 15px;
	}

	.comment-form .mess-form label {
		top: 14px;
	}

	.comment-form input[type=submit] {
		font-weight: 700;
		letter-spacing: 2px;
		margin-top: 24px;
		margin-bottom: 61px;
		border-radius: 0;
		border: 1px solid #999;
		color: #333;
		padding: 15px 40px;
		-webkit-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
	}

	.post-controls a {
		position: relative;
		font-size: 12px;
		color: #999;
		border: 1px solid #999;
		border-radius: 0;
		height: 30px;
		-webkit-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
	}

	.post-controls a.prev-post {
		width: 150px;
		text-align: right;
		padding-right: 20px;
	}

	.post-controls a.prev-post:before {
		content: "";
		position: absolute;
		top: 43%;
		left: 20px;
		width: 6px;
		height: 6px;
		border-left: 1px solid #999;
		border-bottom: 1px solid #999;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.post-controls a.next-post {
		width: 128px;
		text-align: left;
		padding-left: 20px;
	}

	.post-controls a.next-post:before {
		content: "";
		position: absolute;
		top: 43%;
		right: 20px;
		width: 6px;
		height: 6px;
		border-top: 1px solid #999;
		border-right: 1px solid #999;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	#section7 h2 {
		margin: 15px 0 5px 0;
	}

	#section7 .section-bg {
		border: 1px solid #fff;
	}

	#section7 .section-bg p:after,#section7 .section-bg p:before,#section7 .section-bg:after,#section7 .section-bg:before {
		border-left: 1px solid #fff;
	}

	#section7 .section-bg i {
		color: #fff;
	}

	.price-plan {
		margin-top: 40px;
		background: #333;
		position: relative;
	}

	.price-plan h3 {
		height: 120px;
		line-height: 180px;
		margin: 0;
	}

	/* .price-plan.tiny h3 {
		background: url(../images/plan-1.png) no-repeat 50% 40%,#ecf1f4;
	}

	.price-plan.medium h3 {
		background: url(../images/plan2.png) no-repeat 50% 40%,#ecf1f4;
	} */

	.price-plan.medium:before {
		content: "Best Value";
		font-size: 10px;
		font-weight: 700;
		text-transform: uppercase;
		background: #666;
		color: #fff;
		position: absolute;
		top: 30px;
		right: 0;
		width: 60px;
		height: 60px;
		padding: 15px 10px;
	}

	/* .price-plan.big h3 {
		background: url(../images/plan3.png) no-repeat 50% 40%,#ecf1f4;
	} */

	.price-plan li:first-child {
		padding: 15px 0;
		letter-spacing: 2px;
	}

	.price-plan li:nth-child(2) {
		padding: 10px 0;
		border-top: 1px solid #666;
		border-bottom: 1px solid #666;
	}

	.price-plan li {
		padding-top: 30px;
		position: relative;
	}

	.price-plan li sub {
		margin-left: -25px;
	}

	.price-plan li:last-child:before,.price-plan li:nth-child(4):before {
		content: "";
		position: absolute;
		top: 15px;
		left: 46%;
		width: 30px;
		border-top: 1px solid #595959;
		color: #666;
		font-size: 20px;
	}

	.price-plan a.btn {
		width: 82.702%;
		height: 47px;
		display: inline-block;
		background: 0 0;
		border: 1px solid #fff;
		border-radius: 0;
		color: #fff;
		line-height: 35px;
		margin: 10px auto 30px auto;
		letter-spacing: 2px;
		transition: all .2s ease-in-out;
	}

	#section9 h2 {
		margin: 15px 0 5px 0;
	}

	#section9 .section-bg {
		border: 1px solid #fff;
	}

	#section9 .section-bg p:after,#section9 .section-bg p:before,#section9 .section-bg:after,#section9 .section-bg:before {
		border-left: 1px solid #fff;
	}

	#section9 .section-bg i {
		color: #fff;
	}

	.calendar-today {
		background: #333;
		margin-top: 60px;
		padding: 75px 0;
	}

	#date {
		position: relative;
		width: 47.56%;
		margin: 0 auto;
		border: 1px solid #fff;
		padding: 30px 0;
	}

	#date:after,#date:before {
		content: "";
		position: absolute;
		top: -15px;
		height: 30px;
		width: 1px;
		background: #fff;
	}

	#date:before {
		left: 30px;
	}

	#date:after {
		right: 30px;
	}

	#month {
		width: 47.56%;
		background: #fff;
		margin: 0 auto;
		padding: 28px 0;
	}

	.calendar-today hr {
		width: 150px;
		margin: 10px auto;
	}

	#todayDay {
		margin: 50px 0 0 0;
	}

	.calendar-wrapp {
		margin-top: 60px;
		background: #fff;
		padding: 0;
		max-height: 477px;
	}

	.ui-datepicker-calendar,.ui-datepicker-month,.ui-datepicker-year {
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 700;
		margin: 0 auto;
	}

	.ui-datepicker-calendar a {
		color: #333;
	}

	.calendar-wrapp .ui-datepicker-calendar {
		width: 100%;
		height: 406px;
		padding: 25px 30px 30px;
		display: block;
		margin: 0 auto;
	}

	.calendar-wrapp .ui-datepicker-title {
		text-align: center;
		background: #ecf1f4;
		padding: 40px 0;
		word-spacing: 2px;
	}

	.calendar-wrapp .ui-datepicker-calendar thead {
		margin: 0 0 45px 0;
		display: inline-block;
	}

	.calendar-wrapp .ui-datepicker-calendar tbody {
		display: inline-block;
	}

	.calendar-wrapp .ui-datepicker-calendar th {
		float: left;
		display: inline-block;
		margin: 0 38px;
	}

	.calendar-wrapp td {
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 2;
		margin: 7px 36px;
		float: left;
	}

	.ui-datepicker-calendar .ui-state-active {
		padding: 5px 10px;
		border: 1px solid #ccc;
	}

	.ui-datepicker-calendar td:last-child,.ui-state-disabled {
		background: #ecf1f4;
	}

	.ui-datepicker-other-month {
		opacity: .3;
	}

	.calendar-wrapp .ui-datepicker-next,.calendar-wrapp .ui-datepicker-prev {
		position: absolute;
		top: 30px;
		border: 1px solid #ccc;
		border-radius: 50%;
		height: 38px;
		width: 38px;
		text-indent: -9999px;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;
	}

	.calendar-wrapp .ui-datepicker-next {
		right: 30px;
	}

	.calendar-wrapp .ui-datepicker-prev {
		left: 30px;
	}

	.calendar-wrapp .ui-datepicker-next:before,.calendar-wrapp .ui-datepicker-prev:before {
		content: "";
		position: absolute;
		top: 12px;
		width: 12px;
		height: 12px;
		border-right: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}

	.calendar-wrapp .ui-datepicker-prev:before {
		right: 10px;
		-webkit-transform: rotate(-135deg);
		-moz-transform: rotate(-135deg);
		-ms-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
		transform: rotate(-135deg);
	}

	.calendar-wrapp .ui-datepicker-next:before {
		left: 10px;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.calendar-wrapp .ui-datepicker-next:hover,.calendar-wrapp .ui-datepicker-prev:hover {
		border: 1px solid #333;
	}

	.calendar-wrapp .ui-datepicker-next:hover:before,.calendar-wrapp .ui-datepicker-prev:hover:before {
		border-right: 1px solid #333;
		border-top: 1px solid #333;
	}

	footer {
		padding: 10% 0 90px 0;
	}

	footer h2 {
		margin: 15px 0 5px 0;
	}

	footer .section-bg {
		border: 1px solid #a7a7a8;
	}

	footer .section-bg p:after,footer .section-bg p:before,footer .section-bg:after,footer .section-bg:before {
		border-left: 1px solid #c3c6c7;
		opacity: 1;
	}

	footer .section-bg i {
		opacity: 1;
	}

	#map-canvas {
		padding: 0;
		height: 413px;
	}

	#map-canvas iframe {
		width: 100%;
		border: none;
	}

	#map-canvas,.contact-details,.contact-form {
		margin-top: 55px;
	}

	.contact-form {
		padding-left: 30px;
		overflow: hidden;
	}

	.mess-form .form-control {
		position: relative;
		height: auto;
		padding: 0;
		box-shadow: none;
		border: none;
		border-radius: 0;
		margin: 0;
		display: inline-block;
		width: 100%;
	}

	.mess-form label {
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 30px;
		transition: .2s ease all;
		-moz-transition: .2s ease all;
		-webkit-transition: .2s ease all;
	}

	.mess-form .border {
		position: absolute;
		display: block;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 1px;
		background: #333;
		transform: scale(0);
		transform-origin: center;
		transition: transform .2s ease-in-out;
	}

	.mess-form textarea {
		float: left;
	}

	input:active~label,input:focus~label,input:valid~label {
		top: 15px;
		color: #212121;
	}

	textarea:active~label,textarea:focus~label,textarea:valid~label {
		top: 0;
		color: #212121;
	}

	input:focus~.border,input:valid~.border,textarea:focus~.border {
		transform: scale(1);
	}

	.contact-form input[type=email],.contact-form input[type=text] {
		border: none;
		border-bottom: 1px solid #ecf1f4;
		width: 100%;
		padding: 5px 0;
		margin-top: 30px;
	}

	.contact-form textarea {
		resize: none;
		border: none;
		border-bottom: 1px solid #ecf1f4;
		width: 100%;
		padding-top: 20px;
		height: 128px;
	}

	.contact-form button[type=submit] {
		margin: 29px 0 30px 0;
		width: 100%;
		border: 1px solid #333;
		border-radius: 0;
		color: #333;
		padding: 10px 0;
		transition: all .2s ease-in-out;
	}

	.contact-form button[type=submit]:focus,.contact-form input[type=email]:focus,.contact-form input[type=text]:focus,.contact-form textarea:focus {
		outline: 0;
	}

	.contact-details {
		padding-right: 30px;
	}

	.contact-details address {
		margin: 30px 0 56px 0;
	}

	.success-respond {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: all .2s ease-in-out;
		transform: translateX(-100%);
	}

	.success-respond.active {
		transform: translateX(0);
	}

	.success-respond .icon-separator {
		border: 2px solid;
	}

	.success-respond .icon {
		-webkit-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		font-size: 36px;
		color: #3c763d;
	}

	.success-respond .section-bg {
		border-color: #3c763d;
	}

	.success-respond .section-bg p:after,.success-respond .section-bg p:before,.success-respond .section-bg:after,.success-respond .section-bg:before {
		animation-name: fadeIn;
		animation-direction: alternate;
		animation-duration: .4s;
		animation-iteration-count: infinite;
		border-color: #3c763d;
	}

	.success-respond h4 {
		margin: 0;
	}

	.success-respond h4:first-of-type {
		margin: 20px 0 10px;
	}

	#overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #fff;
		z-index: 3;
	}

	#overlay h1 {
		position: absolute;
		right: 45px;
		bottom: 30px;
		width: 200px;
		height: 25px;
		color: #333;
		font-size: 24px;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
	}

	#page-404 {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
	}

	#page-404:before {
		content: "";
		position: absolute;
		top: 30px;
		left: 30px;
		bottom: 30px;
		right: 30px;
		width: 100%;
		height: 100%;
	}

	.content-404 {
		padding: 0;
		margin-top: 25%;
	}

	.content-404 h4 {
		margin-bottom: 30px;
	}

	.content-404 a {
		color: #fff;
		font-size: 12px;
		width: 198px;
		height: 30px;
		background: 0 0;
		border: 1px solid #fff;
		position: relative;
		z-index: 1;
		display: block;
		margin: 30px auto;
		line-height: 2.3;
		letter-spacing: 1px;
		-webkit-transition: all .3s ease-in-out;
		-o-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
	}

	.user-description a:focus,.user-description a:hover {
		background: #fff;
	}

	.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover {
		background: 0 0;
		border: 0;
		box-shadow: 0 0 0 1px #fff;
	}

	.portofolio-menu button:active,.portofolio-menu button:focus,.portofolio-menu button:hover {
		background: #fff;
		color: #333;
		text-decoration: none;
		outline: 0;
	}

	.portofolio-menu li.active button {
		background: #fff;
		color: #333;
		text-decoration: none;
	}

	.price-plan a.btn:hover {
		background: #fff;
		color: #333;
	}

	.price-plan a.btn:active {
		position: relative;
		top: -1px;
	}

	.contact-form button[type=submit]:hover {
		background: #333;
		color: #fff;
	}

	.fa-facebook-official:hover {
		color: #3b5a9a;
	}

	.fa-twitter-square:hover {
		color: #42c8f4;
	}

	.fa-instagram:hover {
		color: #151d11;
	}

	.fa-pinterest-square:hover {
		color: #cd2129;
	}

	.fa-youtube-square:hover {
		color: #ce322e;
	}

	.fa-vimeo-square:hover {
		color: #5dc8ff;
	}

	.side-bar a:focus,.side-bar a:hover {
		text-decoration: none;
		outline: 0;
	}

	.tags-menu a:hover {
		background: #333;
		color: #fff;
	}

	.insta-photo a:hover:before {
		transform: scale(1);
	}

	.pagination li a:hover {
		background: #fff;
	}

	.post-content .about-author a:active,.post-content .about-author a:focus,.post-content .about-author a:hover {
		text-decoration: none;
		outline: 0;
		color: #fff;
		background: #999;
	}

	.guest-comment .replyLink:active,.guest-comment .replyLink:focus,.guest-comment .replyLink:hover {
		outline: 0;
		border: none;
		opacity: .8;
	}

	.comment-form input[type=email]:focus,.comment-form input[type=email]:hover,.comment-form input[type=text]:focus,.comment-form input[type=text]:hover,.comment-form textarea:focus,.comment-form textarea:hover {
		background: 0 0;
		outline: 0;
	}

	.comment-form input[type=submit]:focus,.comment-form input[type=submit]:hover {
		background: #999;
		color: #fff;
		outline: 0;
	}

	.post-controls a.next-post:hover,.post-controls a.prev-post:hover {
		background: #999;
		color: #fff;
	}

	.post-controls a.next-post:hover:before,.post-controls a.prev-post:hover:before {
		border-color: #fff;
	}

	.content-404 a:focus,.content-404 a:hover {
		text-decoration: none;
		background: #fff;
		color: #333;
	}

	.navbar-default {
		background: 0 0;
	}

	/* .front-header {
		background: url(../images/header-bg.jpg) no-repeat;
		background-size: cover;
	} */

	header:before {
		background: rgba(46,61,86,.6);
	}

	#blog-content,#section1,#section3,#section5,#section8,.guest-comment .comment-contain,.post-content .author-comment,.post-content .cited,footer {
		background: #ecf1f4;
	}

	#section2,#section7,#section9 {
		background: #8d979b;
	}

	.contact-details,.contact-form,.post-content {
		background: #fff;
	}

	/* .blog-header {
		background: url(../images/blog_grid-bg.jpeg) no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}

	#page-404 {
		background: url(../images/404_bg.jpg) no-repeat center;
		background-size: cover;
	} */

	#page-404:before {
		background: rgba(46,61,66,.6);
	}

	.navbar-fixed-top .navbar-brand {
		border: 1px solid #333;
		background: url(../images/logo-fixed.png) no-repeat 10px 50%;
	}

	.navbar-fixed-top .navbar-brand:before {
		border-right: 1px solid #333;
	}

	.navbar-fixed-top .navbar-brand b {
		color: #333!important;
	}

	.navbar-fixed-top .navbar-collapse {
		padding-right: 15px;
	}

	.navbar-fixed-top .navbar-nav>li>a {
		color: #333!important;
	}

	.navbar-fixed-top .navbar-nav>.active>a {
		box-shadow: 0 0 0 1px #333;
	}

	.navbar-fixed {
		background-color: #fff;
		padding: 0 0 30px 0;
		-webkit-box-shadow: 0 -10px 15px 4px #333;
		box-shadow: 0 -10px 15px 4px #333;
	}

	.hover-shot {
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(255,255,255,.85);
		height: 100%;
		width: 100%;
		padding: 50px 26px 26px 26px;
		transform: translateY(100%);
		transition: transform .2s ease-in-out;
	}

	.hover-shot ul {
		position: absolute;
		bottom: 0;
		padding: 20px 0;
		margin: 0;
		width: 82%;
		background: #fff;
	}

	.hover-shot li {
		opacity: 0;
	}

	.hover-shot .fa,.hover-shot span {
		color: #ccc!important;
		font-size: 12px;
	}

	.hover-shot b,.hover-shot p {
		margin: 10px 20px;
		font-size: 12px;
	}

	.hover-shot .fa {
		margin-right: 5px;
	}

	.hover-shot a {
		background: #3f4e55;
		color: #fff;
		height: 20px;
		width: 62px;
		line-height: .7;
		border: none;
		border-radius: 0;
		transition: all .2s ease-in-out;
	}

	.hover-shot a:hover {
		background: #fff;
		box-shadow: 0 0 0 1px #333;
	}

	.dribble-shot:hover .hover-shot {
		transform: translateY(0);
	}

	.dribble-shot:hover .hover-shot li {
		-webkit-animation: fadeInUp .3s ease-out;
		-o-animation: fadeInUp .3s ease-out;
		animation: fadeInUp .3s ease-out;
		animation-delay: .2s;
		animation-fill-mode: forwards;
	}

	.dribble-shot:hover .hover-shot li:first-child {
		animation-delay: .1s;
	}

	.dribble-shot:hover .hover-shot li:nth-child(2) {
		animation-delay: .2s;
	}

	.dribble-shot:hover .hover-shot li:nth-child(3) {
		animation-delay: .3s;
	}

	.dribble-shot:hover .hover-shot li:last-child {
		animation-delay: .4s;
	}

	.normal-state {
		padding: 20px 0 30px 0!important;
	}

	.margin-right0 {
		margin-right: 0!important;
	}

	.invisible {
		opacity: 0;
	}

	.mess-form ::-webkit-input-placeholder {
		color: #666;
		font-weight: 700;
		text-transform: uppercase;
	}

	.mess-form ::-moz-placeholder {
		color: #666;
		font-weight: 700;
		text-transform: uppercase;
	}

	.mess-form :-ms-input-placeholder {
		color: #666;
		font-weight: 700;
		text-transform: uppercase;
	}

	.mess-form :-moz-placeholder {
		color: #666;
		font-weight: 700;
		text-transform: uppercase;
	}

	.owl-height {
		-webkit-transition: height .5s ease-in-out;
		-moz-transition: height .5s ease-in-out;
		-ms-transition: height .5s ease-in-out;
		-o-transition: height .5s ease-in-out;
		transition: height .5s ease-in-out;
	}

	.owl-carousel {
		display: none;
		width: 100%;
		-webkit-tap-highlight-color: transparent;
		position: relative;
		z-index: 1;
	}

	.owl-carousel .owl-stage {
		position: relative;
		-ms-touch-action: pan-Y;
	}

	.owl-carousel .owl-stage:after {
		content: ".";
		display: block;
		clear: both;
		visibility: hidden;
		line-height: 0;
		height: 0;
	}

	.owl-carousel .owl-stage-outer {
		position: relative;
		overflow: hidden;
		-webkit-transform: translate3d(0,0,0);
	}

	.owl-carousel .owl-controls .owl-dot,.owl-carousel .owl-controls .owl-nav .owl-next,.owl-carousel .owl-controls .owl-nav .owl-prev {
		cursor: pointer;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.owl-carousel.owl-loaded {
		display: block;
	}

	.owl-carousel.owl-loading {
		opacity: 0;
		display: block;
	}

	.owl-carousel.owl-hidden {
		opacity: 0;
	}

	.owl-carousel .owl-refresh .owl-item {
		display: none;
	}

	.owl-carousel .owl-item {
		position: relative;
		min-height: 1px;
		float: left;
		margin: 10px 0;
		-webkit-backface-visibility: hidden;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.owl-carousel .owl-item img {
		display: block;
		max-width: 100%;
		-webkit-transform-style: preserve-3d;
	}

	.owl-carousel.owl-text-select-on .owl-item {
		-webkit-user-select: auto;
		-moz-user-select: auto;
		-ms-user-select: auto;
		user-select: auto;
	}

	.owl-carousel .owl-grab {
		cursor: move;
		cursor: -webkit-grab;
		cursor: -o-grab;
		cursor: -ms-grab;
		cursor: grab;
	}

	.owl-carousel.owl-rtl {
		direction: rtl;
	}

	.owl-carousel.owl-rtl .owl-item {
		float: right;
	}

	.owl-dots {
		position: absolute;
		width: 100%;
		height: 18px;
		text-align: center;
	}

	.owl-dot {
		padding: 4px;
		border: 1px solid #666;
		border-radius: 50%;
		display: inline-block;
		margin: 0 3px;
	}

	.owl-dot.active {
		background: #666;
	}

	.owl-nav {
		position: absolute;
		width: 100%;
		top: 30%;
	}

	.owl-nav .owl-next,.owl-nav .owl-prev {
		position: absolute;
		border: 1px solid #ccc;
		border-radius: 50%;
		height: 58px;
		width: 58px;
		text-indent: -9999px;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;
	}

	.owl-nav .owl-prev {
		left: 0;
	}

	.owl-nav .owl-next {
		right: 0;
	}

	.owl-nav .owl-next:before,.owl-nav .owl-prev:before {
		content: "";
		position: absolute;
		top: 20px;
		width: 15px;
		height: 15px;
		border-right: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}

	.owl-nav .owl-prev:before {
		right: 17px;
		-webkit-transform: rotate(-135deg);
		-moz-transform: rotate(-135deg);
		-ms-transform: rotate(-135deg);
		-o-transform: rotate(-135deg);
		transform: rotate(-135deg);
	}

	.owl-nav .owl-next:before {
		left: 17px;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.owl-nav .owl-next:hover,.owl-nav .owl-prev:hover {
		border: 1px solid #333;
	}

	.owl-nav .owl-next:hover:before,.owl-nav .owl-prev:hover:before {
		border-right: 1px solid #333;
		border-top: 1px solid #333;
		background: 0 0;
	}

	.no-js .owl-carousel {
		display: block;
	}

	.hvr-underline-from-left {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-moz-osx-font-smoothing: grayscale;
		position: relative;
		overflow: hidden;
	}

	.hvr-underline-from-left:before {
		content: "";
		position: absolute;
		z-index: -1;
		left: 0;
		right: 100%;
		bottom: 0;
		background: #fff;
		height: 1px;
		-webkit-transition-property: right;
		transition-property: right;
		-webkit-transition-duration: .3s;
		transition-duration: .3s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}

	.hvr-underline-from-left:active:before,.hvr-underline-from-left:focus:before,.hvr-underline-from-left:hover:before {
		right: 0;
	}

	.navbar-fixed-top .hvr-underline-from-left:before {
		background: #333;
	}

	@-webkit-keyframes moveUp {
		0% {
			transform: rotate(-45deg) translate(0,45px);
			opacity: 0;
		}

		100% {
			transform: rotate(-45deg) translate(0);
			opacity: 1;
		}
	}

	@keyframes moveUp {
		0% {
			transform: rotate(-45deg) translate(0,45px);
			opacity: 0;
		}

		100% {
			transform: rotate(-45deg) translate(0);
			opacity: 1;
		}
	}

	@-webkit-keyframes light1 {
		0% {
			opacity: 0;
			top: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light1 {
		0% {
			opacity: 0;
			top: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light2 {
		0% {
			opacity: 0;
			left: 5px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light2 {
		0% {
			opacity: 0;
			left: 5px;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light3 {
		0% {
			opacity: 0;
			top: 46px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light3 {
		0% {
			opacity: 0;
			top: 46px;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light4 {
		0% {
			opacity: 0;
			right: 6px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light4 {
		0% {
			opacity: 0;
			right: 6px;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes move2 {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes move2 {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes moveUp {
		0% {
			transform: rotate(-45deg) translate(0,45px);
			opacity: 0;
		}

		100% {
			transform: rotate(-45deg) translate(0);
			opacity: 1;
		}
	}

	@keyframes moveUp {
		0% {
			transform: rotate(-45deg) translate(0,45px);
			opacity: 0;
		}

		100% {
			transform: rotate(-45deg) translate(0);
			opacity: 1;
		}
	}

	@-webkit-keyframes light1 {
		0% {
			opacity: 0;
			top: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light1 {
		0% {
			opacity: 0;
			top: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light2 {
		0% {
			opacity: 0;
			left: 5px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light2 {
		0% {
			opacity: 0;
			left: 5px;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light3 {
		0% {
			opacity: 0;
			top: 46px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light3 {
		0% {
			opacity: 0;
			top: 46px;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes light4 {
		0% {
			opacity: 0;
			right: 6px;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes light4 {
		0% {
			opacity: 0;
			right: 6px;
		}

		100% {
			opacity: 1;
		}
	}

	@font-face {
		/* font-family:et-line;src:url(../fonts/et-line.eot);src:url(../fonts/et-line.eot?#iefix) format('embedded-opentype'),url(../fonts/et-line.woff) format('woff'),url(../fonts/et-line.ttf) format('truetype'),url(../fonts/et-line.svg#et-line) format('svg');font-weight:400;font-style:normal; */
	}

	[data-icon]:before {
		font-family: et-line;
		content: attr(data-icon);
		speak: none;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: inline-block;
	}

	.bura,.classy,.coma,.divc,.fitz,.frow,.kiwi,.lefty,.lehi,.libeled,.mydiv,.poll,.sown,.vice {
		display: none!important;
	}

	.icon-adjustments,.icon-alarmclock,.icon-anchor,.icon-aperture,.icon-attachment,.icon-bargraph,.icon-basket,.icon-beaker,.icon-bike,.icon-book-open,.icon-briefcase,.icon-browser,.icon-calendar,.icon-camera,.icon-caution,.icon-chat,.icon-circle-compass,.icon-clipboard,.icon-clock,.icon-cloud,.icon-compass,.icon-desktop,.icon-dial,.icon-document,.icon-documents,.icon-download,.icon-dribbble,.icon-edit,.icon-envelope,.icon-expand,.icon-facebook,.icon-flag,.icon-focus,.icon-gears,.icon-genius,.icon-gift,.icon-global,.icon-globe,.icon-googleplus,.icon-grid,.icon-happy,.icon-hazardous,.icon-heart,.icon-hotairballoon,.icon-hourglass,.icon-key,.icon-laptop,.icon-layers,.icon-lifesaver,.icon-lightbulb,.icon-linegraph,.icon-linkedin,.icon-lock,.icon-magnifying-glass,.icon-map,.icon-map-pin,.icon-megaphone,.icon-mic,.icon-mobile,.icon-newspaper,.icon-notebook,.icon-paintbrush,.icon-paperclip,.icon-pencil,.icon-phone,.icon-picture,.icon-pictures,.icon-piechart,.icon-presentation,.icon-pricetags,.icon-printer,.icon-profile-female,.icon-profile-male,.icon-puzzle,.icon-quote,.icon-recycle,.icon-refresh,.icon-ribbon,.icon-rss,.icon-sad,.icon-scissors,.icon-scope,.icon-search,.icon-shield,.icon-speedometer,.icon-strategy,.icon-streetsign,.icon-tablet,.icon-target,.icon-telescope,.icon-toolbox,.icon-tools,.icon-tools-2,.icon-trophy,.icon-tumblr,.icon-twitter,.icon-upload,.icon-video,.icon-wallet,.icon-wine {
		font-family: et-line;
		speak: none;
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: inline-block;
	}

	.icon-mobile:before {
		content: "\e000";
	}

	.icon-laptop:before {
		content: "\e001";
	}

	.icon-desktop:before {
		content: "\e002";
	}

	.icon-tablet:before {
		content: "\e003";
	}

	.icon-phone:before {
		content: "\e004";
	}

	.icon-document:before {
		content: "\e005";
	}

	.icon-documents:before {
		content: "\e006";
	}

	.icon-search:before {
		content: "\e007";
	}

	.icon-clipboard:before {
		content: "\e008";
	}

	.icon-newspaper:before {
		content: "\e009";
	}

	.icon-notebook:before {
		content: "\e00a";
	}

	.icon-book-open:before {
		content: "\e00b";
	}

	.icon-browser:before {
		content: "\e00c";
	}

	.icon-calendar:before {
		content: "\e00d";
	}

	.icon-presentation:before {
		content: "\e00e";
	}

	.icon-picture:before {
		content: "\e00f";
	}

	.icon-pictures:before {
		content: "\e010";
	}

	.icon-video:before {
		content: "\e011";
	}

	.icon-camera:before {
		content: "\e012";
	}

	.icon-printer:before {
		content: "\e013";
	}

	.icon-toolbox:before {
		content: "\e014";
	}

	.icon-briefcase:before {
		content: "\e015";
	}

	.icon-wallet:before {
		content: "\e016";
	}

	.icon-gift:before {
		content: "\e017";
	}

	.icon-bargraph:before {
		content: "\e018";
	}

	.icon-grid:before {
		content: "\e019";
	}

	.icon-expand:before {
		content: "\e01a";
	}

	.icon-focus:before {
		content: "\e01b";
	}

	.icon-edit:before {
		content: "\e01c";
	}

	.icon-adjustments:before {
		content: "\e01d";
	}

	.icon-ribbon:before {
		content: "\e01e";
	}

	.icon-hourglass:before {
		content: "\e01f";
	}

	.icon-lock:before {
		content: "\e020";
	}

	.icon-megaphone:before {
		content: "\e021";
	}

	.icon-shield:before {
		content: "\e022";
	}

	.icon-trophy:before {
		content: "\e023";
	}

	.icon-flag:before {
		content: "\e024";
	}

	.icon-map:before {
		content: "\e025";
	}

	.icon-puzzle:before {
		content: "\e026";
	}

	.icon-basket:before {
		content: "\e027";
	}

	.icon-envelope:before {
		content: "\e028";
	}

	.icon-streetsign:before {
		content: "\e029";
	}

	.icon-telescope:before {
		content: "\e02a";
	}

	.icon-gears:before {
		content: "\e02b";
	}

	.icon-key:before {
		content: "\e02c";
	}

	.icon-paperclip:before {
		content: "\e02d";
	}

	.icon-attachment:before {
		content: "\e02e";
	}

	.icon-pricetags:before {
		content: "\e02f";
	}

	.icon-lightbulb:before {
		content: "\e030";
	}

	.icon-layers:before {
		content: "\e031";
	}

	.icon-pencil:before {
		content: "\e032";
	}

	.icon-tools:before {
		content: "\e033";
	}

	.icon-tools-2:before {
		content: "\e034";
	}

	.icon-scissors:before {
		content: "\e035";
	}

	.icon-paintbrush:before {
		content: "\e036";
	}

	.icon-magnifying-glass:before {
		content: "\e037";
	}

	.icon-circle-compass:before {
		content: "\e038";
	}

	.icon-linegraph:before {
		content: "\e039";
	}

	.icon-mic:before {
		content: "\e03a";
	}

	.icon-strategy:before {
		content: "\e03b";
	}

	.icon-beaker:before {
		content: "\e03c";
	}

	.icon-caution:before {
		content: "\e03d";
	}

	.icon-recycle:before {
		content: "\e03e";
	}

	.icon-anchor:before {
		content: "\e03f";
	}

	.icon-profile-male:before {
		content: "\e040";
	}

	.icon-profile-female:before {
		content: "\e041";
	}

	.icon-bike:before {
		content: "\e042";
	}

	.icon-wine:before {
		content: "\e043";
	}

	.icon-hotairballoon:before {
		content: "\e044";
	}

	.icon-globe:before {
		content: "\e045";
	}

	.icon-genius:before {
		content: "\e046";
	}

	.icon-map-pin:before {
		content: "\e047";
	}

	.icon-dial:before {
		content: "\e048";
	}

	.icon-chat:before {
		content: "\e049";
	}

	.icon-heart:before {
		content: "\e04a";
	}

	.icon-cloud:before {
		content: "\e04b";
	}

	.icon-upload:before {
		content: "\e04c";
	}

	.icon-download:before {
		content: "\e04d";
	}

	.icon-target:before {
		content: "\e04e";
	}

	.icon-hazardous:before {
		content: "\e04f";
	}

	.icon-piechart:before {
		content: "\e050";
	}

	.icon-speedometer:before {
		content: "\e051";
	}

	.icon-global:before {
		content: "\e052";
	}

	.icon-compass:before {
		content: "\e053";
	}

	.icon-lifesaver:before {
		content: "\e054";
	}

	.icon-clock:before {
		content: "\e055";
	}

	.icon-aperture:before {
		content: "\e056";
	}

	.icon-quote:before {
		content: "\e057";
	}

	.icon-scope:before {
		content: "\e058";
	}

	.icon-alarmclock:before {
		content: "\e059";
	}

	.icon-refresh:before {
		content: "\e05a";
	}

	.icon-happy:before {
		content: "\e05b";
	}

	.icon-sad:before {
		content: "\e05c";
	}

	.icon-facebook:before {
		content: "\e05d";
	}

	.icon-twitter:before {
		content: "\e05e";
	}

	.icon-googleplus:before {
		content: "\e05f";
	}

	.icon-rss:before {
		content: "\e060";
	}

	.icon-tumblr:before {
		content: "\e061";
	}

	.icon-linkedin:before {
		content: "\e062";
	}

	.icon-dribbble:before {
		content: "\e063";
	}
`

export default styles;