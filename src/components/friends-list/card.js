// import React from 'react';

// import './card.css';

// export default (props) => {
//   // console.log(props.profile)
//   if (props.profile) {



//       let friendList = props.profile.map(function(currFriend, index) {
      
//         return (
//           <li key={index} className="friend"> {currFriend.friend.username} </li>
//         );
//       });
  

//     return (
//       <div className='friend-card'>
//         <h3 className="friendTitle">Friends</h3>
//         <ul>
//           {friendList}
//         </ul>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div className='friend-card'>
//         <p>Loading...</p>
//       </div>
//     )
//   }
// }

import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
// import { fetchUserProfile } from '../../actions/profile';
import { getFriends } from '../../actions/users';
import { getPublicProfile } from '../../actions/users';

import './card.css';

export class FriendCard extends React.Component {
  componentDidMount() {
    this.props.loadFriends();
  }

  onFriendClick(userName) {
    // console.log('CLICK SUCCESS',userName.friend.username);
    this.props.loadPuplicProfile(userName.friend.username);
  }

  render() {
    let friendList;
    console.log(this.props.friends)
    if(this.props.friends) {
      friendList = this.props.friends.map((currFriend, index) => {
      
        return (
          // <li key={index} className="friend"> <button  onClick={ () => console.log(this) }> {currFriend.friend.username} </button></li>
          <li key={index} className="friend"  onClick={ () => {this.onFriendClick(currFriend)} }> {currFriend.friend.username} </li>
        );
      });
    }


    return (
      <div className='friend-card'>
        <h3 className="friendTitle">Friends</h3>
        <ul>
          {friendList}
        </ul>
      </div>
    )
  }

}

// const mapStateToProps = state => ({
//   profile: state.profile.data,
//   loading: state.profile.loading,
//   error: state.profile.error
// });

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.friends.loading,
  error: state.friends.error
});

const mapDispatchToProps = dispatch => ({
  loadFriends: () => dispatch(getFriends()),
  loadPuplicProfile: (userName) => dispatch(getPublicProfile(userName))
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(FriendCard));


