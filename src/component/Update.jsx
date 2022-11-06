import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.update ? (
          <div className="badge badge-accent">Update Completed..</div>
        ) : (
          <button className="badge badge-primary">
            Sedang mengupdate Content..
          </button>
        )}
      </div>
    );
  }
}

export default Update;
