import React from 'react';

const Features = () => {
  return (
    <section id="features" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Discover the App</h2>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">create</i>
            <h5>Calorie Counter</h5>
            <p>Benefit from the fastest and most user-friendly calorie counter you’ve ever downloaded.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">devices</i>
            <h5>Track food</h5>
            <p>Gain access to an incredible database of recipes, tailored to your personal preferences.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">build</i>
            <h5>Daily Tips</h5>
            <p>Get daily tips to reach your goals easier.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">mood</i>
            <h5>Happy Clients</h5>
            <p>Thousands of poeple around the world enjoy from the benefits from our apps and are deeply happy about it!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
