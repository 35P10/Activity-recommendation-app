import React from 'react';
import {getRandomActivity} from '../helpers/getRandomActivity' 
import './RandomActivity.css'

export const RandomActivity = ({setActivity}) => {
  
  const handleRandomActivity = () => {
    getRandomActivity()
      .then(setActivity);
  };
      
  return <button onClick={handleRandomActivity}><span id="icon-random"></span></button>;
};

export default RandomActivity;