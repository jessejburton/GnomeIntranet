import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import posed from 'react-pose';
import { FadeInLeft, RingBell } from '../helpers/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Weather from './Weather';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brandIsVisible: false,
      ringBell: false
    };

    this.showBrand = this.showBrand.bind(this);
    this.ringBell = this.ringBell.bind(this);
  }

  componentDidMount() {
    setTimeout(this.showBrand, 1000);
  }

  showBrand() {
    this.setState({ brandIsVisible: true });
  }

  ringBell() {
    this.setState({ ringBell: true });
  }

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
            Jesse
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

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => alert('hello')
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
