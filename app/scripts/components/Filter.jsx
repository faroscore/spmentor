import React from 'react';

export default class Filter extends React.Component{

	constructor(props) {
		super(props);
		this.setFilter = this.setFilter.bind(this);
	}

	setFilter(){
		var val = this.textInput.value;
		this.props.setFilter(val);
	}

	render(){
		return (
			<div>
				<input
					ref={(node) => this.textInput = node}
					placeholder="Введите фильтр"
					type="text"
					onChange={this.setFilter}
				/>
			</div>
		)
	}
}

