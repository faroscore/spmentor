import React from 'react';
import ReactDom from 'react-dom';
import {connect} from "react-redux";

import LabeledInput from '../components/LabeledInput.jsx';
import { setField } from "../actions";
import {setStorageItem} from "../utilities/storageHelper.js";


let inputs = [{
    caption: "Должность принимающего заявление",
    name: "director_role",
    ref: "director_role"
}, {
    caption: "Фирма",
    name: "company",
    ref: "company"
}, {
    caption: "ФИО принимающего заявление в род.падеже",
    name: "director_name",
    ref: "director_name"
}, {
    caption: "Ваше ФИО",
    name: "name",
    ref: "from"
}, {
    caption: "Название отдела",
    name: "section",
    ref: "section"
}, {
    caption: "Должность",
    name: "role",
    ref: "role"
}, {
    caption: "Дата приема на работу",
    name: "date",
    ref: "date"
}, {
    caption: "Ваш email",
    name: "email",
    ref: "email"
}];

class Inputs extends React.Component {
	render(){
		let props = this.props;
		let inputsList = inputs.map(function(input,index){
			return <LabeledInput 
								caption={input.caption}
								name = {input.name}
								value={props[input.ref]}
								onChange={
									(val) =>
										props.setField(input.ref,val)
									}
								key={index}
							/>
		})
		return (
						<div className="inputs">
							{inputsList}

							<button className="btn" onClick={this.clearStorage}>Очистить localStorage</button>

						</div>
					)
	}
	clearStorage() {
		localStorage.clear();
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