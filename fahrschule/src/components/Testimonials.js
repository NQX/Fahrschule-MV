import React, { Component } from 'react';

class Testimonias extends Component {
    state = {  }

    myStyle = {
        backgroundImage: "url('images/testimonial-bg-01.jpg)"
    }

    render() { 
        return ( 
            
	<section className="testimonial">
		<div className="wrap-testimonial parallax100 bg-overlay-3 p-t-75 p-b-80" style={this.myStyle}>
			<div className="wrap-slide-slick-1">
				<div className="p-b-40">
					<h3 className="m-txt6 txt-center p-b-8 respon1">
						Testimonials
					</h3>

					<div className="bg-main size2 bo-rad-3 m-lr-auto"></div>
				</div>

				<div className="slide-slick-1 js-slick-1">
					<div className="item-slick-1">
						<p className="para-slide-slick-1 m-lr-auto w-size1 s-txt1 txt-center p-l-40 p-r-40 p-b-25 animated">
							I lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien augue, dictum et gravida et, viverra et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue ut nulla vitae rutrum. Ut molestie cursus placerat. Aenean posuere consequat arcu. Morbi scelerisque placerat porta. Vivamus commodo consectetur commodo. 
						</p>

						<div className="wrap-person m-lr-auto flex-c-m animated">
							<div className="wrap-pic-person">
								<img src="images/testimonial-img-01.jpg" alt="IMG-PERSON" />
							</div>

							<div className="wrap-info-person p-l-20">
								<span className="dis-block s-txt3">Mary Bailey</span>
								<span className="dis-block s-txt4">Chief Executive Officer, Envato</span>
							</div>
						</div>
					</div>

					<div className="item-slick-1">
						<p className="para-slide-slick-1 m-lr-auto w-size1 s-txt1 txt-center p-l-40 p-r-40 p-b-25 animated">
							I lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien augue, dictum et gravida et, viverra et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue ut nulla vitae rutrum. Ut molestie cursus placerat. Aenean posuere consequat arcu. Morbi scelerisque placerat porta. Vivamus commodo consectetur commodo. 
						</p>

						<div className="wrap-person m-lr-auto flex-c-m animated">
							<div className="wrap-pic-person">
								<img src="images/testimonial-img-02.jpg" alt="IMG-PERSON" />
							</div>

							<div className="wrap-info-person p-l-20">
								<span className="dis-block s-txt3">Mary Bailey</span>
								<span className="dis-block s-txt4">Chief Executive Officer, Envato</span>
							</div>
						</div>
					</div>

					<div className="item-slick-1">
						<p className="para-slide-slick-1 m-lr-auto w-size1 s-txt1 txt-center p-l-40 p-r-40 p-b-25 animated">
							I lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien augue, dictum et gravida et, viverra et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue ut nulla vitae rutrum. Ut molestie cursus placerat. Aenean posuere consequat arcu. Morbi scelerisque placerat porta. Vivamus commodo consectetur commodo. 
						</p>

						<div className="wrap-person m-lr-auto flex-c-m animated">
							<div className="wrap-pic-person">
								<img src="images/testimonial-img-03.jpg" alt="IMG-PERSON" />
							</div>

							<div className="wrap-info-person p-l-20">
								<span className="dis-block s-txt3">Mary Bailey</span>
								<span className="dis-block s-txt4">Chief Executive Officer, Envato</span>
							</div>
						</div>
					</div>

					<div className="item-slick-1">
						<p className="para-slide-slick-1 m-lr-auto w-size1 s-txt1 txt-center p-l-40 p-r-40 p-b-25 animated">
							I lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien augue, dictum et gravida et, viverra et est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue ut nulla vitae rutrum. Ut molestie cursus placerat. Aenean posuere consequat arcu. Morbi scelerisque placerat porta. Vivamus commodo consectetur commodo. 
						</p>

						<div className="wrap-person m-lr-auto flex-c-m animated">
							<div className="wrap-pic-person">
								<img src="images/testimonial-img-04.jpg" alt="IMG-PERSON" />
							</div>

							<div className="wrap-info-person p-l-20">
								<span className="dis-block s-txt3">Mary Bailey</span>
								<span className="dis-block s-txt4">Chief Executive Officer, Envato</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
         );
    }
}
 
export default Testimonias;
