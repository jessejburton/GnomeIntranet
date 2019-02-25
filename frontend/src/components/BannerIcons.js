import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BannerIcons() {
  return (
    <div className="banner-icons">
      <div className="banner__icon people dark">
        <span className="icon">
          <FontAwesomeIcon icon="user" />
        </span>
        <span>People</span>
      </div>
      <div className="banner__icon teams light">
        <span className="icon">
          <FontAwesomeIcon icon="users" />
        </span>
        <span>Teams</span>
      </div>
      <div className="banner__icon documents dark">
        <span className="icon">
          <FontAwesomeIcon icon="file-alt" />
        </span>
        <span>Documents</span>
      </div>
      <div className="banner__icon calendar light">
        <span className="icon">
          <FontAwesomeIcon icon="calendar-alt" />
        </span>
        <span>Calendar</span>
      </div>
      <div className="banner__icon training dark">
        <span className="icon">
          <FontAwesomeIcon icon="book" />
        </span>
        <span>Training</span>
      </div>
      <div className="banner__icon applications light">
        <span className="icon">
          <FontAwesomeIcon icon="th" />
        </span>
        <span>Applications</span>
      </div>
    </div>
  );
}
