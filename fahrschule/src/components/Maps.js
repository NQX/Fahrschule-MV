import React, { Component } from 'react';

class Maps extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="map">
                <div className="contact-map h-size1" id="google_map" data-map-x="52.592620" data-map-y="13.360940" data-pin="images/icons/favicon.png" data-scrollwhell="0" data-draggable="1"  data-zoom="15"></div>
            </div>
         );
    }
}
 
export default Maps;