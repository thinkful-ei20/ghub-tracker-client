import React from 'react';
import FriendsList from '../components/friends-list';

import { storiesOf } from '@storybook/react';
import data from '../mock_data/protected-data';

const friends = data.friends;

export default storiesOf('FriendsList', module)
  .add('empty', () => <FriendsList />)
  .add('with one item', () => <FriendsList friends={[friends[0]]}/>)
  .add('with many items', () => <FriendsList friends={friends} />)
  