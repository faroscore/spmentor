import React from "react";
import {connect} from "react-redux";
import {nameGenerator} from "../utilities/names.js";

class Blank extends React.Component{

	render(){
		const props = this.props;
		let { initials, parsedName} = nameGenerator(props.from);

		let { director_role, company, director_name, section, role, date , email} = props;
		return(
				<div className="document">
					<div className="document-header">
						<span className="document--generated">{director_role}</span>
						<span className="document--generated">{company}</span>
						<br/>
						<span className="document--generated">{director_name}</span>
						<br/>
						от <span className="document--generated">{parsedName}</span>
					</div>
					<h1 className="document-title">Заявление</h1>
					Прошу принять меня на работу 
					в <span className="document--generated">{section} </span>
					<span className="document--generated">{company}</span> на должность
					<span className="document--generated">{role}</span> с
					<span className="document--generated">{date}</span>.
					<div className="document--sign"></div>
					<span className="document--generated">{initials}</span>
					<br/>
					Email для связи: <span className="document--generated">{email}</span>
				</div>
		)
	}
}


const mapStateToProps = (state) => {
	return state.field;
}

export default connect(mapStateToProps)(Blank);