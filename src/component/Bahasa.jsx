import React, { Component } from "react";
import ListBahasa from "../data/bahasa";

export default class Bahasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ListBahasa(),
      toggleStatus: true,
    };
    this.pilihBahasa = this.pilihBahasa.bind(this);
  }

  pilihBahasa() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  render() {
    return (
      <div>
        <div
          className="absolute right-11 rounded-md mx-1 my-2 z-[9999] tooltip-left pt-1"
          data-tip="Mode"
        >
          <button className="dark:text-black" onClick={this.pilihBahasa}>
            {this.state.toggleStatus ? "INDONESIA" : "INGGRIS"}
          </button>
        </div>
      </div>
    );
  }
}
