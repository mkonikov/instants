import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, clearSearchUsersResult } from '../../../actions/search_actions';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", enqueued: false,};

    this.fireSearch = this.fireSearch.bind(this);
    this.enqueueSearch = this.enqueueSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  fireSearch() {
    if (this.state.query.length > 0) {
      this.props.searchUsers(this.state.query);
    }
    this.setState({enqueued: false});
  }

  enqueueSearch() {
    if (!this.state.enqueued) {
      this.setState({enqueued: true},
        () => {
          this.enqueuedSearchId = window.setTimeout(this.fireSearch, 500);
        });
    } else {
      window.clearTimeout(this.enqueuedSearchId);
      this.enqueuedSearchId = window.setTimeout(this.fireSearch, 500);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({query: ""});
    }
  }

  handleInput(e) {
    e.preventDefault();
    if (e.currentTarget.value.length > 0) {
      this.setState({query: e.currentTarget.value},
      this.enqueueSearch);
    } else {
      this.setState({query: e.currentTarget.value});
      this.props.clearSearch();
    }
  }

  handleBlur() {
    setTimeout(this.props.clearSearch, 200);
  }

  render() {
    return(
      <form onSubmit={(e) => e.preventDefault()}>
        <input onBlur={this.handleBlur} onChange={this.handleInput}
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

export default withRouter(connect(null, mapDispatchToProps)(SearchForm));
