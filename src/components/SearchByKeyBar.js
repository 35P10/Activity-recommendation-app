import React, { useState } from 'react';
import { getActivityByKey } from '../helpers/getActivityByKey';
import './SearchByKeyBar.css';

export const SearchByKeyBar = ({setActivity}) => {

    const [inputKey, setinputKey] = useState('');

    const handleKeyChange = ({target}) => setinputKey(target.value);
    
    const handleSubmit = (e) => {
      e.preventDefault(); //evitar que la pagina se actualize al presionar Enter en el input
      getActivityByKey(inputKey)
      .then(setActivity)    
    };

    return (
      <form className='search-key-form' onSubmit={handleSubmit}>
          <input
                  type = "number"
                  onChange={handleKeyChange}
                  placeholder='Key'
          />
          <button className='submit-button' type='submit'><span id='icon-arrow'></span></button>  
      </form>
    )
}
