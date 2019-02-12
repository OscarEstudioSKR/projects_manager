import React, { Component } from 'react';
import userImg0 from './img/userImg0.png';


class User extends Component {
    constructor(props){
        super(props);
        this.state= {
            userImg: userImg0,
        }
      }

    render() {
        let style = {
            height: 'auto',
            width: '40px',
            borderRadius: '50%',
            paddingBottom: '5%',
        }
        return (
            <div className="User">

                {this.props.mostrar=="img" ? 
                <img className="user-logo" src={this.state.userImg}/>:
                <p>no</p>}
                
            </div>
      );
    }
  }
  
  export default User;