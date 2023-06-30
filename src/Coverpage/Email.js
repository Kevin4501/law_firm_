import React from 'react';
import './Email.css';
function Email(props) {
    return (
        <div>
              <div className="email">
            <form className="search-wrapper cf">
            <input type="text" placeholder="Enter your email..." />
            <button type="submit">Lets Talk</button>
            </form>
            </div>
        </div>
    );
}

export default Email;