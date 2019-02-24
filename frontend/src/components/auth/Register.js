import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';
import classnames from 'classnames';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name_first: '',
      name_last: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name_first: this.state.name_first,
      name_last: this.state.name_last,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state; // Same as errors = this.state.errors;
    return (
      <div>
        <h4>
          <b>Register</b> below
        </h4>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-group input-group-2">
            <div className="input-field">
              <input
                onChange={this.onChange}
                value={this.state.name_first}
                error={errors.name_first}
                id="name_first"
                type="text"
                className={classnames('', {
                  invalid: errors.name_first
                })}
              />
              <label htmlFor="name_last">First Name</label>
              <span className="red-text">{errors.name_first}</span>
            </div>
            <div className="input-field">
              <input
                onChange={this.onChange}
                value={this.state.name_last}
                error={errors.name_last}
                id="name_last"
                type="text"
                className={classnames('', {
                  invalid: errors.name_last
                })}
              />
              <label htmlFor="name_first">Last Name</label>
              <span className="red-text">{errors.name_last}</span>
            </div>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('', {
                invalid: errors.email
              })}
            />
            <label htmlFor="email">Email</label>
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('', {
                invalid: errors.password
              })}
            />
            <label htmlFor="password">Password</label>
            <span className="red-text">{errors.password}</span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames('', {
                invalid: errors.password2
              })}
            />
            <label htmlFor="password2">Confirm Password</label>
            <span className="red-text">{errors.password2}</span>
          </div>
          <div className="button-group">
            <button type="submit" className="button button--primary">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
