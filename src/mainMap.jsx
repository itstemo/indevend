import React, {Component} from 'react'
import {Map, TileLayer} from 'react-leaflet'


export default class MainMap extends Component {
  constructor(props) {
    super(props);
    };

  render() {

    let usCenter = [38.702249038932734, -102.56467401981355];
    return (
      <div style={{width:'100%'}}>
        <Map onClick={ e => {console.log(e)} } center={usCenter} zoom={4} style={{height: '80vh', width:'90vw'}}>
        <TileLayer 
        url= "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png" 
        attribution="Wikimedia maps beta | &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"/>
        </Map>
      </div>
    );
  }
  }