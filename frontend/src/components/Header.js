import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import posed from 'react-pose';
import { FadeInLeft, RingBell } from '../helpers/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Weather from './Weather';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name_first: '',
        name_last: '',
        email: ''
      }
    };
  }

  componentWillMount() {
    const userId = this.props.auth.user.id;

    // Set current user
    axios
      .get(`/api/users/${userId}`)
      .then((res) => {
        const user = {
          name_first: res.data.name_first,
          name_last: res.data.name_last,
          email: res.data.email
        };
        this.setState({
          user
        });
        dispatch(setCurrentUser(user));
      })
      .catch((err) => {
        return {
          ...this.state,
          errors: err
        };
      });
  }

  componentDidMount() {}

  render() {
    return (
      <header className="header">
        <div className="header__brand">
          <span className="header__link-underline">My Company</span>
        </div>
        <div className="header__links">
          <div className="notifications header__icon">
            <RingBell>
              <FontAwesomeIcon icon="bell" />
            </RingBell>
          </div>
          <div className="profile header__link-underline">
            <span className="image__container header__profile-image">
              <img src="images/profile.jpg" />
            </span>
            {this.state.user.name_first}
          </div>
          <div className="status header__link-underline">
            <span className="status__indicator active" />
            In The Office
          </div>
          <div>
            <Weather />
          </div>
          <div className="search">
            <form>
              <input
                className="search__input"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button className="search__button" type="submit">
                <FontAwesomeIcon icon="search" />
              </button>
            </form>
          </div>
          <div className="settings">
            <span className="header__icon">
              <FontAwesomeIcon icon="cogs" />
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  undefined
)(Header);
