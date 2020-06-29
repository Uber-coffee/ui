import React from 'react';
import classes from './Unloged.module.css';
import SimpleSlider from './Slider/Slider';
import Iframe from 'react-iframe';

const Unloged = props => {
  return (
    <div className={classes.content}>
      <div className={classes.imgs}>
        <SimpleSlider />
      </div>
      <div className={classes.description}>
        <div className={classes.text_photo}>
          <span className={classes.steps}>Only 3 steps:</span>
          <span className={classes.step}>1. Sign up to Google App</span>
          <span className={classes.step}>2. Order a Drink</span>
          <span className={classes.step}>3. Pick up along the Way</span>
          <div className={classes.google} />
        </div>
        <div className={classes.google_map}>
          <div className={classes.map}>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.4716527188705!2d30.307559693678034!3d59.9574994512446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963141499f00b9%3A0x630ff799025ac60a!2sITMO%20University!5e0!3m2!1sen!2sru!4v1593086274502!5m2!1sen!2sru"
              width="300"
              height="200"
              id="map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unloged;
