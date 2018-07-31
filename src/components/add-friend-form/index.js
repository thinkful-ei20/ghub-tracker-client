import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../input';
import { sendFriendRequest, getPublicProfile } from '../../actions/users';
import { required, nonEmpty } from '../../validators';
import './add-friend-form.css';


export class SendFriendRequest extends React.Component {

    constructor() {
      super();

      this.state = {
        friendId: ''
      }
    }

    onSubmit(username) {

      return this.props.dispatch(getPublicProfile(username.username)).then(data => {
        this.props.dispatch(sendFriendRequest(data.id))
      });
    }

    render() 
    {
      console.log('USERID', this.state.friendId);
        let error;
        if (this.props.error) {
            error = (
                <div className="formError" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
          <div>
            <form

                className="addFriendForm"
                onSubmit={this.props.handleSubmit(username =>
                    this.onSubmit(username)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <button className="addFriendButton" disabled={this.props.pristine || this.props.submitting}>
                    Add
                </button>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addFriend',
    onSubmitFail: (errors, dispatch) => dispatch(focus('username'))
})(SendFriendRequest);
