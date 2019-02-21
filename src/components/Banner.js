import React from 'react';
import BannerNews from './BannerNews';
import BannerIcons from './BannerIcons';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__grid">
        <div className="banner__logo">
          <div className="banner__logo-container">
            <img src="images/gnome_logo.png" />
          </div>
        </div>
        <BannerNews />
        <BannerIcons />
      </div>
    </div>
  );
}
