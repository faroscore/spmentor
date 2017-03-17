import React from 'react';
import ReactDom from 'react-dom';

import LabeledInput from '../components/labeledinput.jsx';
import {connect} from "react-redux";
import { setField } from "../actions"

class App extends React.Component {

	render(){
		console.log("App rendering");
		const {store} = this.context;
		const props = this.props;
		return (
				<div className="flex">
					<div className="inputs">
						<LabeledInput 
							caption="Должность принимающего заявление"
							name = "director_role"
							onChange={
								(val) => 
									store.dispatch(
										setField("director_role",val)
									)
								}
						/>

						<LabeledInput 
							caption="Фирма"
							name = "company"
							onChange={
								(val) => 
									store.dispatch(
										setField("company",val)
									)
								}
						/>

						<LabeledInput 
							caption="ФИО принимающего заявление в род.падеже"
							name = "director_name"
							onChange={
								(val) => 
									store.dispatch(
										setField("director_name",val)
									)
								}
						/>

						<LabeledInput 
							caption="Ваше ФИО в род.падеже"
							name = "name"
							onChange={
								(val) => 
									store.dispatch(
										setField("name",val)
									)
								}
						/>

						<LabeledInput 
							caption="Название отдела"
							name = "section"
							onChange={
								(val) => 
									store.dispatch(
										setField("section",val)
									)
								}
						/>

						<LabeledInput 
							caption="Должность"
							name = "role"
							onChange={
								(val) => 
									store.dispatch(
										setField("role",val)
									)
								}
						/>		

						<LabeledInput 
							caption="Дата приема на работу"
							name = "date"
							onChange={
								(val) => 
									store.dispatch(
										setField("date",val)
									)
								}
						/>

						<LabeledInput 
							caption="Ваши инициалы"
							name = "initials"
							onChange={
								(val) => 
									store.dispatch(
										setField("initials",val)
									)
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
					</div>
				</div>
			)
	}
}

App.contextTypes = {
	store: React.PropTypes.object
}


const mapStateToProps = (state) => {
	return state;
}
export default connect(mapStateToProps)(App);