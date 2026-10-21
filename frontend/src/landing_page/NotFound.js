import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container p-5 mb-5 text-center">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p className="text-muted mt-3">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-3">
          <Link to="/" className="btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
