import React from 'react';
import ReactDom from 'react-dom';
import {connect} from "react-redux";

import LabeledInput from 'components/LabeledInput';
import { setField } from "actions";
import {setStorageItem, clearStorage} from "utilities/storageHelper.js";

import inputs from "scripts/inputs.js"

class Inputs extends React.Component {

	setField(name,val){
		this.props.setField(name,val);
	};

	render(){
		let props = this.props;
		let inputsList = inputs.map((input,index) => (
				<LabeledInput 
					caption={input.caption}
					name = {input.name}
					value={props[input.ref]}
					onChange={this.setField.bind(this)}
					key={index}
				/>
		))

		return(
				<div className="inputs">
					{inputsList}
					<button className="btn" onClick={this.clearStorage}>Очистить localStorage</button>
				</div>
			)
	}

	clearStorage() {
		clearStorage();
		alert("Уууииии, Вы почистили localStorage");
	}
}

const mapStateToProps = (state) => {
	return state.field;
}

const mapDispatchToProps = (dispatch) => {
	return {
		setField: (name,val) => {
			dispatch(setField(name,val));
			setStorageItem(name,val);
		}
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Inputs);