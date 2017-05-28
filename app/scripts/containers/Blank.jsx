import React from "react";
import {connect} from "react-redux";
import {nameGenerator} from "utilities/names.js";
import BlankView from "components/BlankView";

class Blank extends React.Component {

  render() {
    const props = this.props;
    let {initials, parsedName} = nameGenerator(props.from);
    let {
      company,
      date,
      email,
      director_name,
      director_role,
      role,
      section
    } = props;
    return (<BlankView
        director_role={director_role}
        company={company}
        director_name={director_name}
        section={section}
        role={role}
        date={date}
        email={email}
        initials={initials}
        parsedName={parsedName}/>

    )
  }
}

const mapStateToProps = (state) => {
  return state.field;
}

export default connect(mapStateToProps)(Blank);