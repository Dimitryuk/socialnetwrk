import React from 'react';
import { withRouter } from 'react-router';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = state => ({ profile: state.profilePage.profile });
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent,
);
