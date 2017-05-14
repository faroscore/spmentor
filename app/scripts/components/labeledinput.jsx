import React from 'react';
import ReactDom from 'react-dom';
import { labeledInputValidation } from "../utilities/validation.js";

export default class LabeledInput extends React.Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
		this.validationSucceed = this.validationSucceed.bind(this);
		this.validationFailed = this.validationFailed.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.state = {
			errorMsg: undefined,
			error: false
		};
	}

	validate(e){
		let val = this.refs.input.value.trim();
			
		labeledInputValidation(val, //текущее значение
			this.props.name, // значение для проверки
			this.validationSucceed, // onSuccess
			this.validationFailed // onError
			); 


		this.props.onChange(val);
	}

	validationSucceed(){

	}

	validationFailed(msg){
		this.setState({errorMsg: msg, error: true});
	}

	clearErrors(){
		this.setState({errorMsg: undefined, error: false});
	}

	render(){
		let {caption,name,value} = this.props;
		let {error,errorMsg} = this.state;

		let className = error ? "input_wrong" : "";

		return(
				<div className="labeled-input">
					<label>
						<span>{caption}</span>
						<input 
							ref="input" 
							name={name} 
							placeholder={caption} 
							type="text" 
							onBlur={this.validate}
							defaultValue={value}
							className={className}
							onFocus={this.clearErrors}
							/>
							<span className="labeled-input--error">
								{errorMsg}
							</span> 
					</label>
				</div>
			)
	}
}

