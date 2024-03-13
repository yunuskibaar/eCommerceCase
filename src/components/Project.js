// Project.js
import React from "react";
import "../styles/Project.css";



class Project extends React.Component {
  render() {  
    const { projectTitle, projectDesc, yazılımDili, img } = this.props;
    return (
      
      <div className="col-md-4 mb-3">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          alt="Card resmi"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.projectTitle}</h5>
          <p className="card-text">{this.props.projectDesc}</p>
          <p className="card-text">
            <small className="text-muted">Stack</small>
          </p>
        </div>
      </div>
    </div>
    
    );
  }
  }


export default Project;
