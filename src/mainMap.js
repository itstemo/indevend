import React, {Component, createRef} from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'
import Leaflet from 'leaflet'
var geolib = require('geolib')

var feetPerMeter = 3.28084;

function closestPoints(location, locationArray, distanceLimit) {
  distanceLimit = distanceLimit/feetPerMeter;
  var closestSpots = [];
  for (var i = 0; i < locationArray.length; i++) {
    var distance = geolib.getDistance(location,locationArray[i]);
    if(distance <= distanceLimit){
      closestSpots.push(locationArray[i]);
    }
  }
  return closestSpots;
}

export default class MainMap extends Component {
  constructor(props) {
    super(props);
    };
  mapRef = createRef()

  render() {

    let usCenter = [37.76770558216995, -122.42167745113380];
    return (
      <div style={{width:'100%'}}>
        <Map ref={this.mapRef} onClick={ e => {
          const res = [];
          const data = this.props.data;
          for(let i=0; i < data.length; i++) {
            let closestSpots = closestPoints(e.latlng, data[i].data, data[i].radius);
            
            for(var j = 0; j < closestSpots.length; j++){
              var marker = Leaflet.marker(closestSpots[j])
                .addTo(this.mapRef.current.leafletElement)
            }
            res.push(closestSpots);
            
          }
          this.props.handleClickResult(res);
          
          
          
        } } center={usCenter} zoom={13.4} style={{height: '80vh'}}>
        <TileLayer
        url= "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png"
        attribution="Wikimedia maps beta | &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"/>
        </Map>
      </div>
    );
  }
  }











