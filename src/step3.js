import React, {Component} from 'react'; 
import {
  Segment,
  Grid,
  Container,
  Header,
  Image,
  Button
} from "semantic-ui-react";

class Step3 extends Component {
  render_q2() {
    return (
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "3em" }}>
            We Help Companies and Companions
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            We can give your company superpowers to do things that they never
            thought possible. Let us delight your customers and empower your
            needs... through pure data analytics.
          </p>

          <p style={{ fontSize: "1.33em" }}>
            We can give your company superpowers to do things that they never
            thought possible. Let us delight your customers and empower your
            needs... through pure data analytics.
          </p>
        </Grid.Column>

        <Grid.Column floated="right" width={4}>
        </Grid.Column>
      </Grid.Row>
    );
  }

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
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
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
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
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
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
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
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
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

  render() {
    return (
      <div>
        <Container>
          <Segment style={{ padding: "1em 1em" }} vertical>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header
                  as="h1"
                  style={{ fontSize: "6em", textAlign: "center" }}
                >
                  Step 3: Draft Diagram
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

export default Step3;
