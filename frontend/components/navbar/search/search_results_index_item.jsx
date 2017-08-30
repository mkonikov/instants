import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsIndexItem = ({ user }) => {
  return(
      <Link to={`/${user.username}`}>
        <img src={user.avatarUrl} />
        <div>
          <div className="username">
            {user.username}
          </div>
          <div className="fullname">
            {user.name}
          </div>
        </div>
      </Link>
  );
};

export default SearchResultsIndexItem;
