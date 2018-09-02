import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { sendFriendRequest, getPublicProfile } from '../actions/users';
import { required, nonEmpty } from '../validators';
import './friends-page-form.css';


export class FriendForm extends React.Component {
  onSubmit(value) {
    return this.props.dispatch(getPublicProfile(value.usernameFriend))
      .then(data => {
        let friendId = data.id;
        return this.props.dispatch(sendFriendRequest(friendId));
      })
  }

  render() {

    let successMessage;

    if (this.props.submitSucceeded) {
        successMessage = (
            <div className="message message-success elementToFadeInAndOut">
                Friend Request Sent
            </div>
        );
    }

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
            <div className="message message-error elementToFadeInAndOut">{this.props.error}</div>
        );
    }

    return (

      
      <form 
        className="addFriendForm" 
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}>

        {successMessage}
        {errorMessage}

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