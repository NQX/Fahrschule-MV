import React, { Component } from 'react';  

class Slides extends Component {
    state = {  }

    noneStyle = {
        display: 'none'
    }

    render() { 
        return ( 
            
	<section className="slider">
		<div className="rev_slider_wrapper fullwidthbanner-container rs1-revo">
			<div id="rev_slider_1" className="rev_slider fullwidthabanner" data-version="5.4.5" style={this.noneStyle}>
				<ul>
					{/* Slide 1 */}
					<li data-transition="fade">
						<img src="images/bg1.jpg" alt="IMG-SLIDE" className="rev-slidebg" />

						<h2 className="tp-caption tp-resizeme txt1 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"x:left;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['1200','992','768','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-85','-85','-85','-160']"  
					    data-fontsize="['50', '50', '50', '50']"
					    data-lineheight="['60', '60', '60', '60']"
					    data-height="['auto']"
					    >Free video lessons</h2>

					    <p className="tp-caption tp-resizeme txt2 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:right;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['780','780','780','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-10','-10','-10','-50']"  
					    data-fontsize="['18', '18', '18', '16']"
					    data-lineheight="['30', '30', '30', '30']"
					    data-height="['auto']"
					    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
					    </p>

					    <div className="tp-caption tp-resizeme wrap-btn-slide"
					    data-frames='[{"delay":3000,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['75','75','75','90']"
					    data-height="['auto']">
					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/*  Button  */}
					    		<a href="#" className="btn-drive size1 m-txt1 bg-main bo-rad-4 trans-03">
					    			Our Services
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>

					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/*  Button  */}
					    		<a href="#" className="btn-drive size1 m-txt2 bgwhite bo-rad-4 trans-03">
					    			Book Lesson
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>
					    </div>
						
					</li>

					{/*  Slide 2 */}
					<li data-transition="fade">
						<img src="images/bg2.jpg" alt="IMG-SLIDE" className="rev-slidebg" />

						<h2 className="tp-caption tp-resizeme txt1 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"y:top;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['1200','992','768','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-85','-85','-85','-160']"  
					    data-fontsize="['50', '50', '50', '50']"
					    data-lineheight="['60', '60', '60', '60']"
					    data-height="['auto']"
					    >Free video lessons</h2>

					    <p className="tp-caption tp-resizeme txt2 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:bottom;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['780','780','780','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-10','-10','-10','-50']"  
					    data-fontsize="['18', '18', '18', '16']"
					    data-lineheight="['30', '30', '30', '30']"
					    data-height="['auto']"
					    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
					    </p>

					    <div className="tp-caption tp-resizeme wrap-btn-slide"
					    data-frames='[{"delay":3000,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['75','75','75','90']"
					    data-height="['auto']">
					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/* Button */}
					    		<a href="#" className="btn-drive size1 m-txt1 bg-main bo-rad-4 trans-03">
					    			Our Services
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>

					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/* Button */}
					    		<a href="#" className="btn-drive size1 m-txt2 bgwhite bo-rad-4 trans-03">
					    			Book Lesson
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>
					    </div>
					</li>

					{/* Slide 3 */}
					<li data-transition="fade">
						<img src="images/slide-03.jpg" alt="IMG-SLIDE" className="rev-slidebg" />
						
						<h2 className="tp-caption tp-resizeme txt1 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"x:-500px;skX:85px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['1200','992','768','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-85','-85','-85','-160']"  
					    data-fontsize="['50', '50', '50', '50']"
					    data-lineheight="['60', '60', '60', '60']"
					    data-height="['auto']"
					    >Free video lessons</h2>

					    <p className="tp-caption tp-resizeme txt2 txt-center p-l-15 p-r-15" 
						data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:500px;skX:-85px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center" 
					    data-width="['780','780','780','480']"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['-10','-10','-10','-50']"  
					    data-fontsize="['18', '18', '18', '16']"
					    data-lineheight="['30', '30', '30', '30']"
					    data-height="['auto']"
					    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
					    </p>

					    <div className="tp-caption tp-resizeme wrap-btn-slide"
					    data-frames='[{"delay":3000,"speed":1500,"frame":"0","from":"y:bottom;rZ:90deg;sX:2;sY:2;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
					    data-x="center" 
					    data-y="center"
					    data-hoffset="['0','0','0','0']" 
					    data-voffset="['75','75','75','90']"
					    data-height="['auto']">
					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/* Button */}
					    		<a href="#" className="btn-drive size1 m-txt1 bg-main bo-rad-4 trans-03">
					    			Our Services
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>

					    	<div className="p-l-10 p-r-10 p-t-5 p-b-5">
					    		{/* Button */}
					    		<a href="#" className="btn-drive size1 m-txt2 bgwhite bo-rad-4 trans-03">
					    			Book Lesson
					    			<i className="fa fa-chevron-right m-l-9 fs-14" aria-hidden="true"></i>
					    		</a>
					    	</div>
					    </div>
					</li>


				</ul>				
			</div>
		</div>
	</section>
         );
    }
}
 
export default Slides;