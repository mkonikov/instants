import React from 'react';
import { connect } from 'react-redux';
import { likePost, unlikePost } from '../../actions/like_actions';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submittingLike: false, };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    if (this.state.submittingLike) {
      return null;
    } else if (this.props.hasLiked) {
        this.setState({submittingLike: true},
          () => this.props.unlikePost()
          .then(this.setState({submittingLike: false})));
    } else {
          this.setState({submittingLike: true},
          () => this.props.likePost()
          .then(this.setState({submittingLike: false})));
    }
  }

  render() {
    const likeClassName = (this.props.hasLiked) ? "fa fa-heart liked" : "fa fa-heart-o unliked";

    return(
      <i className={likeClassName} aria-hidden="true"
        onClick={this.handleLike}></i>
    );
  }

}


const mapStateToProps = ({ entities }, ownProps) => {
  return({
    hasLiked: entities.posts[ownProps.postId].hasLiked,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(likePost(ownProps.postId)),
  unlikePost: () => dispatch(unlikePost(ownProps.postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
