import React, { Component } from "react";
import {
  Segment,
  Grid,
  Container,
  Header,
  Button,
  Statistic,
  List,
} from "semantic-ui-react";
import MainMap from './mainMap.js'
import Leaflet from 'leaflet'
var geolib = require('geolib')
var jsDoc = require("jspdf")



var feetPerMeter = 3.28084;

const data = require('./data.json')

class Step1 extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      clickStatus: null,
      offending:null,
      clicked: null
    }
  
  }
  handleClickResult = (click, res, map) => {
    
    const countOffending = res.reduce((a,v)=>a+=v.length,0)
    if(countOffending) {
      this.setState({clicked:click, offending:res, clickStatus:'bad'})
      return;
    }
    this.setState({clicked:click, clickStatus:'good', offending:null})
    Leaflet.marker(click).addTo(map)
    map.panTo(click)

    var url = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/${click.lng},${click.lat},16/600x600?access_token=pk.eyJ1IjoiYWxlZmlzY2giLCJhIjoiY2pqdjFpcHd6OWxoNDN3cDF1MXc2Mnk5byJ9.k-6b1DRnakruSFVNzYkczg`; 
    var doc = new jsDoc()
    
   const img = new Image()
   img.crossOrigin = '*';
   img.src = url

    const canvas = document.createElement('canvas') 
    canvas.width = 600
    canvas.height = 600
    const ctx = canvas.getContext('2d')
    console.log('please')
    img.onload = function() {
      ctx.drawImage(img, 0,0);
      doc.addImage(canvas.toDataURL(),'JPEG',0, 0, 200, 200);
      doc.save('diagram')
    }

  }
  
  render() {
    return (
      <div>
      <Header as='h3'>Choose a Location</Header>
      <p>
        Use the map below to find a place for your mobile food facility!
      </p>
      <p>
        City regulations say that you can't have your facility nearby
        certain features - this map will tell you if your choosen location
        meets those requirements!
      </p>
        <Grid>
          <Grid.Row>
          <Grid.Column width={11}>
            <MainMap data={data} handleClickResult={this.handleClickResult}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <Header as='h3'>Distance Requirements</Header>
              <p>Your Mobile Food Facility must be this far away from:</p>
              <Statistic.Group horizontal={true}>
                {data.map((d,i)=>(<Statistic color={['olive', 'teal', 'violet', 'grey', 'orange'][i]} horizontal>
                  <Statistic.Value>{d.radius}'</Statistic.Value>
                  <Statistic.Label>{d.name}</Statistic.Label>
                </Statistic>
                ))}
              </Statistic.Group>
            </Segment>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
        {this.state.clickStatus=='bad' && <Header as='h2' icon='warning sign' color='red'>Your spot is too close!</Header>}
        
            
        
        {this.state.clickStatus=='good' &&
        <React.Fragment>
        <Header as='h2' icon='check circle' color='green'>Your spot is good to go!</Header>
        <div>{Math.round(this.state.clicked.lat*10000)/10000},{Math.round(this.state.clicked.lng*10000)/10000}</div>
        <Button positive>Continue with this location</Button>
        </React.Fragment>}
        
        {this.state.offending && (
        <List>
         {this.state.offending.map((o,i)=> (o.length && (
            <React.Fragment>
            { o.map(d=>(
              <List.Item>
                <List.Icon name={ {
                "street_artists" : 'paint brush',
                "restaurants" : 'food',
                "bus" : 'bus',
                "blue" : 'handicap',
                "hydrants" : 'fire extinguisher'

                }[data[i].name] } />
                <List.Content>
                <b>{d.name|| data[i].name}</b>
                <span>{' is '}</span>
        <b>{ Math.round(geolib.getDistance({latitude: this.state.clicked.lat,longitude:this.state.clicked.lng,},
          {latitude:d.lat,longitude:d.lon})/feetPerMeter*100)/100
          
        }
          </b>
          <span>{' feet away '}</span>
                
                </List.Content>
              </List.Item>))}
            </React.Fragment>
         
        )) || null)}
        </List>
         )}
           
        </Segment>
      </div>
    )
  }
}
export default Step1;
