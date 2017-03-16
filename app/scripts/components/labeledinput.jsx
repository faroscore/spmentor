import React from 'react';
import ReactDom from 'react-dom';

const validate = (val, target, onSuccess, onError) =>{
	if (val === ""){
		onError();
		throw new Error("input value should not be empty");
	}

	if (target.includes("name")){
		if (!/([а-яА-Я]+(\ )+){2}([а-яА-Я]+){1}/.test(val)){
			onError();
			throw new Error("fio should be constructed from 3 words");
		}
	}

	if (target === "date"){
		if (!/\d{2}.\d{2}.\d{4}/.test(val)){
			onError();
			throw new Error("Date format should be in format DD.MM.YYYY");
		}

		let date = val.split(".");

		if (+date[0] > 31 || +date[0] < 1 ){
			onError();
			throw new Error("Date day should be between 1 and 31");
		}

		if (+date[1] > 12 || +date[1] < 1 ){
			onError();
			throw new Error("Date month should be between 1 and 12");
		}

		if (+date[2] < 0 ){
			onError();
			throw new Error("Date year should be above or equal zero");
		}
	}

	if (target === "initials"){
		if (!/([а-яА-Я]* [А-Я]\.[А-Я]\.)/.test(val)){
			onError();
			throw new Error("Initials should be in format Surname N.M.");
		}

	}

	onSuccess();

}

export default class LabeledInput extends React.Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
	}

	validate(e){
		let val = this.refs.input.value.trim();
			
		validate(val, //текущее значение
			this.props.name, // значение для проверки
			function(){console.log("input tests passed")}, // onSuccess
			function(){
				this.refs.input.classList.add("input_wrong")
				}.bind(this) // onError
			); 


		this.props.onChange(val);
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

