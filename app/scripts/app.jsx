import React from 'react';
import ReactDom from 'react-dom';
import LabeledInput from './labeledinput.jsx'

export default class App extends React.Component{

	render(){
		return (
				<div className="flex">
					<div className="inputs">
						<LabeledInput 
							caption="Должность принимающего заявление"
							name = "director_role"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "director_role",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="Фирма"
							name = "company"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "company",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="ФИО принимающего заявление в род.падеже"
							name = "director_name"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "director_name",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="Ваше ФИО в род.падеже"
							name = "name"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "from",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="Название отдела"
							name = "section"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "section",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="Должность"
							name = "role"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "role",
										value: val});
								}}
						/>		

						<LabeledInput 
							caption="Дата приема на работу"
							name = "date"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "date",
										value: val});
								}}
						/>

						<LabeledInput 
							caption="Ваши инициалы"
							name = "initials"
							onChange={
								(val)=>{
									this.props.store.dispatch({
										type: "SET_FIELD",
										name: "initials",
										value: val});
								}}
						/>
						<button className="btn" onClick={()=>{
							localStorage.clear();
							location.reload();
						}}>Очистить localStorage</button>

					</div>
					<div className="document">
						<div className="document-header">
							<span className="document--generated">{this.props.store.getState().director_role}</span>
							<span className="document--generated">{this.props.store.getState().company}</span>
							<br/>
							<span className="document--generated">{this.props.store.getState().director_name}</span>
							<br/>
							от <span className="document--generated">{this.props.store.getState().from}</span>
						</div>
						<h1 className="document-title">Заявление</h1>
						Прошу принять меня на работу 
						в <span className="document--generated">{this.props.store.getState().section} </span>
						<span className="document--generated">{this.props.store.getState().company}</span> на должность
						<span className="document--generated">{this.props.store.getState().role}</span> с
						<span className="document--generated">{this.props.store.getState().date}</span>.
						<div className="document--sign"></div>
						<span className="document--generated">{this.props.store.getState().initials}</span>
					</div>
				</div>
			)
	}
}
