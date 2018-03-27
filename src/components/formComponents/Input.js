import React from 'react';
import { withFormsy } from 'formsy-react';

class Input extends React.Component {
  render() {
    const {
      getErrorMessage,
      isPristine,
      showRequired,
      title,
      name,
      inputType,
      getValue,
      onChange,
      placeholder,
      isRequired,
    } = this.props; 
    
    const shouldHaveRequiredClass = !isPristine() && showRequired();
  
    return (
      <div className="form-group">
        <div className={shouldHaveRequiredClass ? 'required' : ''}>
          <label className="form-label">{title}</label>
          <input
            className={`${'form-input'} ${getErrorMessage() ? 'error-input' : ''}`}
            name={name}
            type={inputType}
            value={getValue()}
            onChange={onChange}
            placeholder={placeholder}
          />
          <span className="isrequired">{isRequired() ? '*' : ''}</span>
          <span className="error-message">{getErrorMessage()}</span>
          <span className="error-required">required</span>
        </div>
      </div>
    );
  }
}

export default withFormsy(Input);
