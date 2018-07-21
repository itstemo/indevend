import React, { Component } from "react";
import { Button, Header, Image, Item, Icon, Label, Card, Form } from 'semantic-ui-react';
import ApplicationForm from './ApplicationForm'

export class ApplicationItems extends Component {
  state = {
    form_completed: false,
    show_form: false,
    photographs_completed: false,
    site_plan_completed: false,
    menu_completed: false,
    fees_completed: false,
  }

  handleClick = (event) => this.setState({ [event.target.name]: event.target.value })

  handleFormClick = () => this.setState({ show_form: !this.state.show_form })

  render() {
    return (
      <Item.Group relaxed divided>
        <Item>
          <Item.Content verticalAlign='middle'>
            <Item.Header>
              {this.state.form_completed ? (<Icon name='check' color='green' size='big' />) : (<Icon name='file alternate' size='big' />)}
              Completed Form
            </Item.Header>
            <Item.Description>
              Complete the Public Works Mobile Food Facility Application
            </Item.Description>
            <Item.Extra>
              <Button
                name='form_completed'
                value={this.state.form_completed}
                onClick={this.handleFormClick}
              >Fill Application</Button>
            </Item.Extra>
            {this.state.show_form ? <ApplicationForm /> : <div />}
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle'>
            <Item.Header>
              <Icon name='id card' size='big' />
              Photographs
            </Item.Header>
            <Item.Description>
              Provide two (2) photographs of the permit applicant(s) for ID cards (i.e. passport size)
            </Item.Description>
            <Item.Extra>
              <Button>Upload Photos</Button>
              <Button><Icon name='photo' size='large' />Take Photos</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle'>
            <Item.Header>
              <Icon name='map outline' size='big' />
              Site plan
            </Item.Header>
            <Item.Description>
              Provide a site plan
            </Item.Description>
            <Item.Extra>
              <Button>Upload Site Plan</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle'>
            <Item.Header>
              <Icon name='list alternate outline' size='big' />
              Menu
            </Item.Header>
            <Item.Description>
              Provide a sample menu or itemized list
            </Item.Description>
            <Item.Extra>
              <Button>Upload Menu</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content verticalAlign='middle'>
            <Item.Header>
              <Icon name='dollar' size='big' />
              Fees
            </Item.Header>
            <Item.Description>
              Pay half of processing, notification, and inspection fees
            </Item.Description>
            <Item.Extra>
              <Label>
                <Icon name='cc visa' size='big' />
                <Icon name='cc mastercard' size='big' />
                <Icon name='cc amex' size='big' />
                Check or Money Order made payable to SF Public Works
              </Label>
              <br/>
              <Button><Icon name='credit card' size='large' />Pay online</Button>
              {/* <Button><Icon name='cc apple pay' size='large' />Apple Pay</Button> */}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
