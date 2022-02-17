import React, { useState } from 'react'
import { getfilterActivity } from '../helpers/getfilterActivity';
import './Filter.css';

export const Filter = ({setActivity}) => {

    const [type, setType] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [participants,setParticipants] = useState('');
    const [price,setPrice] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        getfilterActivity(type,accessibility,participants,price)
            .then(setActivity);
    };


    const handleChange = ({target},func) => func(target.value);
    

    return (
      <form className='filter-form' onSubmit={handleSubmit}>
          <div className='filter-form-inputs'>
          <input type="text"   className='filter-input-text' placeholder='Category'  onChange={ e => handleChange(e,setType)} />
          <div className='filter-form-inputs-number_row'>
          <input type="number" className='filter-input-number' placeholder='Accessibility' onChange={ e => handleChange(e,setAccessibility)} />
          <input type="number" className='filter-input-number' placeholder='Participants' onChange={ e => handleChange(e,setParticipants)} />
          <input type="number" className='filter-input-number' placeholder='Price' onChange={ e => handleChange(e,setPrice)} />
          </div>  
          </div>    
          <button className='submit-button' type='submit'><span id='icon-arrow'></span></button>  
      </form>
    )
}
