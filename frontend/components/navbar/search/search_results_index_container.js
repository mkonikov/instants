import { connect } from 'react-redux';
import SearchResultsIndex from './search_results_index';
import { selectUsers } from '../../../reducers/selectors';

const mapStateToProps = (state) => {

  let userResults;

  if (state.ui.usersSearchResult) {
    userResults = selectUsers(state.ui.usersSearchResult, state);
  }

  return ({
    userResults,
  });
};

export default connect(mapStateToProps)(SearchResultsIndex);
