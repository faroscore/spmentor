import React from 'react';
import ReactDom from 'react-dom';
import {labeledInputValidation} from "utilities/validation.js";

import "./LabeledInput.sass"

export default class LabeledInput extends React.Component {

  constructor() {
    super();
    this.validate = this.validate.bind(this);
    this.validationFailed = this.validationFailed.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.state = {
      valid   : true,
      errorMsg: undefined
    };
  }

  validate(e) {
    let val = this.refs.input.value.trim();

    labeledInputValidation(val, this.props.name, this.validationFailed);

    this
      .props
      .onChange(this.props.refer,val);
  }

  validationFailed(msg) {
    this.setState({valid: false, errorMsg: msg});
  }

  clearErrors() {
    this.setState({valid: true, errorMsg: undefined});
  }

  render() {
    let {caption, name, value} = this.props;
    let {valid, errorMsg} = this.state;

    let className = valid
      ? ""
      : "input_wrong";

    return (
      <div className="input">
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
            onFocus={this.clearErrors}/>
          <span className="error">
            {errorMsg}
          </span>
        </label>
      </div>

    )
  }
}
