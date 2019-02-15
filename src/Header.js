import React, { Component } from 'react';
import logoP from './img/logoP.png';
import diskete from './img/diskete.png';


class Header extends Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div className="Header">
            {this.props.pagina === "Main" && <this.Main />}

        </div>
      );
    }

    Main(){
      return(
        <div className="MainPage">
          <h1>Project Manager</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>
          <img src={diskete}></img>
          <div>
            <p className="parrafo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit in nisi, dignissim mus fames. Eleifend duis luctus himenaeos potenti nostra vel penatibus, hac tellus lectus felis ullamcorper curae, natoque aenean quam commodo fermentum tempus. Montes egestas nostra mauris dui tincidunt neque pharetra, eget molestie donec elementum interdum lacinia mattis aptent, fringilla duis semper risus taciti nascetur. <br /><br />Feugiat pretium suscipit pellentesque ut ornare class justo tellus molestie, sed mus odio lacinia varius mi eros suspendisse turpis, gravida cras sem massa eu facilisis placerat ad. Bibendum facilisi aliquet cras augue commodo natoque blandit nulla, felis ultricies ullamcorper gravida sapien </p>
            <p className="parrafo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit in nisi, dignissim mus fames. Eleifend duis luctus himenaeos potenti nostra vel penatibus, hac tellus lectus felis ullamcorper curae, natoque aenean quam commodo fermentum tempus. Montes egestas nostra mauris dui tincidunt neque pharetra, eget molestie donec elementum interdum lacinia mattis aptent, fringilla duis semper risus taciti nascetur. <br /><br />Feugiat pretium suscipit pellentesque ut ornare class justo tellus molestie, sed mus odio lacinia varius mi eros suspendisse turpis, gravida cras sem massa eu facilisis placerat ad. Bibendum facilisi aliquet cras augue commodo natoque blandit nulla, felis ultricies ullamcorper gravida sapien </p>
          </div>
        </div>);}





  }
  
  export default Header;