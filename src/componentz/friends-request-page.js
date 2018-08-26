import React from 'react';
import Avatar from './friends-list.png'
import './friends-request-page.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getFriends } from '../actions/users';
import './friends-list.css';

// export default function FriendsRequestPage(props) {
//   console.log(props)
//   return (
//       <main>
//         <div className="friends-request-page">
//         <h2>Friend Requests</h2>
//         <hr />

//         {/* <FriendRequestPageForm /> */}

//         </div>
//       </main>
//     )
// }

export class FriendsRequestPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFriends());
  }

  render() {

    if (!localStorage.authToken) {
      return <Redirect to="/login" />;
    }
    
    

    if (!this.props.friends) {
      return null;
    }


    const chips = this.props.friends.map((friend, index) => {
      if(friend.status === 'pending') {
        return (
          <div className="chip" key={index}>
          <img src={Avatar} alt="Person" width="96" height="96" />
          <span>{friend.friend.username}</span>
          {/* <button value={friend} onClick={() => props.onSendFriendChallenge(friend.friend)}>Challenge</button> */}
        </div>
        );
      }
  
      });

    return (
      <section className="friends">
      <h3>Friend Requests</h3>
      {chips}
    </section>
    );
  }

}


const mapStateToProps = state => ({
  friends: state.friends.friends
});

export default connect(mapStateToProps)(FriendsRequestPage);