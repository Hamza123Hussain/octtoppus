import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showDropdown: false,
        };  
      }
    
      handleMouseEnter = () => {
        this.setState({ showDropdown: true });
      };
    
      handleMouseLeave = () => {
        this.setState({ showDropdown: false });
      };

  render() {
    const { mainMenuItem, dropdownItems } = this.props;

    return (
        <div className='MainMenu'>
        <ul>
        <li><a href="/" className='MenuItem'>Home</a></li>
        <li><a href="/about" className='MenuItem'>About</a></li>
        

        <li>
      
      <a href="/Services" className={`MenuItem ${this.state.showDropdown ? 'active' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} >
          Services
          <i className={`arrow fa-solid fa-angle-down ${this.state.showDropdown ? 'active' : ''}`}></i>
          </a>
  
      <div className={`dropdown ${this.state.showDropdown ? 'active' : ''}`}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}>
          {/* Your dropdown menu items go here */}
          <a className="dropdown-item" href="/service1">Service 1</a>
          <a className="dropdown-item" href="/service2">Service 2</a>
          {/* Add more menu items as needed */}
        </div>  
      
    </li>
      <li><a href="/contact" className='MenuItem'>Contact</a></li>
      
      </ul>
      </div>
    );
  }
}

export default Menu;
