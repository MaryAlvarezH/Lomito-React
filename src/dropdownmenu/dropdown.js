import React from 'react';
import './stylesdrop.scss';


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
          <ul>
         <li><a className="active" href="#session">Registro</a></li>
         <li><a href="#iniciosesion">inicia sesion</a></li>
         <li><a href="#contraseña">olvide mi contraseña!</a></li>
         
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