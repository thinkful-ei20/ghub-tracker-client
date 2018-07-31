import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import { fetchUserProfile } from '../actions/profile';
import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.props.loadProfile();
  }

  // render() {
  //   return (
  //     <div className="dashboard">
  //       <div className="dashboard-username">
  //         Username: {this.props.profile.login}
  //       </div>
  //       <div className="dashboard-name">Name: {this.props.profile.firstname}</div>
  //       <div className="dashboard-protected-data">
  //         Protected data: {this.props.profile.email}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div class="row">
        <div class="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div class="fakeimg" style={{ height: "200px" }}>Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div class="fakeimg" style={{ height: "60px" }}>Image</div><br />
          <div class="fakeimg" style={{ height: "60px" }}>Image</div><br />
          <div class="fakeimg" style={{ height: "60px" }}>Image</div>
        </div>
        <div class="main">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg" style={{ height: "200px" }}>Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div class="fakeimg" style={{ height: "200px" }}>Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.data,
  loading: state.profile.loading,
  error: state.profile.error
});

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(fetchUserProfile())
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));