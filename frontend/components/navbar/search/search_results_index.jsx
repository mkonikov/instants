import React from 'react';
import SearchResultsIndexItem from './search_results_index_item';

const SearchResultsIndex = ({ userResults }) => {

  if (!userResults) return null;
  if (userResults.length < 1) return null;

  const users = userResults.map((user) => {
    return(
      <li key={user.id}>
        <SearchResultsIndexItem user={user} />
      </li>
    );
  });



  return(
    <div id="result-container">
      <div className="triangle"></div>
      <ul id="search-results">
        {users}
      </ul>
    </div>
  );


};

export default SearchResultsIndex;
