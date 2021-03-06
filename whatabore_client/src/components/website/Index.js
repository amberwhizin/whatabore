import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Index extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount = () => {
    //GET message from server using fetch api
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  };

  render() {
    return (
      <div className="sections">
        <img
          src="https://www.healthguidance.org/wp-content/uploads/18939Bored.jpg"
          class="img-fluid"
          alt="picture of a sleepy man"
        ></img>

        {/* <p>{this.state.message}</p> */}
        <h1>BORED? Let us help you!</h1>

        <Link to="/movies">
          <button className="btn btn-success" renderAs="button">
            <span>MOVIES</span>
          </button>
        </Link>

        <Link to="/music">
          <button className="btn btn-success" renderAs="button">
            <span>MUSIC</span>
          </button>
        </Link>

        <Link to="/books">
          <button className="btn btn-success" renderAs="button">
            <span>BOOKS</span>
          </button>
        </Link>

        <Link to="/todo-lists">
          <button className="btn btn-success" renderAs="button">
            <span>FUN TRACKER</span>
          </button>
        </Link>
      </div>
    );
  }
}
