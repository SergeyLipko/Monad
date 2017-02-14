import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({ session }) => ({
  user: session.authenticatedUser
});

class Home extends React.Component {
  render() {

    return (
      <div>
        {this.props.user && this.props.user.login}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home);