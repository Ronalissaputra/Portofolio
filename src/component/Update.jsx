import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.update ? (
          <div className="badge badge-primary">Update Completed..</div>
        ) : (
          <button className="badge badge-accent">
            Sedang mengupdate Content..
          </button>
        )}
      </div>
    );
  }
}

export default Update;
