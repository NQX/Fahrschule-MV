import React, { Component } from 'react';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            

	
		<section class="bg3 p-t-75 p-b-90">
		<div class="container">
			<div class=" p-b-22">
				<div class="p-b-24">
					<h3 class="m-txt6 txt-center p-b-8 respon1">
						Request a callback
					</h3>

					<div class="bg-main size2 bo-rad-3 m-lr-auto"></div>
				</div>

				<p class="w-size3 m-txt11 txt-center m-lr-auto p-l-15 p-r-15">
					If you need to speak to us about a general query fill in the form below and we will call you back within the same working day.
				</p>
			</div>

			<form>
				<div class="row">
					<div class="col-sm-6 col-lg-3 m-t-20">
						<input class="size6 s-txt6 p-l-20" type="text" name="name" placeholder="Your Name: *">
					</div>

					<div class="col-sm-6 col-lg-3 m-t-20">
						<input class="size6 s-txt6 p-l-20" type="text" name="email" placeholder="Email: *">
					</div>

					<div class="col-sm-6 col-lg-3 m-t-20">
						<input class="size6 s-txt6 p-l-20" type="text" name="phone" placeholder="Phone Number: *">
					</div>

					<div class="col-sm-6 col-lg-3 m-t-20">
						<input class="size6 s-txt6 p-l-20" type="text" name="suburb" placeholder="Suburb: *">
					</div>
				</div>
					
				<div class="flex-c-m p-t-36">
					<!-- Button -->
					<button class="btn-drive m-txt1 size7 bg-main hov-color-white bo-rad-4">
						Submit
					</button>
				</div>
			</form>
		</div>
	</section>


	

	

	


	<!-- Back to top -->
	<div class="btn-back-to-top hov-bg-main" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="fa fa-angle-double-up" aria-hidden="true"></i>
		</span>
	</div>






</body>
</html>
</div>
         );
    }
}
 
export default Main;