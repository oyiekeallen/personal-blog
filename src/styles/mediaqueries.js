import { css } from '@nfront/global-styles';

const mdediaqueries= css`
	@charset "UTF-8";
	@media only screen and (min-width:320px) and (max-width:640px) {
		.top-br,
		.bottom-br {
			height: 15px;
			display: none
		}
		.left-br,
		.right-br {
			width: 15px;
			display: none
		}
		.fixed-right-socials {
			right: 1%;
			display: none
		}
		.fixed-left-contact p {
			left: -46px;
			display: none
		}
		.navbar-brand {
			margin: 0!important
		}
		.navbar-toggle.collapsed {
			background: transparent;
			border-color: #fff;
			margin: 0
		}
		.navbar-toggle {
			background: #fff;
			border-radius: 0;
			-webkit-transition: all 0.6s ease-in-out;
			-o-transition: all 0.6s ease-in-out;
			transition: all 0.6s ease-in-out;
			z-index: 0
		}
		.navbar-default .navbar-toggle .icon-bar {
			background-color: #333
		}
		.navbar-default .navbar-toggle.collapsed .icon-bar {
			background-color: #fff
		}
		.navbar-fixed-top .navbar-toggle {
			border-color: #333
		}
		.navbar-fixed-top {
			padding: 30px
		}
		.navbar-default .navbar-toggle:focus,
		.navbar-default .navbar-toggle:hover {
			background: transparent;
			margin: 0 0 30px 0
		}
		.navbar-fixed-top .navbar-toggle.collapsed .icon-bar {
			background-color: #333
		}
		.isClosed {
			width: 44px;
			height: 34px;
			text-align: center;
			background: #333!important
		}
		.isClosed span:nth-child(2) {
			display: none
		}
		.isClosed span:nth-child(3) {
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			transform: rotate(45deg);
			margin-top: 0!important;
			background-color: #fff!important
		}
		.isClosed span:nth-child(4) {
			-webkit-transform: rotate(-45deg);
			-ms-transform: rotate(-45deg);
			-o-transform: rotate(-45deg);
			transform: rotate(-45deg);
			margin-top: -2px!important;
			background-color: #fff!important
		}
		.navbar-fixed-top .isClosed {
			border: 1px solid #fff!important
		}
		.navbar-fixed-top .navbar-toggle span {
			background: #333!important
		}
		.navbar-fixed-top .isClosed span {
			background: #fff!important
		}
		.navbar-nav>li>a {
			padding: 15px
		}
		.navbar-nav a:hover,
		.navbar-default .navbar-nav>.active>a,
		.navbar-default .navbar-nav>.active>a:focus,
		.navbar-default .navbar-nav>.active>a:hover {
			-webkit-box-shadow: none;
			box-shadow: none;
			background: #fff;
			color: #333!important;
			margin: 0
		}
		.navbar-default .navbar-nav li {
			border-bottom: 1px solid #666;
			letter-spacing: 1px
		}
		.navbar-fixed-top .navbar-nav>.active>a,
		.navbar-fixed-top .navbar-nav>.active>a:focus,
		.navbar-fixed-top .navbar-nav>.active>a:hover {
			background: #333!important;
			color: #fff!important
		}
		.navbar-fixed-top .navbar-nav li {
			border-bottom: 1px solid #ccc;
			letter-spacing: 1px
		}
		.navbar-default {
			padding: 30px
		}
		.navbar-default .navbar-nav {
			width: 100%;
			background-color: #333;
			position: absolute;
			right: -300px;
			margin: 0
		}
		.navbar-collapse {
			border: none;
			box-shadow: none;
			float: left!important;
			width: 100%
		}
		.navbar-fixed-top .navbar-nav {
			margin-bottom: 0;
			margin-left: 0;
			width: 100%;
			float: none;
			background-color: #fff
		}
		.navbar-collapse.in {
			position: absolute;
			left: 0;
			width: 100%;
			margin: 0;
			overflow: visible
		}
		.navbar-collapse.in .navbar-nav {
			right: 0
		}
		header {
			padding-bottom: 30px
		}
		.user-block {
			margin-top: 95px;
			margin-bottom: 0
		}
		.user-description {
			margin: 0;
			padding: 0 30px
		}
		.animated-intro {
			height: 160px
		}
		.user-description a {
			width: 100%
		}
		section,
		footer {
			padding: 60px 0
		}
		#section1 hr {
			margin: 15px 0 40px 0
		}
		.meter {
			margin: 12.5% 0
		}
		.progress-bars {
			height: 100%;
			width: 100%!important;
			margin: 20px auto 10px auto
		}
		.progress-name ul {
			margin: 5px 20% 0
		}
		.progress-name ul li {
			margin: 45% 0
		}
		.meter>p {
			top: 0;
			margin-left: 0
		}
		.portofolio-menu {
			text-align: left
		}
		.portofolio-menu ul {
			margin-top: 30px
		}
		.portofolio-menu li {
			margin: 15px;
			padding: 0
		}
		.portofolio-menu li button {
			margin: 0;
			padding: 10px 22px
		}
		.portofolio-wrapp {
			padding: 0 15px
		}
		.progress-wrapp {
			padding: 0 30px
		}
		.timelinebar {
			margin-left: 30px
		}
		#timeline:before {
			width: 85%;
			left: 28px
		}
		#next-issue,
		#prev-issue {
			top: 14px;
			width: 30px;
			height: 30px;
			z-index: 3
		}
		#dates:after {
			display: none
		}
		#dates:before {
			width: 110px
		}
		#dates li a {
			font-size: 10px;
			width: 70px;
			line-height: 1.5
		}
		#dates a:before {
			width: 18px;
			height: 18px;
			top: -37px;
			left: 45%
		}
		#dates li {
			top: 27px;
			margin-left: -8%;
			margin-right: 8%;
			width: 120px
		}
		#dates a.selected:before {
			width: 16px;
			height: 16px;
			left: 45%
		}
		#dates a.selected:after {
			left: 48%;
			top: -30px;
			width: 8px;
			height: 8px
		}
		#next-issue:before {
			left: 8px;
			top: 11px;
			width: 8px;
			height: 8px
		}
		#prev-issue:before {
			left: 11px;
			top: 10px;
			width: 8px;
			height: 8px
		}
		#issues {
			padding: 0;
			left: 0
		}
		#issues li.selected {
			width: 315px;
			padding: 0
		}
		#issues li p {
			font-size: 12px;
			padding: 0 25px 0 0
		}
		.cbp_tmtimeline>li .cbp_tmlabel {
			top: 0;
			left: 10px;
			padding: 25px 0
		}
		.cbp_tmtimeline>li .cbp_tmlabel,
		.cbp_tmtimeline li i {
			font-size: 12px
		}
		.cbp_tmtimeline>li .cbp_tmicon {
			left: 49.4%;
			top: 30px
		}
		.cbp_tmtimeline>li .cbp_tmtime {
			left: -10px
		}
		.owl-nav .owl-prev,
		.owl-nav .owl-next {
			width: 29px;
			height: 29px
		}
		.owl-nav .owl-prev {
			left: 20px
		}
		.owl-nav .owl-next {
			right: 20px
		}
		.owl-nav .owl-next:before,
		.owl-nav .owl-prev:before {
			top: 6px;
			z-index: 9999
		}
		.owl-nav .owl-prev:before {
			right: 4px
		}
		.owl-nav .owl-next:before {
			left: 4px
		}
		.owl-dots {
			bottom: -30px
		}
		.slide-content {
			width: 66.29%;
			margin-top: 30px
		}
		#section6 hr {
			margin: 50px 0 30px 0
		}
		.price-plan.medium:before {
			top: 30px
		}
		.posts-list {
			padding: 0 15px
		}
		#section9 {
			padding-bottom: 0
		}
		.calendar-wrapp .ui-datepicker-calendar {
			width: 315px
		}
		.calendar-wrapp .ui-datepicker-calendar thead {
			margin: 17px 0 30px 0
		}
		.calendar-wrapp .ui-datepicker-calendar th {
			margin: 0 5px
		}
		.calendar-wrapp td {
			margin: 3px
		}
		.calendar-wrapp {
			margin-top: 0
		}
		.contact-details {
			padding: 10px 30px;
			margin-top: 0
		}
		.contact-details address {
			margin: 20px 0
		}
		footer {
			padding-bottom: 0
		}
		.instagram-block {
			width: 100%
		}
		.post-content .about-author img {
			margin: 20px 0
		}
		.post-content .col-md-8 {
			padding-left: 15px
		}
		.post-content .about-author a {
			display: block;
			margin: 10px 0
		}
		.post-content .comment {
			width: 100%;
			background: #ecf1f4;
			margin-bottom: 30px
		}
		.post-content .comment dt {
			width: 100%;
			float: left
		}
		.post-content .comment-contain {
			margin: 0
		}
		.guest-comment .comment-contain {
			padding: 0;
			width: 100%
		}
		.comment-form .col-md-10 {
			padding-left: 15px
		}
		.post-controls {
			padding: 0
		}
		.contact-form:before {
			right: 0
		}
		#page-404:before {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0
		}
		.content-404 {
			margin-top: 50%
		}
	}

	@media only screen and (min-width:400px) and (max-width:640px) {
		#issues li.selected {
			width: 375px
		}
	}

	@media only screen and (min-width:641px) and (max-width:1024px) {
		.navbar-toggle {
			display: block;
			border-color: #fff;
			border-radius: 0;
			margin-top: 30px;
			position: fixed;
			right: 40px;
			z-index: 2;
			-webkit-transition: all 0.3s ease-in-out;
			-o-transition: all 0.3s ease-in-out;
			transition: all 0.3s ease-in-out
		}
		.navbar-toggle span {
			-webkit-transition: all 0.3s ease-in-out;
			-o-transition: all 0.3s ease-in-out;
			transition: all 0.3s ease-in-out;
			background: #fff!important
		}
		.isClosed {
			width: 44px;
			height: 34px;
			text-align: center;
			right: 5px;
			background: #333!important
		}
		.isClosed span:nth-child(2) {
			display: none
		}
		.isClosed span:nth-child(3) {
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			transform: rotate(45deg);
			margin-top: 0!important;
			background-color: #fff!important
		}
		.isClosed span:nth-child(4) {
			-webkit-transform: rotate(-45deg);
			-ms-transform: rotate(-45deg);
			-o-transform: rotate(-45deg);
			transform: rotate(-45deg);
			margin-top: -2px!important;
			background-color: #fff!important
		}
		.navbar-fixed-top .isClosed {
			border: 1px solid #fff!important
		}
		.navbar-fixed-top .isClosed span {
			background: #fff!important
		}
		.navbar-fixed-top .collapsed span {
			background: #333!important
		}
		.navbar-fixed-top .collapsed {
			border: 1px solid #333
		}
		.navbar-collapse .navbar-nav {
			width: 200px;
			position: fixed;
			top: 0;
			right: 0;
			height: 1300px;
			padding-top: 80px;
			background: #333;
			z-index: 1;
			margin-right: -200px
		}
		.navbar-nav li {
			width: 100%;
			float: none;
			text-align: right;
			border-bottom: 1px solid #fff
		}
		.navbar-nav a:hover,
		.navbar-default .navbar-nav>.active>a,
		.navbar-default .navbar-nav>.active>a:focus,
		.navbar-default .navbar-nav>.active>a:hover {
			box-shadow: none;
			margin: 0;
			padding-right: 20px;
			background: #ccc
		}
		.navbar-fixed-top .navbar-nav>li>a {
			color: #fff!important
		}
		.navbar-fixed {
			background: transparent;
			box-shadow: none
		}
		.navbar-collapse.in .navbar-nav {
			margin-right: 0
		}
		.animated-intro {
			height: 130px
		}
		.user-description p {
			display: inline-block;
			text-overflow: ellipsis;
			width: 95%
		}
		.user-block {
			margin: 120px 0 60px 10px
		}
		.user-description {
			margin-top: 100px;
			margin-left: -10px
		}
		.user-description a {
			margin: 28px 0
		}
		.meter {
			margin: 26% 0;
			height: 1px
		}
		.progress-bars {
			width: 330px!important;
			margin: 0 auto;
			float: none
		}
		.meter>span {
			height: 2px
		}
		.progress-name {
			float: none;
			margin: 0 auto
		}
		.progress-name ul {
			margin: 15px 15% 0
		}
		.progress-name ul li {
			margin: 63% 0
		}
		.meter>p {
			top: 0;
			margin-left: 0
		}
		.portofolio-menu {
			padding: 0
		}
		.portofolio-wrapp .dribble-shot {
			padding: 15px
		}
		.portofolio-menu ul {
			margin: 55px -20px 0
		}
		.hover-shot {
			padding: 15px
		}
		.hover-shot ul {
			padding: 10px 0
		}
		.timelinebar {
			margin-left: 50px
		}
		#next-issue,
		#prev-issue {
			top: 10px;
			width: 40px;
			height: 40px;
			z-index: 9999
		}
		#next-issue {
			right: 10px
		}
		#prev-issue {
			left: 10px
		}
		#dates {
			padding-left: 0!important
		}
		#dates li a {
			font-size: 10px
		}
		#dates a:before {
			width: 19px;
			height: 19px;
			top: -30px
		}
		#dates .selected:after {
			width: 9px;
			height: 9px;
			top: -25px;
			left: 49.5%
		}
		#next-issue:before {
			left: 8px;
			top: 11px;
			width: 18px;
			height: 18px
		}
		#prev-issue:before {
			left: 11px;
			top: 10px;
			width: 18px;
			height: 18px
		}
		#issues {
			padding: 0 0 0 10px;
			left: 0
		}
		#issues li {
			max-width: 768px;
			margin-left: -5px;
			float: left;
			text-align: center
		}
		#issues li p {
			font-size: 12px;
			padding: 0 15px;
			width: 75%;
			margin: 30px auto
		}
		.cbp_tmtimeline>li .cbp_tmicon {
			left: 49.7%
		}
		.owl-nav .owl-next {
			right: 30px
		}
		.owl-nav .owl-prev {
			left: 30px
		}
		.price-plan.medium:before {
			top: 15px
		}
		.calendar-wrapp .ui-datepicker-calendar {
			width: 98%
		}
		.calendar-wrapp .ui-datepicker-calendar thead {
			margin: 17px 0 30px 0;
			width: 100%
		}
		.calendar-wrapp .ui-datepicker-calendar th {
			margin: 0 17px
		}
		.calendar-wrapp td {
			margin: 3px 15px
		}
		#date {
			margin: 50px auto 0;
			padding: 5px 0
		}
		ul.pagination {
			margin-left: 15px
		}
		.pagination li:first-child a {
			left: 15px
		}
		.pagination li:last-child a {
			right: 15px
		}
		.instagram-block {
			margin-bottom: 50px
		}
		.instagram-block h3 {
			margin: 45px 0 25px 0
		}
		.twitter-block {
			clear: both
		}
		.categories h3,
		.tags h3 {
			margin: 0 0 30px 0
		}
		.side-bar .categories,
		.side-bar .tags,
		.side-bar .twitter-block,
		.side-bar .instagram-block {
			width: 50%;
			float: left;
			padding: 30px
		}
		#page-404:before {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0
		}
		.content-404 {
			margin-top: 50%
		}
	}

	@media only screen and (min-width:1025px) and (max-width:1439px) {
		.section-bg {
			margin: 0 auto 10px
		}
		section {
			padding: 9% 0 30px 0
		}
		.navbar-nav>li>a {
			padding: 7px 8px;
			margin: 0 5px
		}
		.user-block {
			padding: 30px
		}
		.progress-name {
			float: none;
			margin: 0 auto 140px
		}
		.progress-name ul {
			margin: 0;
			width: 12.5%
		}
		.progress-name ul li {
			margin: 109% 0;
			text-align: left
		}
		#section1 hr {
			margin: 5px 0 15px 0
		}
		.portofolio-menu {
			padding: 0
		}
		.portofolio-menu ul {
			margin: 15px 0 0 0
		}
		.portofolio-wrapp .dribble-shot {
			padding: 30px;
			margin: 15px 0
		}
		#section5 {
			padding-bottom: 60px
		}
		#section6 .hidden-on-small {
			display: none
		}
		#section6 .clients-carousel {
			margin-top: 30px
		}
		.price-plan {
			margin-top: 10px
		}
		.calendar-today {
			margin-top: 20px
		}
		.calendar-wrapp {
			margin-top: 20px
		}
		.calendar-wrapp td {
			margin: 5px 36px
		}
		#page-404:before {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0
		}
		.content-404 {
			margin-top: 20%
		}
	}
`;

export default mdediaqueries;