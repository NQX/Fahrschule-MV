import React, { Component } from 'react';

class Header extends Component {
    state = {  }

   

    render() { 
        return ( 
            <header>
		{/* Header desktop  */} 
		<div className="container-menu-desktop">
			<div className="top-bar bg-main">
				<div className="container">
					<div className="content-topbar">
						

						<div className="right-top-bar">
							<span>
								<i className="icon_phone" aria-hidden="true"></i>
								<a href="tel:01705137688">0170 5137688</a>
							</span>

							<span>
								<i className="icon_pin" aria-hidden="true"></i>
								<span>Dannenwalder Weg 172, 13439 Berlin</span>
							</span>

							<span>
								<i className="icon_clock" aria-hidden="true"></i>
								<span id="top-open">{this.getOpening()}</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="wrap-menu-desktop">
				<div className="limiter-menu-desktop">
					
					{/* Logo desktop */} 
					<a href="index.html" className="logo">
						<img src="images/logo.png" alt="IMG-LOGO" />
					</a>

					{/* Menu desktop */} 
					<div className="menu-desktop">
						<ul className="main-menu">
							{/*
							<li>
								<a href="index.html">Home</a>
								<ul className="sub-menu">
									<li><a href="index.html">Homepage V1</a></li>
									<li><a href="home-02.html">Homepage V2</a></li>
									<li><a href="home-03.html">Homepage V3</a></li>
								</ul>
							</li>
                            */}

							<li>
								<a href="course-list.html">Fahrschule</a>
								<ul className="sub-menu">
									<li><a href="course-list.html">Course List</a></li>
									<li><a href="course-grid.html">Course Grid</a></li>
									<li><a href="course-detail.html">Course Detail</a></li>
								</ul>
							</li>

							<li>
								<a href="about-team.html">Führerschein</a>
							</li>

							<li>
								<a href="#">Wissenswertes</a>
								<ul className="sub-menu">
									<li><a href="photo-gallery.html">Photo Gallery</a></li>
								</ul>
							</li>

							<li>
								<a href="blog.html">Blog</a>
								<ul className="sub-menu">
									<li><a href="blog.html">Blog</a></li>
									<li><a href="blog-single.html">Blog Single</a></li>
								</ul>
							</li>

							<li className="respon-sub-menu">
								<a href="about.html">Über uns</a>
								<ul className="sub-menu">
									<li><a href="about.html">About</a></li>
									<li><a href="about-team.html">About Team Member</a></li>
								</ul>
							</li>

							<li className="respon-sub-menu">
								<a href="contact.html">Kontakt</a>
							</li>
						</ul>
					</div>
					
					{/* Social desktop */} 
					<div className="social">
						<a href="#"><i className="fa fa-facebook m-l-13" aria-hidden="true"></i></a>
						<a href="#"><i className="fas fa-envelope" aria-hidden="true"></i></a>
					</div>
					
				</div>
			</div>	
		</div>


		{/* Header Mobile */} 
		<div className="wrap-header-mobile">
			{/* Logo moblie */}		
			<a href="index.html" className="logo-mobile">
				<img src="images/icons/logo.png" alt="IMG-LOGO" />
			</a>
			

			{/* Button show menu  */}
			<div className="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</div>
				
		</div>


		{/*  Menu Mobile  */}
		<div className="menu-mobile">
			<ul className="topbar-mobile">
				<li className="bo1-b p-t-8 p-b-8">
					<div className="left-top-bar p-l-7">
						<a href="#">Search</a>
						<a href="#">About</a>
						<a href="#">Blog</a>
						<a href="#">FAQ</a>
					</div>
				</li>

				<li className="right-top-bar bo1-b p-t-8 p-b-8">
					<span>
						<i className="icon_phone" aria-hidden="true"></i>
						<span>1-800-123-6889</span>
					</span>
				</li>

				<li className="right-top-bar bo1-b p-t-8 p-b-8">
					<span>
						<i className="icon_pin" aria-hidden="true"></i>
						<span>8th floor, 379 Hudson St, New York</span>
					</span>
				</li>

				<li className="right-top-bar bo1-b p-t-8 p-b-8">
					<span>
						<i className="icon_clock" aria-hidden="true"></i>
						<span>09:30 am – 06:00 pm</span>
					</span>
				</li>
			</ul>

			<ul className="main-menu-m bg-main">
				<li className="bg-main">
					<a href="index.html">Home</a>
					<ul className="sub-menu-m">
						<li><a href="index.html">Homepage V1</a></li>
						<li><a href="home-02.html">Homepage V2</a></li>
						<li><a href="home-03.html">Homepage V3</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li className="bg-main">
					<a href="course-list.html">Courses</a>
					<ul className="sub-menu-m">
						<li><a href="course-list.html">Course List</a></li>
						<li><a href="course-grid.html">Course Grid</a></li>
						<li><a href="course-detail.html">Course Detail</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li className="bg-main">
					<a href="about-team.html">Teachers</a>
				</li>

				<li className="bg-main">
					<a href="#">Pages</a>
					<ul className="sub-menu-m">
						<li><a href="photo-gallery.html">Photo Gallery</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li className="bg-main">
					<a href="blog.html">Blog</a>
					<ul className="sub-menu-m">
						<li><a href="blog.html">Blog</a></li>
						<li><a href="blog-single.html">Blog Single</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li className="bg-main">
					<a href="about.html">About</a>
					<ul className="sub-menu-m">
						<li><a href="about.html">About</a></li>
						<li><a href="about-team.html">About Team Member</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li className="bg-main">
					<a href="contact.html">Contact</a>
				</li>
			</ul>
		</div>
	</header>
         );
    }

getOpening(){
        var date = new Date();
        var value = date.getDay();
        var output = "";

        switch(value){
            case 1:
            case 2:
            case 4:
                output = "17:00 - 19:00";
                break;
            default:
                output = "Geschlossen";
                break;
        }

            //document.getElementById('top-open').innerHTML = "Heute: " + output;
            //this.refs.topOpen.innerHTML = "Heute: " + output;

            return "Heute: " + output;

            }


        }
 
export default Header;