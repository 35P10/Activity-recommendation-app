import React, { useEffect, useState } from 'react';
import {getRandomActivity} from '../helpers/getRandomActivity' 


export const RandomActivity = () => {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
      getRandomActivity()
        .then(setActivity);
    }, []);
  
  
    const handleActivity = () => {
      getRandomActivity()
        .then(setActivity);
    }
      
  
    return <div>
        <button onClick={handleActivity}>Actividad Aleatoria</button>
        <h3>{activity.activity}</h3>
      </div>;
};

export default RandomActivity;