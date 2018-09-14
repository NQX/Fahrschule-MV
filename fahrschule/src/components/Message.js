import React, { Component } from 'react';

class Message extends Component {
    state = {  }
    render() { 
        return ( 
            
	
    
    <section className="bg3 p-t-75 p-b-90">
		<div className="container">
			<div className=" p-b-22">
				<div className="p-b-24">
					<h3 className="m-txt6 txt-center p-b-8 respon1">
						Request a callback
					</h3>

					<div className="bg-main size2 bo-rad-3 m-lr-auto"></div>
				</div>

				<p className="w-size3 m-txt11 txt-center m-lr-auto p-l-15 p-r-15">
					If you need to speak to us about a general query fill in the form below and we will call you back within the same working day.
				</p>
			</div>

			<form>
				<div className="row">
					<div className="col-sm-6 col-lg-3 m-t-20">
						<input className="size6 s-txt6 p-l-20" type="text" name="name" placeholder="Your Name: *" />
					</div>

					<div className="col-sm-6 col-lg-3 m-t-20">
						<input className="size6 s-txt6 p-l-20" type="text" name="email" placeholder="Email: *" />
					</div>

					<div className="col-sm-6 col-lg-3 m-t-20">
						<input className="size6 s-txt6 p-l-20" type="text" name="phone" placeholder="Phone Number: *" />
					</div>

					<div className="col-sm-6 col-lg-3 m-t-20">
						<input className="size6 s-txt6 p-l-20" type="text" name="suburb" placeholder="Suburb: *" />
					</div>
				</div>
					
				<div className="flex-c-m p-t-36">
					{/* Button */}
					<button className="btn-drive m-txt1 size7 bg-main hov-color-white bo-rad-4">
						Submit
					</button>
				</div>
			</form>

		</div>
	</section>
         );
    }
}
 
export default Message;