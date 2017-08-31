import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, clearSearchUsersResult } from '../../../actions/search_actions';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};

    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  search(e) {
    e.preventDefault();
  }

  handleInput(e) {
    if (e.currentTarget.value.length > 0) {
      this.setState({query: e.currentTarget.value},
        () => this.props.searchUsers(this.state.query));
    } else {
      this.setState({query: e.currentTarget.value});
      this.props.clearSearch();
    }
  }


  render() {
    return(
      <form onSubmit={this.search}>
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
