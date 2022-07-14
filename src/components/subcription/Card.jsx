import React from "react";
import { Link } from "react-router-dom";
import "./subscription.css";

function Card(props) {
  return (
    <div>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="">{props.title}</h2>
          <p className="price">
            <span>{props.price}</span>/month
          </p>
          <p className="">{props.text}</p>
          <div className="benefit">
            <p>
              <i class="bi bi-check"></i> {props.benefit1}
            </p>
            <p>
              <i class="bi bi-check"></i> {props.benefit2}
            </p>
            <p>
              <i class="bi bi-check"></i> {props.benefit3}
            </p>
          </div>
          <Link to="#" className="btn btn-dark btn-block">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
