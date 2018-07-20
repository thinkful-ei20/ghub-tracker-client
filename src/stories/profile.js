import React from 'react';
import Profile from '../components/profile';

import { storiesOf } from '@storybook/react';
import data from '../mock_data/public_profile_data';

const profileData = data.commits;

export default storiesOf('Profile', module)
  .add('empty', () => <Profile />)
  .add('with all fields', () => <Profile commits={profileData}/>)