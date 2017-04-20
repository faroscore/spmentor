import React from 'react';
import ReactDom from 'react-dom';
import { labeledInputValidation } from "../utilities/validation.js";

export default class LabeledInput extends React.Component {

	constructor() {
		super();
		this.validate = this.validate.bind(this);
		this.state = {
			errorMsg: undefined
		};
	}

	validate(e){
		let val = this.refs.input.value.trim();
			
		labeledInputValidation(val, //текущее значение
			this.props.name, // значение для проверки
			null, // onSuccess
			function(msg){
				var error = document.createElement("span");
				this.setState({errorMsg: msg});
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
							className={(this.state.errorMsg) ? "input_wrong" : {}}
							onFocus={
								(e)=>{
									if (this.state.errorMsg)
										this.setState({errorMsg: undefined})
									
								}}
							/>
						{ (this.state.errorMsg) ? 
							<span className="labeled-input--error">
								{this.state.errorMsg}
							</span> : "" }
					</label>
				</div>
			)
	}
}

