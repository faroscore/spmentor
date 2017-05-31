import React from 'react';
import ReactDom from 'react-dom';
import {connect} from "react-redux";

import LabeledInput from 'components/LabeledInput';
import { setField } from "actions";
import {setStorageItem, clearStorage} from "utilities/storageHelper.js";

import inputs from "scripts/inputs"

class Inputs extends React.Component {

	constructor(props) {
		super(props);
		this.fieldChanged = this.fieldChanged.bind(this);
	}

	fieldChanged(ref,val){
		this.props.setField(ref,val);
	};

	render(){
		let props = this.props;
		let inputsList = inputs.map((input,index) => (
				<LabeledInput 
					caption={input.caption}
					name = {input.name}
					refer = {input.ref}
					value={props[input.ref]}
					onChange={this.fieldChanged}
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
		setField: (ref,val) => {
			dispatch(setField(ref,val));
			setStorageItem(ref,val);
		}
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Inputs);