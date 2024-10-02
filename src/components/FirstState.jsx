// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "../index.css";

class FirstState extends Component {
  constructor() {
    super();
    this.state = {
      title: "Belajar Menggunakan State Dalam Function",
      subtitle: "React Vite by Laeli Nurchasanah",

    };
  }
  getTitle() {
    return this.state.title;
  }
  getSubtitle() {
    return this.state.subtitle;
  }
  render() {
    return (
      <div className="state">
        <h1>{this.getTitle()}</h1>
        <h4>{this.getSubtitle()}</h4>
      </div>
    );
  }
}
export default FirstState;
