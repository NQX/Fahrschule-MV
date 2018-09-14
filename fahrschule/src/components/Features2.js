import React, { Component } from 'react';

class Features2 extends Component {
    state = {  }
    render() { 
        return ( 
            
	<section className="bg1 p-t-75 p-b-90 features">
		<div className="container">
			<div>
				<h3 className="m-txt4 txt-center p-b-8 respon1">
					Our Features
				</h3>

				<div className="bg-main size2 bo-rad-3 m-lr-auto"></div>
			</div>

			<div className="row">
				<div className="flex-str col-sm-6 col-lg-3 p-t-65">
					{/* Block 2 */}
					<div className="block-2">
						<div className="wrap-b2 p-t-60 p-b-30 p-l-19 p-r-19">
							<div className="wrap-symbol-b2">	
								<div className="symbol-1 rotate-symbol-1">
									<i className="fa fa-film " aria-hidden="true"></i>
								</div>
							</div>

							<h4 className="m-txt5 txt-center p-b-8">
								INSTRUCTIONAL VIDEO
							</h4>

							<p className="s-txt2 txt-center">
								Morbi efficitur tellus sapien, non feugiat ligula fringilla in. Morbi scelerisque placerat porta. Vivamus commodo consectetur commodo.
							</p>
						</div>
					</div>
				</div>
				
				<div className="flex-str col-sm-6 col-lg-3 p-t-65">
					{/* Block 2 */}
					<div className="block-2">
						<div className="wrap-b2 p-t-60 p-b-30 p-l-19 p-r-19">	
							<div className="wrap-symbol-b2">	
								<div className="symbol-1 rotate-symbol-1">
									<i className="fa fa-hand-o-right" aria-hidden="true"></i>
								</div>	
							</div>

							<h4 className="m-txt5 txt-center p-b-8">
								DRIVING LESSONS
							</h4>

							<p className="s-txt2 txt-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi magna, cursus eget risus et, congue dapibus mauris. Morbi sed convallis
							</p>
						</div>
					</div>
				</div>

				<div className="flex-str col-sm-6 col-lg-3 p-t-65">
					{/* Block 2 */}
					<div className="block-2">
						<div className="wrap-b2 p-t-60 p-b-30 p-l-19 p-r-19">	
							<div className="wrap-symbol-b2">	
								<div className="symbol-1 rotate-symbol-1">
									<i className="fa fa-car" aria-hidden="true"></i>
								</div>	
							</div>

							<h4 className="m-txt5 txt-center p-b-8">
								DRIVER CONFIDENCE
							</h4>

							<p className="s-txt2 txt-center">
								Vivamus porta magna ac interdum luctus. Suspendisse ante nisl, blandit id aliquet eget, hendrerit vel libero. Sed egestas, nulla id interdum laoreet
							</p>
						</div>
					</div>
				</div>

				<div className="flex-str col-sm-6 col-lg-3 p-t-65">
					{/* Block 2 */}
					<div className="block-2">
						<div className="wrap-b2 p-t-60 p-b-30 p-l-19 p-r-19">	
							<div className="wrap-symbol-b2">	
								<div className="symbol-1 rotate-symbol-1">
									<i className="fa fa-id-card-o" aria-hidden="true"></i>
								</div>	
							</div>

							<h4 className="m-txt5 txt-center p-b-8">
								CERTIFIED
							</h4>

							<p className="s-txt2 txt-center">
								Maecenas vitae dolor magna eleifend pulvinar. Morbi id venenatis ante. Praesent sed bibendum magna. Vestibulum ante ipsum
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

         );
    }
}
 
export default Features2;