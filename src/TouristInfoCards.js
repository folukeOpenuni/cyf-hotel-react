import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="images of cities"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
