import React from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import classes from './Guide.css';
import WIPHATTHRA from './Wiphatthra';

const guide = () => (
  <div className={classes.Main}>
    <CloudinaryContext cloudName="chittawela">
      <Image className={classes.Image} publicId={WIPHATTHRA[0].publicId} />
    </CloudinaryContext>
    <p className={classes.Text}> My name is Wiphatthra Tangchit. I'm 33 years old, Thai origin with later on also Dutch nationality grew up in the cultural city the northern part of Thailand: Chiang Mai. Since I was little and the entire youth I got
        opportunities to travel and live in many different communities followed my parents I've had experienced in the difference.
        my passionate always has been learning about people in different culture and see their ways of living. That made me realized at an early stage in my life journey that we all seeking for happiness.being heartfulness it is the way to the happiness. when we're in
        peace and free from within.</p>
  </div>
);

export default guide;