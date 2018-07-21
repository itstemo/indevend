import React, { Component } from "react";
import {
  Segment,
  Grid,
  Container,
  Header,
  Image,
  Button
} from "semantic-ui-react";
import logo_2 from "./paragraph.png";
import CCSF from "./CCSF-logo.png";
import sfpd from "./sfpd.png"
import dph from './dph.png'
import sfpw from './sfpw.jpg'

class Step1 extends Component {

  render_fire() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2" style={{ fontSize: "3em" }}>
                Fire Department
              </Header>
              <p style={{ fontSize: "1.33em" }}>
              A Fire Department permit constitutes permission to maintain, store, use or handle materials,
               or to conduct processes which produce conditions hazardous to life or property, or to install equipment 
               used in connection with such activities.
              </p>
              <p style={{ fontSize: "1.33em" }}>
              Applications for Fire Department permit shall be accompanied by plans when required by the Bureau.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="medium" src={sfpd} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" target="_blank" href="https://sf-fire.org/permits#applic" >Apply here</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  render_DPH() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2" style={{ fontSize: "3em" }}>
                Department of Public Health
              </Header>
              <p style={{ fontSize: "1.33em" }}>
              The Environmental Health Branch (EHB) issues permits to mobile food vendors to lower the risk of food-borne illness.
              Mobile Food Facilities (MFFs) may operate their business on private property (i.e. private parking lot, BART, etc.)
               or in a public right-of-way (i.e. sidewalk, street, or alley).
              </p>
              <p style={{ fontSize: "1.33em" }}>
                All mobile food facilities must obtain approval from EHB before operating.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="medium" src={dph} target="_blank" href="https://www.sfdph.org/dph/EH/Food/mobile.asp" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Apply here</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  render_public_work() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2" style={{ fontSize: "3em" }}>
                Public Work's
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Finally, you'll need to submit an Application for a Revocable 
                Mobile Food Facility Permit, handled by the San Francisco Department of Public Works.
              </p>
              <p style={{ fontSize: "1.33em" }}>
              A Mobile Food Facility is any vehicle or pushcart used in conjunction with a commissary or other permanent food facility upon which food is sold or distributed at retail in a static location.
               Department of Public Health and San Francisco Fire Department continues to enforce public safety regulations, while location permitting was transferred from the Police Department to Public Works.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="medium" src={sfpw} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" target="_blank" href="https://www.sfpublicworks.org/services/permits/mobile-food-facilities">Apply here</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  render_business_license() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2" style={{ fontSize: "3em" }}>
                Business License
              </Header>
              <p style={{ fontSize: "1.33em" }}>
              San Francisco’s Business and Tax Regulations Code requires that every person engaging 
              in business within the City must register within 15 days after commencing 
               business and renewed on an annual basis.
              </p>
              <p style={{ fontSize: "1.33em" }}>
              Submitting this application will establish a business in San Francisco, 
              and initiate tax compliance responsibilities including tax filing and payments.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="medium" src={CCSF} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" href="https://sftreasurer.org/registration" target="_blank">Apply here</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Segment style={{ padding: "4em 0em" }} vertical>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header
                  as="h1"
                  style={{ fontSize: "5em", textAlign: "center" }}
                >
                  Resources for Applying for Permits & Licenses
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Container>

        {this.render_business_license()}
        {this.render_fire()}
        {this.render_DPH()}
        {this.render_public_work()}
      </div>
    );
  }
}

export default Step1;
