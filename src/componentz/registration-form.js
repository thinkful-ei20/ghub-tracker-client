import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import './login-form.css';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');


export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstname, lastname } = values;
    const user = { username, password, firstname, lastname };
    console.log(user);
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor="firstName">First name</label>
        <Field component={Input} type="text" name="firstname" placeholder="Enter First Name" />
        <label htmlFor="lastName">Last name</label>
        <Field component={Input} type="text" name="lastname" placeholder="Enter Last Name" />
        <label htmlFor="username">GitHub Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          placeholder="Enter GitHub Username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="Enter Password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          placeholder="Repeat Password"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
                </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);