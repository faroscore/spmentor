import React from "react";
import {connect} from "react-redux";
import {nameGenerator} from "utilities/names.js";
import BlankView from "components/Blank";

class Blank extends React.Component {

  render() {
    const props = this.props;
    let {initials, parsedName} = nameGenerator(props.from);
    let values = Object.assign({},this.props,{initials},{parsedName});
    return (
      <BlankView
        values = {values}
      />

    )
  }
}

const mapStateToProps = (state) => {
  return state.field;
}

export default connect(mapStateToProps)(Blank);