import React from 'react';
import ReactDom from 'react-dom';
import {connect} from "react-redux";

import LabeledInput from '../components/labeledinput.jsx';
import { setField } from "../actions"

class App extends React.Component {

	render(){
		const props = this.props;
		return (
				<div className="flex">
					<div className="inputs">
						<LabeledInput 
							caption="Должность принимающего заявление"
							name = "director_role"
							value={props.director_role}
							onChange={
								(val) =>
									props.setField("director_role",val)
								}
						/>

						<LabeledInput 
							caption="Фирма"
							name = "company"
							value={props.company}
							onChange={
								(val) => 
									props.setField("company",val)
								}
						/>

						<LabeledInput 
							caption="ФИО принимающего заявление в род.падеже"
							name = "director_name"
							value={props.director_name}
							onChange={
								(val) => 
									props.setField("director_name",val)
								}
						/>

						<LabeledInput 
							caption="Ваше ФИО в род.падеже"
							name = "name"
							value={props.from}
							onChange={
								(val) => 
									props.setField("from",val)
								}
						/>

						<LabeledInput 
							caption="Название отдела"
							name = "section"
							value={props.section}
							onChange={
								(val) =>
									props.setField("section",val)
								}
						/>

						<LabeledInput 
							caption="Должность"
							name = "role"
							value={props.role}
							onChange={
								(val) => 
									props.setField("role",val)
								}
						/>		

						<LabeledInput 
							caption="Дата приема на работу"
							name = "date"
							value={props.date}
							onChange={
								(val) => 
									props.setField("date",val)
								}
						/>

						<LabeledInput 
							caption="Ваши инициалы"
							name = "initials"
							value={props.initials}
							onChange={
								(val) =>
									props.setField("initials",val)
								}
						/>

						<LabeledInput 
							caption="Ваш email"
							name = "email"
							value={props.email}
							onChange={
								(val) =>
									props.setField("email",val)
								}
						/>

						<button className="btn" onClick={()=>{
							localStorage.clear();
							location.reload();
						}}>Очистить localStorage</button>

					</div>
					<div className="document">
						<div className="document-header">
							<span className="document--generated">{props.director_role}</span>
							<span className="document--generated">{props.company}</span>
							<br/>
							<span className="document--generated">{props.director_name}</span>
							<br/>
							от <span className="document--generated">{props.from}</span>
						</div>
						<h1 className="document-title">Заявление</h1>
						Прошу принять меня на работу 
						в <span className="document--generated">{props.section} </span>
						<span className="document--generated">{props.company}</span> на должность
						<span className="document--generated">{props.role}</span> с
						<span className="document--generated">{props.date}</span>.
						<div className="document--sign"></div>
						<span className="document--generated">{props.initials}</span>
						<br/>
						Email для связи: <span className="document--generated">{props.email}</span>
					</div>
				</div>
			)
	}
}


const mapStateToProps = (state) => {
	return state.field;
}

const mapDispatchToProps = (dispatch) => {
	return {
		setField: (name,val) => {
			dispatch(setField(name,val));
		}
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(App);