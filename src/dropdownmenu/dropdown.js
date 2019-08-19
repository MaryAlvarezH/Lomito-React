import React from 'react';
import './stylesdrop.scss';
import {NavLink} from 'react-router-dom';

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button-4" onClick={this.showDropdownMenu}> Sesión </div>

          { this.state.displayMenu ? (
          <ul className="drop">
         <li><a href="#iniciosesion">inicia sesion</a></li>
         <li><a href="#sesion">olvide mi contraseña!</a></li>
        <li> <NavLink exact to="/session" activeClassName="is-selected">registro</NavLink></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;