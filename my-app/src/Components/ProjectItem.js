import React, {
  Component
}
from 'react';

class ProjectItem extends React.Component {
  render() {
    console.log(this.props);
    return ( 
      <li className = "ProjectItem">
        <strong> 
          {this.props.project.title} 
          {this.props.project.category} 
        </strong> 
       </li>
    );
  }
}

export default ProjectItem;
