import React, { Component } from 'react';

import Flag from '../../../static/images/flag.png';
import Home from '../../../static/images/home.png';

import {
    Button,
    Wrapper,
    Menu
} from 'react-aria-menubutton';

export default class Header extends Component {

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    return (
      <div className='header'>
        <div className='home_icon icon' style={ { marginRight: '10px' } }><img src={ Home } alt=''/></div>
        <div className='flag_icon icon'><span>3</span><img src={ Flag }/></div>
        <div className='burger-menu padding14'>
          <Wrapper
            className='MyMenuButton'
            onSelection={ handleSelection }>
            <Button className='MyMenuButton-button'>
              <span className='glyphicon glyphicon-menu-hamburger'></span>
            </Button>
            <Menu className='MyMenuButton-menu'>
              <ul>
                <li className='text-left'><span className='glyphicon glyphicon-cog font22 padding14'></span></li>
                <li className='padding14'>Request</li>
                <li className='padding14'>History</li>
                <li className='padding14'>Rules</li>
                <li className='padding14'>Query</li>
                <li className='padding14'>Support</li>
                <li className='padding14'>Log out</li>
              </ul>
            </Menu>
          </Wrapper>
        </div>
      </div>
    );
  }
}
function handleSelection(value, event) {

}
