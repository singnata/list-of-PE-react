import React from 'react';
import FormContainer from './formComponents/FormContainer';

class NewEntrepreneur extends React.Component {
  state = {
    successMessage: ''
  };

  saveEntrepreneur = updatedEntrepreneur => {
    const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
    fetch(entrepreneursApi, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedEntrepreneur)
    })
      .then(() => {
        setTimeout(() => this.props.history.push('/'), 500);
      })
      .catch(error => console.log(error.message));
  };

  render() {
    const successMessage = this.state.successMessage;
    return (
      <div className="new">
        <div className={successMessage ? 'opacity' : ''}>
          <FormContainer saveEntrepreneur={this.saveEntrepreneur} />
        </div>
        <div className={`${'success-message'} ${successMessage ? '' : 'invisible'}`}>
          {successMessage}
        </div>
      </div>
    );
  }
}

export default NewEntrepreneur;