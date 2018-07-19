import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Leaderboard } from '../components/leaderboard'
import data from '../mock_data/leaderboard'

export default storiesOf('Leaderboard', module)
  .add('empty', () => <Leaderboard />)
  .add('with one item', () => <Leaderboard data={[data[0]]} />)
  .add('with many items', () => <Leaderboard data={data} />)
