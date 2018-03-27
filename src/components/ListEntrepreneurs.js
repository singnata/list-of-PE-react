import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ListEntrepreneurs extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    entrepreneurs: []
  };

  componentDidMount() {
    this.loadEntrepreneursList();
  }

  loadEntrepreneursList = () => {
    const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
    fetch(entrepreneursApi, null, this)
      .then(response => {
        if (response.ok) return response.json();
        this.setState({
          error: response.statusText,
          isLoaded: true
        });
      })
      .then(entrepreneurs => {
        this.setState({
          entrepreneurs,
          isLoaded: true
        });
      })
      .catch(error => console.log(error.message));
  };

  deleteEntrepreneur = (name, id) => {
    const entrepreneursApi = 'http://localhost:3000/entrepreneurs';
    const confirmMessage = 'Are You Sure You Want to Delete PE ';
    confirmAlert({
      title: 'Confirm to delete',
      childrenElement: () => <div>{`${confirmMessage}${name}`}</div>,
      confirmLabel: "Yes, I'm sure",
      cancelLabel: 'Cancel',
      onConfirm: () => {
        fetch(`${entrepreneursApi}/${id}`, {
          method: 'delete'
        })
          .then(() => this.loadEntrepreneursList())
          .catch(error => console.log(error.message));
      }
    });
  };

  render() {
    const { error, isLoaded, entrepreneurs } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="list">
          <ul>
            {entrepreneurs.map(entrepreneur => (
              <li key={entrepreneur.id}>
                {entrepreneur.lastName} {entrepreneur.firstName}
                <Link to={`/detail/${entrepreneur.id}`}>more details</Link>
                <button
                  onClick={() => this.deleteEntrepreneur(entrepreneur.lastName, entrepreneur.id)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
          <Link to="/new">add new entrepreneur</Link>
        </div>
      );
    }
  }
}

export default ListEntrepreneurs;