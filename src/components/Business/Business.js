import React from "react";
import "./Business.css";

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.mapSearch = `https://www.google.com/maps/search/${this.props.business.name} ${this.props.business.city}`;
  }

  displayRating(rating) {
    switch (rating) {
      case 0:
        return "/img/regular_0.png";
      case 1:
        return "/img/regular_1.png";
      case 1.5:
        return "/img/regular_1_half.png";
      case 2:
        return "/img/regular_3.png";
      case 2.5:
        return "/img/regular_2_half.png";
      case 3:
        return "/img/regular_3.png";
      case 3.5:
        return "/img/regular_3_half.png";
      case 4:
        return "/img/regular_4.png";
      case 4.5:
        return "/img/regular_4_half.png";
      case 5:
        return "/img/regular_5.png";
      default:
        break;
    }
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target="_blank" rel="noreferrer">
            <img
              src={this.props.business.imageSrc}
              alt={this.props.business.name}
            />
          </a>
        </div>
        <h2>
          <a href={this.props.business.url} target="_blank" rel="noreferrer">
            {this.props.business.name}
          </a>
        </h2>
        <div className="Business-information">
          <div className="Business-address">
            <a href={this.mapSearch} target="_blank" rel="noreferrer">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>
                {this.props.business.state} {this.props.business.zipCode}
              </p>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">
              <img
                src={this.displayRating(this.props.business.rating)}
                alt=""
              />
            </h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
