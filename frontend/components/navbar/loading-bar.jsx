import React from 'react';
import { connect } from 'react-redux';

class LoadingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: 10};
  }

  componentDidMount() {
    this.timeouts = [
      setTimeout(() => this.setState({width: 12}), 10),
      setTimeout(() => this.setState({width: 18}), 25),
      setTimeout(() => this.setState({width: 20}), 50),
      setTimeout(() => this.setState({width: 25}), 100),
      setTimeout(() => this.setState({width: 30}), 150),
      setTimeout(() => this.setState({width: 35}), 200),
      setTimeout(() => this.setState({width: 40}), 250),
      setTimeout(() => this.setState({width: 45}), 300),
      setTimeout(() => this.setState({width: 50}), 350),
      setTimeout(() => this.setState({width: 60}), 400),
      setTimeout(() => this.setState({width: 65}), 450),
      setTimeout(() => this.setState({width: 70}), 2000),
      setTimeout(() => this.setState({width: 75}), 3000),
      setTimeout(() => this.setState({width: 80}), 4000),
      setTimeout(() => this.setState({width: 83}), 5000),
      setTimeout(() => this.setState({width: 86}), 6000),
      setTimeout(() => this.setState({width: 89}), 7000),
      setTimeout(() => this.setState({width: 92}), 8000),
      setTimeout(() => this.setState({width: 94}), 9000),
      setTimeout(() => this.setState({width: 96}), 9500),
      setTimeout(() => this.setState({width: 98}), 10000)
    ];
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  render() {
    let loadingRender;

    let loadingWidth  = {
      width: `${this.state.width}%`,
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
