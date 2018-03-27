import React from 'react';
import Input from './Input';
import Formsy from 'formsy-react';

class FormContainer extends React.Component {
  state = {
    entrepreneur: {}
  };

  componentWillMount() {
    if (this.props.entrepreneur) {
      this.setState({ entrepreneur: this.props.entrepreneur });
    }
  }

  handleChange = event => {
    const updatedEntrepreneur = {
      ...this.state.entrepreneur,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.setState({ entrepreneur: updatedEntrepreneur });
  };

  saveEntrepreneur = () => {
    const newEntrepreneur = this.state.entrepreneur;
    this.props.saveEntrepreneur(newEntrepreneur);
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  render() {
    return (
      <Formsy
        onValidSubmit={this.saveEntrepreneur}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <Input
          inputType={'text'}
          title={'First name'}
          name="firstName"
          onChange={this.handleChange}
          value={this.state.entrepreneur.firstName || ''}
          placeholder={'Enter First Name'}
          validations="isWords"
          validationError="Should be only letters"
          required
        />
        <Input
          inputType={'text'}
          title={'Last name'}
          name="lastName"
          onChange={this.handleChange}
          value={this.state.entrepreneur.lastName || ''}
          placeholder={'Enter Last Name'}
          validations="isWords"
          validationError="Should be only letters"
          required
        />
        <Input
          inputType={'number'}
          title={'Code'}
          name="code"
          onChange={this.handleChange}
          value={this.state.entrepreneur.code || ''}
          placeholder={'Enter Code'}
          validations="isLength:10"
          validationError="Should be 10 numbers"
          required
        />
        <div className="form-group-description">
          <h3>Address</h3>
          <Input
            inputType={'number'}
            title={'Zip Code'}
            name="zipCode"
            onChange={this.handleChange}
            value={this.state.entrepreneur.zipCode || ''}
            placeholder={'Enter Zip Code'}
            validations="isLength:5"
            validationError="Should be 5 numbers"
            required
          />
          <div>
            <Input
              inputType={'text'}
              title={'Rigion'}
              name="region"
              onChange={this.handleChange}
              value={this.state.entrepreneur.region || ''}
              placeholder={'Enter Region'}
              // eslint-disable-next-line
              validations={{ matchRegexp: /^[a-zA-Z]+[\w\-][a-zA-Z]*$/ }}
              validationErrors={{ matchRegexp: 'Enter a valid value' }}
            />
          </div>
          <Input
            inputType={'text'}
            title={'City'}
            name="city"
            onChange={this.handleChange}
            value={this.state.entrepreneur.city || ''}
            placeholder={'Enter City'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^[a-zA-Z]+([\-\s][a-zA-Z]+)?$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
          <Input
            inputType={'text'}
            title={'Street'}
            name="street"
            onChange={this.handleChange}
            value={this.state.entrepreneur.street || ''}
            placeholder={'Enter Street'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^[1-9\s]{0,3}[a-zA-Z]+([\-\s][a-zA-Z]+)?$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
          <Input
            inputType={'text'}
            title={'Street Number'}
            name="streetNumber"
            onChange={this.handleChange}
            value={this.state.entrepreneur.streetNumber || ''}
            placeholder={'Enter Street Number'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^[1-9][0-9]?(([\-\/\s]?[a-zA-Z])|([\/][1-9]))?$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
          <Input
            inputType={'number'}
            title={'Apartment Number'}
            name="apartmentNumber"
            onChange={this.handleChange}
            value={this.state.entrepreneur.apartmentNumber || ''}
            placeholder={'Enter Apartment Number'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^[1-9][0-9]{0,2}$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
          />
        </div>
        <div className="form-group-description">
          <h3>Registration</h3>
          <Input
            inputType={'date'}
            title={'Date Of Registration'}
            name="dateOfRegistration"
            onChange={this.handleChange}
            value={this.state.entrepreneur.dateOfRegistration || ''}
            placeholder={'Enter Date Of Registration'}
            required
          />
          <Input
            inputType={'text'}
            title={'Number Of Registration'}
            name="registrationNumber"
            onChange={this.handleChange}
            value={this.state.entrepreneur.registrationNumber || ''}
            placeholder={'Enter Number Of Registration'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^[1-9][\s]?[0-9]{3}[\s]?[0]{3}[\s]?[0]{4}[\s]?[0-9]{6}$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
        </div>
        <div className="form-group-description">
          <h3>Account</h3>
          <Input
            inputType={'text'}
            title={'Bank'}
            name="bank"
            onChange={this.handleChange}
            value={this.state.entrepreneur.bank || ''}
            placeholder={'Enter Bank'}
            validations="isWords"
            validationError="Should be only letters"
            required
          />
          <Input
            inputType={'number'}
            title={'Account'}
            name="account"
            onChange={this.handleChange}
            value={this.state.entrepreneur.account || ''}
            placeholder={'Enter Account'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^2600[0-9]{6,12}$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
          <Input
            inputType={'number'}
            title={'MFO'}
            name="mfo"
            onChange={this.handleChange}
            value={this.state.entrepreneur.mfo || ''}
            placeholder={'Enter MFO'}
            // eslint-disable-next-line
            validations={{ matchRegexp: /^3[0-9]{5}$/ }}
            validationErrors={{ matchRegexp: 'Enter a valid value' }}
            required
          />
        </div>
        <div className="form-button">
          <button 
            type="submit" 
            disabled={!this.state.canSubmit} 
            className="button-update"
          >
            update
          </button>
        </div>
      </Formsy>
    );
  }
}

export default FormContainer;