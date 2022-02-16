import React, { useEffect, useState } from 'react';
import { getRandomActivity } from './helpers/getRandomActivity';
import { Header } from './components/header';

export const App = () => {

  const [activity, setActivity] = useState([]);

  
  useEffect(() => {
      getRandomActivity()
        .then(setActivity);
  }, []);



const handleRandomActivity = () => {
    getRandomActivity()
      .then(setActivity);
  }

  return <>
      <Header setActivity={setActivity}/> 
      <main>
        <h2>{activity.activity}</h2>
        <h5>key: {activity.key}</h5>
        <button onClick={handleRandomActivity}><span id="icon-random"></span></button>
      </main>
      <footer><a href='https://github.com/35P10/Activity-recommendation-app'><span id='icon-github'></span></a></footer>
    </>;
};



export default App;
