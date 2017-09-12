import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {

  render() {

    if (this.props.loading) return null;
    return(
      <footer>
        <div id="links">
          <a href="http://github.com/mkonikov">GitHub</a>
          <a href="http://mkonikov.com">Portfolio</a>
          <a href="https://www.linkedin.com/in/mkonikov/">LinkedIn</a>
        </div>
        <small>
          &copy; Mendel Konikov
        </small>
      </footer>
    );
  }
}

const mapStateToProps = ({ ui }) => ({
  loading: ui.loading,
});


export default connect(mapStateToProps)(Footer);
