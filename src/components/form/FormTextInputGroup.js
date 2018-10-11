import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

const FormTextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classNames('form-control form-control-custom contact-data-item',{'is-invalid': error})}
        // className="form-control contact-data-item"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback invalid-feedback-custom">{error}</div>}

    </div>
  );
};

FormTextInputGroup.defaultProps = {
  type: 'text'
}

FormTextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default FormTextInputGroup;
