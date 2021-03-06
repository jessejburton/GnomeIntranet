import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import classnames from 'classnames';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      console.log('pushing');
      this.props.history.push('/');
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h4>
          <b>Login</b> below
        </h4>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('', {
                invalid: errors.email || errors.emailnotfound
              })}
            />
            <label htmlFor="email">Email</label>
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>
          <div className="input-field">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('', {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
            <label htmlFor="password">Password</label>
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div className="button-group">
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem'
              }}
              type="submit"
              className="button button--primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
