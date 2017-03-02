import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			director_role: localStorage.getItem("director_role") || "Генеральному директору",
			company: localStorage.getItem("company") || "OAO Фирма",
			director_name: localStorage.getItem("director_name") || "Иванову Ивану Ивановичу",
			from: localStorage.getItem("from") || "Петрова Петра Петровича",
			section: localStorage.getItem("section") || "отдел заказов",
			role: localStorage.getItem("role") || "технический специалист",
			date: localStorage.getItem("date") || "21.12.2012",
			initials: localStorage.getItem("initials") || "Петров П.П.",
		}
		this.update = this.update.bind(this);
	}

	update(){
		localStorage.setItem("director_role",this.director_role.refs.input.value || this.state.director_role);
		localStorage.setItem("company",this.company.refs.input.value || this.state.company);
		localStorage.setItem("director_name",this.director_name.refs.input.value || this.state.director_name);
		localStorage.setItem("from",this.from.refs.input.value || this.state.from);
		localStorage.setItem("section",this.section.refs.input.value || this.state.section);
		localStorage.setItem("role",this.role.refs.input.value || this.state.role);
		localStorage.setItem("date",this.date.refs.input.value || this.state.date);
		localStorage.setItem("initials",this.initials.refs.input.value || this.state.initials);
		
		this.setState({
			director_role: localStorage.getItem("director_role"),
			company: localStorage.getItem("company"),
			director_name: localStorage.getItem("director_name"),
			from: localStorage.getItem("from"),
			section: localStorage.getItem("section"),
			role: localStorage.getItem("role"),
			date: localStorage.getItem("date"),
			initials: localStorage.getItem("initials")
		})
	}

	render(){
		return (
				<div className="flex">
					<div className="inputs">
						<LabeledInput 
							caption="Должность принимающего заявление"
							name = "director_role"
							onChange={this.update}
							ref={(component) => this.director_role = component}
						/>

						<LabeledInput 
							caption="Фирма"
							name = "company"
							onChange={this.update}
							ref={(component) => this.company = component}
						/>

						<LabeledInput 
							caption="ФИО принимающего заявление в род.падеже"
							name = "director_name"
							onChange={this.update}
							ref={(component) => this.director_name = component}
						/>

						<LabeledInput 
							caption="Ваше ФИО в род.падеже"
							name = "name"
							onChange={this.update}
							ref={(component) => this.from = component}
						/>

						<LabeledInput 
							caption="Название отдела"
							name = "section"
							onChange={this.update}
							ref={(component) => this.section = component}
						/>

						<LabeledInput 
							caption="Должность"
							name = "role"
							onChange={this.update}
							ref={(component) => this.role = component}
						/>		

						<LabeledInput 
							caption="Дата приема на работу"
							name = "date"
							onChange={this.update}
							ref={(component) => this.date = component}
						/>

						<LabeledInput 
							caption="Ваши инициалы"
							name = "initials"
							onChange={this.update}
							ref={(component) => this.initials = component}
						/>
						<button className="btn" onClick={()=>{
							localStorage.clear();
							location.reload();
						}}>Очистить localStorage</button>

					</div>
					<div className="document">
						<div className="document-header">
							<span className="document--generated">{this.state.director_role}</span>
							<span className="document--generated">{this.state.company}</span>
							<br/>
							<span className="document--generated">{this.state.director_name}</span>
							<br/>
							от <span className="document--generated">{this.state.from}</span>
						</div>
						<h1 className="document-title">Заявление</h1>
						Прошу принять меня на работу 
						в <span className="document--generated">{this.state.section} </span>
						<span className="document--generated">{this.state.company}</span> на должность
						<span className="document--generated">{this.state.role}</span> с
						<span className="document--generated">{this.state.date}</span>.
						<div className="document--sign"></div>
						<span className="document--generated">{this.state.initials}</span>
					</div>
				</div>
			)
	}
}

class LabeledInput extends React.Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
	}

	validate(e){
		let val = this.refs.input.value;

		if (val === ""){
			this.refs.input.classList.add("input_wrong");
			throw new Error( e.target.getAttribute("name") + " is empty");
		}

		if (this.props.name.includes("name")){
			if (!/([а-яА-Я]+(\ )+){2}([а-яА-Я]+){1}/.test(val)){
				this.refs.input.classList.add("input_wrong");
				throw new Error("fio should be constructed from 3 words");
			}
		}

		if (this.props.name === "date"){
			if (!/\d{2}.\d{2}.\d{4}/.test(val)){
				this.refs.input.classList.add("input_wrong");
				throw new Error("Date format should be in format DD.MM.YYYY");
			}

			let date = val.split(".");

			if (+date[0] > 31 || +date[0] < 1 ){
				this.refs.input.classList.add("input_wrong");
				throw new Error("Date day should be between 1 and 31");
			}

			if (+date[1] > 12 || +date[1] < 1 ){
				this.refs.input.classList.add("input_wrong");
				throw new Error("Date month should be between 1 and 12");
			}

			if (+date[2] < 0 ){
				this.refs.input.classList.add("input_wrong");
				throw new Error("Date year should be above or equal zero");
			}
		}

		if (this.props.name === "initials"){
			if (!/([а-яА-Я]* [А-Я]\.[А-Я]\.)/.test(val)){
				this.refs.input.classList.add("input_wrong");
				throw new Error("Initials should be in format Surname.N.M.");
			}

		}

		this.props.onChange();
	}

	render(){
		return(
				<div className="labeled-input">
					<label>
						<span>{this.props.caption}</span>
						<input 
							ref="input" 
							name={this.props.name} 
							placeholder={this.props.caption} 
							type="text" 
							onBlur={this.validate} 
							onFocus={(e)=>{e.target.classList.remove("input_wrong")}}/>
					</label>
				</div>
			)
	}
}
