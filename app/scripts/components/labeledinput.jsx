import React from 'react';
import ReactDom from 'react-dom';
import { labeledInputValidation } from "../utilities/validation.js";

export default class LabeledInput extends React.Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
	}

	validate(e){
		let val = this.refs.input.value.trim();
			
		labeledInputValidation(val, //текущее значение
			this.props.name, // значение для проверки
			null, // onSuccess
			function(msg){
				var error = document.createElement("span");
				error.textContent = msg;
				error.classList.add("labeled-input--error");
				this.refs.input.parentElement.appendChild(error);
				this.refs.input.classList.add("input_wrong");
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
							defaultValue={this.props.value}
							onFocus={
								(e)=>{
									if (e.target.classList.contains("input_wrong")){
										e.target.classList.remove("input_wrong");
										e.target.parentElement.querySelector(".labeled-input--error").remove()
									}
									
								}}
							/>
					</label>
				</div>
			)
	}
}

