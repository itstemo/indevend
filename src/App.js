import React, { Component } from 'react';
import './App.css';
import logo_2 from './paragraph.png'

import { Grid } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div>
        {/* Columns have to add up to 16 in one row */}
        <Grid container columns={2}>
          <Grid.Row>
            {/* Menu column */}
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <h1>MENU</h1>
              <img src={logo_2} alt="logo_2" />
            </Grid.Column>
            {/* Map/Info column */}
            <Grid.Column mobile={16} tablet={8} computer={12}>
              <h1>Map or whatever</h1>
              <img src={logo_2} alt="logo_2" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    );
  }
}

export default App;
