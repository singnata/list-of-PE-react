import React from 'react';
import { Link } from 'react-router-dom';

class DetailsEntrepreneur extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    entrepreneur: {}
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

  render() {
    const { error, isLoaded, entrepreneur } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="details">
          <div className="details-item">
            <span className="details-item-title">First Name: </span>
            {entrepreneur.firstName}
          </div>
          <div className="details-item">
            <span className="details-title">Last Name: </span>
            {entrepreneur.lastName}
          </div>
          <div className="details-item">
            <span className="details-item-title">Code: </span>
            {entrepreneur.code}
          </div>
          <div className="details-title">Address</div>
          <div className="details-item">
            <span className="details-item-title">Zip Code: </span>
            {entrepreneur.zipCode}
          </div>
          <div className={`${'details-item'} ${entrepreneur.region ? '' : 'invisible'}`}>
            <span className="details-item-title">Region: </span>
            {entrepreneur.region}
          </div>
          <div className="details-item">
            <span className="details-item-title">City: </span>
            {entrepreneur.city}
          </div>
          <div className="details-item">
            <span className="details-item-title">Street: </span>
            {entrepreneur.street}
          </div>
          <div className="details-item">
            <span className="details-item-title">Street Number: </span>
            {entrepreneur.streetNumber}
          </div>
          <div className={`${'details-item'} ${entrepreneur.apartmentNumber ? '' : 'invisible'}`}>
            <span className="details-item-title">Apartment Number: </span>
            {entrepreneur.apartmentNumber}
          </div>
          <div className="details-title">Registration</div>
          <div className="details-item">
            <span className="details-item-title">Registration Number: </span>
            {entrepreneur.registrationNumber}
          </div>
          <div className="details-item">
            <span className="details-item-title">Registration Number: </span>
            {new Date(entrepreneur.dateOfRegistration).toLocaleDateString()}
          </div>
          <div className="details-title">Account</div>
          <div className="details-item">
            <span className="details-item-title">Account Number: </span>
            {entrepreneur.account}
          </div>
          <div className="details-item">
            <span className="details-item-title">Bank: </span>
            {entrepreneur.bank}
          </div>
          <div className="details-item">
            <span className="details-item-title">Bank MFO: </span>
            {entrepreneur.mfo}
          </div>
          <Link to={`/edit/${entrepreneur.id}`}>edit</Link>
        </div>
      );
    }
  }
}

export default DetailsEntrepreneur;
