import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class StepsMenu extends Component {
  state = {}

  handleClick = (e, { title }) => this.setState({ active: title })

  render() {
    const { active } = this.state

    return (
      <Step.Group vertical>
        <Link to='/step1'>
        <Step
          active={active === 'Step 1'}
          icon='search'
          link
          onClick={this.handleClick}
          title='Step 1'
          description='Research / Visit SBAC'
        />
        </Link>
        <Link to='/step2'>
        <Step
          active={active === 'Step 2'}
          icon='map marker alternate'
          link
          onClick={this.handleClick}
          title='Step 2'
          description='Choose Location'
        />
        </Link>
        <Link to='/step3'>
        <Step
          active={active === 'Step 3'}
          icon='pencil'
          link
          onClick={this.handleClick}
          title='Step 3'
          description='Draft Diagram'
        />
        </Link>
        <Link to='/step4'>
        <Step
          active={active === 'Step 4'}
          icon='send'
          link
          onClick={this.handleClick}
          title='Step 4'
          description='Submit Application'
        />
        </Link>
        <Link to='/step5'>
        <Step
          active={active === 'Step 5'}
          icon='balance scale'
          link
          onClick={this.handleClick}
          title='Step 5'
          description='Public Works Plan Review'
        />
        </Link>
        <Link to='/step6'>
        <Step
          active={active === 'Step 6'}
          icon='bullhorn'
          link
          onClick={this.handleClick}
          title='Step 6'
          description='Public Notification'
        />
        </Link>
        <Link to='/step7'>
        <Step
          active={active === 'Step 7'}
          icon='mail'
          link
          onClick={this.handleClick}
          title='Step 7'
          description='Mailing and Posting'
        />
        </Link>
      </Step.Group>
    )
  }
}
