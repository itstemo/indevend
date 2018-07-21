import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import logo_2 from './paragraph.png';
import { Grid } from 'semantic-ui-react';
import StepsMenu from './StepsMenu';
import Step1 from './step_1'
import Step3 from './step3'
import Step2 from './step_2'

class App extends Component {
  render() {
    return (
      <Router>      
        {/* Columns have to add up to 16 in one row */}
        <Grid columns={2}>
          <Grid.Row>
            {/* Menu column */}
            <Grid.Column mobile={16} tablet={8} computer={4}>
            <img src="/logo.png" class="ui small image" />
              <h1>MENU</h1>
              <StepsMenu />
            </Grid.Column>
            {/* Map/Info column */}
            <Grid.Column mobile={16} tablet={8} computer={12}>
              <Route path='/step1' component={Step1}/>
              <Route path='/step2' component={Step2}/>
              <Route path='/step3' component = {Step3} />
              <Route path='/step4' render={() => {
                return <h1>Step 4</h1>
              }} />
              <Route path='/step5' render={() => {
                return <h1>Step 5</h1>
              }} />
              <Route path='/step6' render={() => {
                return <h1>Step 6</h1>
              }} />
              <Route path='/step7' render={() => {
                return <h1>Step 7</h1>
              }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
