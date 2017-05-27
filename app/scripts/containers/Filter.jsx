import React from 'react';
import {withRouter} from 'react-router-dom';
const queryString = require('query-string');

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.history   = this.props.history;
        this.setFilter = this
            .setFilter
            .bind(this);
    }

    setFilter() {
        var val = this.textInput.value;
        if (val) {
            this
                .history
                .replace("/?str=" + val);
        } else {
            this
                .history
                .replace("/")
        }
    }

    render() {
        let defaultVal = queryString.parse(location.search).str;
        return (
            <div>
                <input
                    ref={(node) => this.textInput = node}
                    placeholder="Введите фильтр"
                    type="text"
                    defaultValue={defaultVal}
                    onChange={this.setFilter}/>
            </div>


        )
    }
}

export default withRouter(Filter);
