import React from 'react';

export default class Filter extends React.Component{

	constructor(props) {
		super(props);
		this.setFilter = this.setFilter.bind(this);
	}

	setFilter(){
		var val = this.textInput.value;
		if (val){
			this.props.libraryStore.dispatch({type: 'SET_FILTER', filter: val})
		} else{
			this.props.libraryStore.dispatch({type: 'REMOVE_FILTER'})
		}
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

Filter.propTypes = {
	libraryStore: React.PropTypes.object.isRequired
}
