import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, clearSearchUsersResult } from '../../../actions/search_actions';
import { debounce } from 'lodash';



class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};

    this.fireSearch = this.fireSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  fireSearch() {
    this.props.searchUsers(this.state.query);
  }


  handleInput(e) {
    if (e.currentTarget.value.length > 0) {
      this.setState({query: e.currentTarget.value},
      this.fireSearch);
    } else {
      this.setState({query: e.currentTarget.value});
      this.props.clearSearch();
    }
  }


  render() {
    return(
      <form onSubmit={(e) => e.preventDefault}>
        <input onBlur={this.props.clearSearch} onChange={this.handleInput}
          placeholder="Search" value={this.state.query} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchUsers: (query) => dispatch(searchUsers(query)),
    clearSearch: () => dispatch(clearSearchUsersResult()),
  });
};

export default connect(null, mapDispatchToProps)(SearchForm);
