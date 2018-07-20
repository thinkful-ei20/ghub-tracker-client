import React from 'react';
import Details from '../components/details';

import { storiesOf } from '@storybook/react';
import data from '../mock_data/protected-data';

const details = data.commits;
console.log(details)

export default storiesOf('Details', module)
  .add('empty', () => <Details />)
  .add('with all fields', () => <Details details={details}/>)
  