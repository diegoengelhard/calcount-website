import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?t=st=1657262721~exp=1657263321~hmac=b87160a0a0adc322f85428a12bb8cff80dbf66fdfb50c3042b6b9d869f542a7d&w=2000)'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align black-text">
          <p className="flowtext hide-on-small-only">Fitness Starts with what you eat</p>
          <h3>
            Track food, Eat Healthier, <br/> Stay motivated
          </h3>

          <p className="big">
          Take control of your goals. Track calories, break down ingredients, and
            <br/>
            log activities with CalCountApp.
          </p>

          <a href="https://drive.google.com/drive/folders/1I0-Q0FQQLmVhRm4P4I_1dP3SGcKlDazZ?usp=sharing" target="_blank" rel="noreferrer">
          Download the Apk
        </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
