import React, { Component } from 'react';
import B from './styles/styles';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      cowSelect: ''
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showMenu(e) {

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  handleChange(event) {
    this.updateState(event.target.value);
  }


  updateState(cowSelect) {
    this.props.updateCowS(cowSelect);
  }

  render() {
    return (
      <div>
        <B.Button onClick={this.showMenu}>
          Menu
        </B.Button>

        {
          this.state.showMenu ? <div 
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }} >
            <B.Button >
              <B.Link target="blank" href="https://blank-face-beta.herokuapp.com">Chat link</B.Link> 
            </B.Button>

            <B.Button >
            <B.Link target="blank" href="https://meushvac.force.com/distributor/login?c=OZ7Y35ZRTP6RS8h6wYIEEvB6huEARr5PXNDxkOxHYdOK6wqYL1sTSVSURyY2e.PF6f32_6NzlZ6FE_iKenj01cGlRPGXvi31I1zq1B0Ee9eVMcp04LWuAy3Vicw5vB2mJWGPcqoaWSSGPugMbGhthk8_3rkHN60Jv6.Hs6kEsSKMOXhDSnJBIT8P0LJhwG8TANTKOin7
" >Mitsubishi Stock link </B.Link> 
            </B.Button>
            <B.Button >
            <B.Link target="blank" href="https://www.mylinkdrive.com">MyLinkDrive link</B.Link> 
            </B.Button>

            <B.Button >
            <B.Link target="blank" href="https://www.comfortsite.com">Trane link</B.Link>
             </B.Button>

            <B.Button >
            <B.Link target="blank" href="https://www.asdealernet.com">AMS link</B.Link> 
            </B.Button>

            <B.Button  >
            <B.Link target="blank" href="https://www.rheemparts.com">Rheem Parts link</B.Link> 
            </B.Button>

            <B.Button  >
            <B.Link target="blank" href="http://www.shoemakermfg.com">Shoemaker link</B.Link> 
            </B.Button>

            <B.Button  >
            <B.Link target="blank" href="https://genscocustomer.com">Gensco Customer link</B.Link>  
            </B.Button>
          </div>
            : null

        }
      </div>
    );
  }
}

export default Card;