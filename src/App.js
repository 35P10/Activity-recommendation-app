import React, { useEffect, useState } from 'react';
import { getRandomActivity } from './helpers/getRandomActivity';
import { Header } from './components/header';
import RandomActivity from './components/RandomActivity';
import'./App.css';


export const App = () => {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getRandomActivity()
      .then(setActivity);
  }, []);

  return <>
      <Header activity={activity} setActivity={setActivity}/> 
      <main>
        {activity.error ? <div className='main-activity-error'>{activity.error}</div> : null}
        <div className='main-activity-name'>
          <h2>{activity.activity}</h2>
          <h5>KEY: {activity.key}</h5>
        </div>
        <table className='table-properties'>
          <tbody>
            <tr><th className='table-right-align'>Type</th><th className='table-left-align'>{activity.type}</th></tr>
            <tr><th className='table-right-align'>Participants</th><th className='table-left-align'>{activity.participants}</th></tr>
            <tr><th className='table-right-align'>Price</th><th className='table-left-align'>{activity.price}</th></tr>
            <tr><th className='table-right-align'>Accessibility</th><th className='table-left-align'>{activity.accessibility}</th></tr>
            {activity.link?<tr><th colSpan="2"><a href={activity.link}>Link provided</a></th></tr>:null}
          </tbody>
        </table>

        <RandomActivity setActivity={setActivity}/>
      </main>
      <footer><a href='https://github.com/35P10/Activity-recommendation-app'><span id='icon-github'></span></a></footer>
    </>;
};

export default App;
