import React, {PropTypes} from 'react';
import Header from './common/Header';

class Template extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Template.PropTypes = {
  children : PropTypes.node
};

export default Template;
