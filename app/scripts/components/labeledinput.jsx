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

