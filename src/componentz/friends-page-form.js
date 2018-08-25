import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { sendFriendRequest, getPublicProfile } from '../actions/users';
import { required, nonEmpty } from '../validators';

export class FriendForm extends React.Component {
  onSubmit(value) {
    return this.props.dispatch(getPublicProfile(value.usernameFriend))
      .then(data => {
        let friendId = data.id;
        return this.props.dispatch(sendFriendRequest(friendId));
      })
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (

      
      <form 
        className="add-friend-form" 
        onSubmit={this.props.handleSubmit(values => 
          this. onSubmit(values)
        )}>
        {error}
        <label htmlFor="usrname">Github username</label>
        <Field
          component={Input}
          type="text"
          name="usernameFriend"
          id="usernameFriend"
          validate={[required, nonEmpty]}
          placeholder="Enter Name"
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Add
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'add friend',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add friend', 'username'))
})(FriendForm);