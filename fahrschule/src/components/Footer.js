import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="bg4 p-t-25">
		        <div className="container p-b-60">
			        <div className="row">
				        <div className=" col-sm-12 col-lg-3 p-t-30">
        					<div className="w-full wrap-pic-max-w">
						        <a href="index.html"><img src="images/icons/logo-02.png" alt="LOGO" /></a>
					        </div>

                            <p className="s-txt9 p-t-30">
                                Lean To Drive is a clean PSD theme suitable for corporate. You can cus-tomize it very easy to fit your needs. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit sollicitudin vel effici-tur eu, posuere sit amet erat.
                            </p>
	        			    </div>
				
			            	<div className=" col-sm-6 col-lg-3 p-t-30">
					            <h4 className="m-txt12 p-t-14">
						            Company
					            </h4>

                            <div className="wrap-link-footer p-t-28">
                                <ul className="col-left">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">Teachers</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>

                                <ul className="col-right">
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">404 page</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Elements</a></li>
                                    <li><a href="#">Typography</a></li>
                                </ul>
                            </div>
				        </div>

				<div className=" col-sm-6 col-lg-3 p-t-30">
					<h4 className="m-txt12 p-t-14">
						Contact us
					</h4>

					<ul className="contact-footer p-t-28">
						<li>
							<i className="fa fa-home" aria-hidden="true"></i>
							Dannenwalder Weg 172, 13439 Berlin
						</li>

						<li>
							<i className="fa fa-phone" aria-hidden="true"></i>
							(+1) 96 716 6879
						</li>

						<li>
							<i className="fa fa-fax" aria-hidden="true"></i>
							(+1) 96 716 6879
						</li>

						<li>
							<i className="fa fa-envelope-o" aria-hidden="true"></i>
							contact@site.com
						</li>

						<li>
							<i className="fa fa-clock-o" aria-hidden="true"></i>
							Mon-Fri 09:00 - 17:00
						</li>
					</ul>
				</div>

				<div className=" col-sm-6 col-lg-3 p-t-30">
					<h4 className="m-txt12 p-t-14">
						Gallery
					</h4>

					<div className="wrap-gallery-footer p-t-35">
						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-01.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-01.jpg" alt="GALLERY" />
						</a>

						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-02.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-02.jpg" alt="GALLERY" />
						</a>

						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-03.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-03.jpg" alt="GALLERY" />
						</a>

						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-04.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-04.jpg" alt="GALLERY" />
						</a>

						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-05.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-05.jpg" alt="GALLERY" />
						</a>

						<a className="item-gallery-footer wrap-pic-w" href="images/gallery-footer-06.jpg" data-lightbox="gallery-footer">
							<img src="images/gallery-footer-06.jpg" alt="GALLERY" />
						</a>
					</div>
				</div>
				
			</div>
		</div>

		<div className="bg3 txt-center p-t-19 p-b-16">
			<span className="s-txt10">&copy; Fahrschule MV {this.getYear()}</span>
			<a href="#" className="s-txt10"> | Impressum</a>
			<a href="#" className="s-txt10"> | Datenschutz</a>
			
			
		</div>
	</footer>
         );
    }


	getYear(){
		var date = new Date();
		return date.getFullYear();
	}
}
 
export default Footer;