import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props
    return (
      <div>
        <div className="card">
        <img src={imageUrl ? imageUrl : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=900"} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
