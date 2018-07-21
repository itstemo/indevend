import React, {Component, createRef} from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'
import Leaflet from 'leaflet'
import PrintControl from 'react-leaflet-easyprint';
var leafletImage = require("leaflet-image")
var jsDoc = require("jspdf")


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
          const map = this.mapRef.current.leafletElement
          this.props.handleClickResult(res);
         var url = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/${e.latlng.lng},${e.latlng.lat},17,10,50/600x600?access_token=pk.eyJ1IjoiYWxlZmlzY2giLCJhIjoiY2pqdjFpcHd6OWxoNDN3cDF1MXc2Mnk5byJ9.k-6b1DRnakruSFVNzYkczg`; 
         var doc = new jsDoc()
         
        const img = new Image()
        img.crossOrigin = '*';
        img.src = url
  
  const canvas = document.createElement('canvas') 
  const ctx = canvas.getContext('2d')
    
  img.onload = function() {
    ctx.drawImage(img, 0,0);
    doc.addImage(canvas.toDataURL(),'JPEG',55, 30, 100, 100);
    doc.save('test')
  }
          
          
        } } center={usCenter} zoom={13.4} style={{height: '80vh'}}>
        <TileLayer
        url= "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png"
        attribution="Wikimedia maps beta | &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"/>
        </Map>
        <div id="images"></div>
      </div>
    );
  }
  }











