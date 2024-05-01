import React from 'react'

import PropTypes from 'prop-types'

import './form.css'

const Form = (props) => {
  return (
    <div className="form-form">
      <div className="form-inputs">
        <div className="form-input">
          <span className="form-text TextRegularNormal">
            <span>First Name</span>
          </span>
          <div className="form-type-default"></div>
        </div>
        <div className="form-input1">
          <span className="form-text2 TextRegularNormal">
            <span>Last Name</span>
          </span>
          <div className="form-type-default1"></div>
        </div>
      </div>
      <div className="form-inputs1">
        <div className="form-input2">
          <span className="form-text4 TextRegularNormal">
            <span>Email</span>
          </span>
          <div className="form-type-default2"></div>
        </div>
        <div className="form-input3">
          <span className="form-text6 TextRegularNormal">
            <span>Phone Number</span>
          </span>
          <div className="form-type-default3"></div>
        </div>
      </div>
      <span className="form-text8 TextRegularNormal">{props.text}</span>
      <div className="form-type-default4"></div>
      <div className="form-type-default5"></div>
      <div className="form-type-default6"></div>
    </div>
  )
}

Form.defaultProps = {
  text: 'Adress',
}

Form.propTypes = {
  text: PropTypes.string,
}

export default Form
