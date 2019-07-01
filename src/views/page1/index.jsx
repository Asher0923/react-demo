import React, { Component } from "react";
import { connect } from "react-redux";
import addData from "@store/actions/page1Actions";

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.addData([1, 2, 3, 4]);
  }

  render() {
    return (
      <div>
        <span>{this.props.status}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.page1.status
});
export default connect(
  mapStateToProps,
  { addData }
)(Page1);
