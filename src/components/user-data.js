import React from 'react';
import Details from './details';
import FriendList from './friends-list';

import data from '../mock_data/protected-data'

import { connect } from 'react-redux'

export const UserData = props => {
  return (
    <div className="userData">
      <h2>User Data</h2>
      <Details commits={props.details} />
      <FriendList friends={props.friends} />
    </div>
  )
}

const mapStateToProps = state => ({
  details: data.commits,
  friends: state.protectedData.data,
})

export default connect(mapStateToProps)(UserData);