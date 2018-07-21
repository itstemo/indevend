import React, { Component } from "react";
import { Card, Form } from 'semantic-ui-react';

class ApplicationForm extends Component {
  state = {
    name: '',
    business_name: '',
    phone: '',
    begin_hour: '',
    begin_time_of_day: '',
    end_hour: '',
    end_time_of_day: '',
    car_model: '',
    car_plate: '',

    submittedName: '',
    submittedEmail: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }


  render() {
    const {
      name,
      business_name,
      phone,
      begin_hour,
      begin_time_of_day,
      end_hour,
      end_time_of_day,
      car_model,
      car_plate,

      submittedName,
      submittedEmail
    } = this.state;

    return (
      <Card fluid>
        <Card.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                label='Full Name'
                placeholder='Luis Calona'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label='Business Name'
                placeholder="Luis's Tacos"
                name='business_name'
                value={business_name}
                onChange={this.handleChange}
              />
              <Form.Input
                label='Phone Number'
                placeholder='(###) ###-###'
                name='phone'
                value={phone}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Hours of Operation</label>
              <Form.Input
                placeholder='9:00'
                name='begin_hour'
                value={begin_hour}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='AM'
                name='begin_time_of_day'
                value='am'
                checked={begin_time_of_day === 'am'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='PM'
                name='begin_time_of_day'
                value='pm'
                checked={begin_time_of_day === 'pm'}
                onChange={this.handleChange}
              />

              <label>TO</label>

              <Form.Input
                placeholder='5:00'
                name='end_hour'
                value={end_hour}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='AM'
                name='end_time_of_day'
                value='am'
                checked={end_time_of_day === 'am'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='PM'
                name='end_time_of_day'
                value='pm'
                checked={end_time_of_day === 'pm'}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label='Car Make/Model'
                placeholder='Toyota Camry'
                name='car_model'
                value={car_model}
                onChange={this.handleChange}
              />
              <Form.Input
                label='License Plate #'
                placeholder='0ABC123'
                name='car_plate'
                value={car_plate}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Button content='Submit' />
            </Form.Group>
          </Form>
          </Card.Content>
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre> */}
      </Card>
    );
  }
}
export default ApplicationForm
