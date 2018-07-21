import React, {Component, createRef} from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'
import Leaflet from 'leaflet'
import {Segment} from 'semantic-ui-react';
// import PrintControl from 'react-leaflet-easyprint';
import PrintControl from 'react-leaflet-easyprint';
var leafletImage = require("leaflet-image")


var geolib = require('geolib')


var feetPerMeter = 3.28084;

function closestPoints(location, locationArray, distanceLimit) {
  distanceLimit = distanceLimit/feetPerMeter;
  var closestSpots = [];
  for (var i = 0; i < locationArray.length; i++) {
    var distance = geolib.getDistance({
      latitude: location.lat,
      longitude: location.lng,
    },
      {
        latitude:locationArray[i].lat,
        longitude:locationArray[i].lon
      });
    if(distance <= distanceLimit){
      closestSpots.push(locationArray[i]);
    }
  }
  console.log(closestSpots)
  return closestSpots;
}

export default class MainMap extends Component {
  constructor(props) {
    super(props);
  };
  mapRef = createRef()
  componentDidMount() {
    const data = this.props.data;
    const colors = ['olive', 'teal', 'violet', 'grey', 'orange']
    
    for(let i=0;i<data.length;i++) {
      const name = data[i].name;
      const radius = data[i].radius;
      for(let j=0; j < data[i].data.length;j++) {
        const d = data[i].data[j]
        Leaflet.circle([d.lat, d.lon], {radius:radius, color:colors[i]})
        .addTo(this.mapRef.current.leafletElement)
      }
    }
  }
  
  render() {
    
    console.log(this.state)
    let usCenter = [37.7767964,-122.4166041];
    return (
      <Segment>
      <div style={{width:'100%', pointer:'cursor'}}>
        <Map ref={this.mapRef} onClick={ e => {
          const res = [];
          const data = this.props.data;
          
          for(let i=0; i < data.length; i++) {
            let closestSpots = closestPoints(e.latlng, data[i].data, data[i].radius);
            
            for(var j = 0; j < closestSpots.length; j++){
              var marker = Leaflet.marker(closestSpots[j])
                //.addTo(this.mapRef.current.leafletElement)
            }
            res.push(closestSpots);
            
          }
          const map = this.mapRef.current.leafletElement
          this.props.handleClickResult(e.latlng, res, map);
          
          
        } } center={usCenter} zoom={16} style={{height: '80vh'}}>
        <TileLayer
        url= "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png"
        attribution="Wikimedia maps beta | &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"/>
        </Map>
        <div id="images"></div>
      </div>
      </Segment>
    );
  }
  }











