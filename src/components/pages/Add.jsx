import React from "react";
import { withRouter } from "react-router-dom";
import { add_list } from "../../redux/action/listAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { v4 as uuidv4 } from "uuid";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleClick = () => {
    this.props.add_list({ key: uuidv4(), value: this.state.value });
    this.props.history.replace("/");
  };
  handleChange = (event) => {
    // const { value } = event.target;
    this.setState({ value: event.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="wrapper">
        <h2 className="mb-4">Add List</h2>
        <div className="form-group">
          <label>List Text</label>
          <input
            type="text"
            className="form-control"
            placeholder="List"
            onChange={this.handleChange}
            value={value}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.handleClick}
        >
          Save
        </button>
      </div>
    );
  }
}

const mapDispatchProps = {
  add_list,
};

export default compose(connect(null, mapDispatchProps), withRouter)(Add);
