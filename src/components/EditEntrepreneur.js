import React from 'react';
import FormContainer from './formComponents/FormContainer';

class EditEntrepreneur extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    entrepreneur: {},
    successMessage: ''
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
    fetch(`${entrepreneursApi}/${id}`)
      .then(response => {
        if (response.ok) return response.json();
        this.setState({
          error: response.statusText,
          isLoaded: true
        });
      })
      .then(entrepreneur => {
        this.setState({
          entrepreneur,
          isLoaded: true
        });
      })
      .catch(error => console.log(error.message));
  }

  saveEntrepreneur = updatedEntrepreneur => {
    const id = this.state.entrepreneur.id;
    const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
    fetch(`${entrepreneursApi}/${id}`, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }),
      body: JSON.stringify(updatedEntrepreneur)
    })
      .then(() => {
        this.setState({ successMessage: 'Changes saved' });
        setTimeout(() => this.props.history.push('/'), 2000);
      })
      .catch(error => console.log(error.message));
  };

  render() {
    const { successMessage, error, isLoaded, entrepreneur } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="edit">
          <div className={successMessage ? 'opacity' : ''}>
            <FormContainer 
              saveEntrepreneur={this.saveEntrepreneur} 
              entrepreneur={entrepreneur} 
            />
          </div>
          <div className={`${'success-message'} ${successMessage ? '' : 'invisible'}`}>
            {successMessage}
          </div>
        </div>
      );
    }
  }
}

export default EditEntrepreneur;