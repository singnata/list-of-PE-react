import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <h3>the page you are looking for doesn't exist</h3>
        <Link to="/">Return to List</Link>
      </div>
    );
  }
}

export default NotFound;
