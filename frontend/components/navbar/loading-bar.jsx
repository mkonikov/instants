import React from 'react';
import { connect } from 'react-redux';

class LoadingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: 10};
  }

  componentDidMount() {
    this.timeouts = [
      setTimeout(() => this.setState({width: 12}), 100),
      setTimeout(() => this.setState({width: 18}), 150),
      setTimeout(() => this.setState({width: 20}), 300),
      setTimeout(() => this.setState({width: 25}), 500),
      setTimeout(() => this.setState({width: 30}), 150),
      setTimeout(() => this.setState({width: 35}), 200),
      setTimeout(() => this.setState({width: 40}), 250),
      setTimeout(() => this.setState({width: 45}), 300),
      setTimeout(() => this.setState({width: 50}), 350),
      setTimeout(() => this.setState({width: 60}), 400),
      setTimeout(() => this.setState({width: 65}), 415),
      setTimeout(() => this.setState({width: 70}), 430),
      setTimeout(() => this.setState({width: 75}), 460),
      setTimeout(() => this.setState({width: 80}), 480),
      setTimeout(() => this.setState({width: 83}), 500),
      setTimeout(() => this.setState({width: 86}), 550),
      setTimeout(() => this.setState({width: 89}), 600),
      setTimeout(() => this.setState({width: 92}), 700),
      setTimeout(() => this.setState({width: 94}), 800),
      setTimeout(() => this.setState({width: 96}), 900),
      setTimeout(() => this.setState({width: 100}), 1000)
    ];
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  render() {
    let loadingRender;

    let loadingWidth  = {
      width: `${this.state.width}%`,
      transition: "width 0.2s ease",
    };

    if (this.props.loading) {
      loadingRender = (<div id="loading-bar" style={loadingWidth}></div>);
    } else {
      loadingRender = ("");
    }
    return(
      <div>
        {loadingRender}
      </div>
    );
  }

}

const mapStateToProps = ({ui}) => {
  return ({
  loading: ui.loading,
})};

export default connect(mapStateToProps)(LoadingBar);
